var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function N(e,t){se++,oe[se]=e.current,e.current=t}var ue=ce(null),de=ce(null),fe=ce(null),pe=ce(null);function me(e,t){switch(N(fe,t),N(de,e),N(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(ue),N(ue,e)}function he(){le(ue),le(de),le(fe)}function ge(e){e.memoizedState!==null&&N(pe,e);var t=ue.current,n=Hd(t,e.type);t!==n&&(N(de,e),N(ue,n))}function _e(e){de.current===e&&(le(ue),le(de)),pe.current===e&&(le(pe),Qf._currentValue=ae)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=M.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return Te.call(jt,e)?!0:Te.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ie(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=f({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=f({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(f({},Mn,{dataTransfer:0})),Fn=wn(f({},Dn,{relatedTarget:0})),In=wn(f({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(f({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(f({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(f({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(f({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(f({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(f({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(f({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(f({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Bt(St(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Vt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Dt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=pi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=pi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=pi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-He(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=ce(null),Xi=null,Zi=null;function Qi(e,t,n){N(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,le(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function I(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Xi,e)}function aa(e,t){return Xi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=j.S;j.S=function(e,t){eu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=ce(null);function Sa(){var e=xa.current;return e===null?q.pooledCache:e}function Ca(e,t){t===null?N(xa,xa.current):N(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case O:return t=ja(t),f(e,t,n)}if(ie(t)||k(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ja(n),p(e,t,n,r)}if(ie(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ja(r),m(e,t,n,r,i)}if(ie(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=ja(o),b(e,r,o,c)}if(ie(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Y&p)===p:(r&p)===p){p!==0&&p===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ua=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=ce(null),no=ce(0);function L(e,t){e=Ul,N(no,e),N(to,t),Ul=e|t.baseLanes}function ro(){N(no,Ul),N(to,to.current)}function io(){Ul=no.current,le(to),le(no)}var ao=ce(null),oo=null;function so(e){var t=e.alternate;N(po,po.current&1),N(ao,e),oo===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){N(po,po.current),N(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(N(po,po.current),N(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){N(po,po.current),N(ao,ao.current)}function fo(e){le(ao),oo===e&&(oo=null),le(po)}var po=ce(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?zs:Bs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){j.H=Rs;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&na(e)&&(rc=!0))}function Do(e,t,n,r){R=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Vs,o=t(n,r)}while(_o);return o}function Oo(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function ko(){var e=yo!==0;return yo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function V(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}ho=0,B=z=R=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function Mo(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Aa(xo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?zs:Bs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(Mo(),z,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((ho&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(rc=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=R,a=Mo(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,ds(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||ho&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=No(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Ko(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,z,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function H(e,t){return t}function ts(e,t){if(F){var n=q.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H,lastRenderedState:t},n.queue=r,n=Ms.bind(null,R,r),r.dispatch=n,r=qo(!1),a=Ps.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(Mo(),z,e)}function rs(e,t,n){if(t=zo(e,t,H)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Mo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=Mo(),n=z;if(n!==null)return rs(t,n,e);Mo(),t=t.memoizedState,n=Mo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=No(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return Mo().memoizedState}function cs(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&wo(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=No(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=Mo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),vo){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Dr(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Dr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,Ps(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ya(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,ae,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return ia(Qf)}function Os(){return Mo().memoizedState}function ks(){return Mo().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),q===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===R||t!==null&&t===R}function Is(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Rs={readContext:ia,use:Fo,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Rs.useEffectEvent=Co;var zs={readContext:ia,use:Fo,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ms.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return bs(jo(),e,t)},useTransition:function(){var e=qo(!1);return e=Ss.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Wo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=q.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return jo().memoizedState=As.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:ia,use:Fo,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:U,useReducer:Ro,useRef:ss,useState:function(){return Ro(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Mo(),z.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:Os,useHostTransitionStatus:Ds,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return Jo(Mo(),z,e,t)},useMemoCache:Io,useCacheRefresh:ks};Bs.useEffectEvent=ps;var Vs={readContext:ia,use:Fo,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:U,useReducer:Bo,useRef:ss,useState:function(){return Bo(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){var n=Mo();return z===null?bs(n,e,t):xs(n,z.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:Os,useHostTransitionStatus:Ds,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=Mo();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,z,e,t)},useMemoCache:Io,useCacheRefresh:ks};Vs.useEffectEvent=ps;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){ti(e)}function Js(e){console.error(e)}function Ys(e){ti(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Ka(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&I(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=ao.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=Qs(e.stateNode,r,a),Ya(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!rc?(Ao(e,t,i),kc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?ro():L(t,a),lo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),ro(),uo(t)):(Ca(t,a.cachePool),L(t,a),uo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),ro(),lo(t),e!==null&&I(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Va(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(co(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||I(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=dc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return ra(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!rc?(Ao(e,t,i),kc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!rc?(Ao(e,t,a),kc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ua||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ua||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Ki(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:wa()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(po.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?so(t):uo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(so(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||I(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Va(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=po.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,N(po,o),ic(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(I(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&na(e))):!0}function jc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Qi(t,ua,e.memoizedState.cache),Ki();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(I(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(po,po.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Qi(t,ua,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,ua,r),r!==o.cache&&ta(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[dt]=t,r[ft]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Sc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=q,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,ua,r),r!==a.cache&&ta(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,ua,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ma=Oa,Ea}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(ua),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=ue.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=ue.current,Gi(t))Ui(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return $i(t.type),W(t),null;case 19:if(le(po),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return N(po,po.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return W(t),null}else 2*Ae()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=po.current,N(po,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(ua),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(ua),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(po),null;case 4:return he(),null;case 10:return $i(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&le(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(ua),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ii(t),t.tag){case 3:$i(ua),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:le(po);break;case 10:$i(t.type);break;case 22:case 23:fo(t),io(),e!==null&&le(xa);break;case 24:$i(ua)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ft]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[dt]=e,t[ft]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Vc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?G(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Zd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),Sl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function G(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:G(i,a,n),Vc(4,a);break;case 1:if(G(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:G(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:G(i,a,n);break;case 31:G(i,a,n),n&&o&4&&fl(i,a);break;case 13:G(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&G(i,a,n),Gc(a,a.return);break;case 30:break;default:G(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),Al(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:j.T===null?ct():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||F){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ae(),10<a)){if(yu(r,t,Jl,!Bl),Xe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},jl(t,a,d);var m=(a&62914560)===a?$l-Ae():(a&4194048)===a?eu-Ae():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Zi=Xi=null,V(e),Fa=null,Ia=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ze(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ai(),n}function Cu(e,t){R=null,j.H=Rs,t===Ta||t===Da?(t=Na(),X=3):t===Ea?(t=Na(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,Ci(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(Y&4194048)===Y?oo===null:(Y&62914560)===Y||Y&536870912?e===oo:!1}function Tu(){var e=j.H;return j.H=Rs,e===null?Rs:e}function Eu(){var e=j.A;return j.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&ao.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,K=r,j.H=i,j.A=a,J===null&&(q=null,Y=0,ai()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ae()+500,Su(e,t)):Vl=Ze(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:ka(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,j.H=r,j.A=a,K=n,J===null?(q=null,Y=0,ai(),Wl):0}function ju(){for(;J!==null&&!Oe();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:V(t);default:Bc(n,t),t=J=gi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Zi=Xi=null,V(t),Fa=null,Ia=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,Ci(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,nt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Pe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,M.p=a,j.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=K;K|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,M.p=r,j.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,M.p=r,j.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ke();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{M.p=a,j.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=Qs(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=$s(2),r=qa(t,n,2),r!==null&&(ec(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ae()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=ci(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ee(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Xe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ae(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=cd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Xe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ee(Me,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=In;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=M.d;M.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,up(e,t,n,r)}finally{M.p=a,j.T=i}}function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,up(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ae()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[pt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ze=zp.inject(Rp),Be=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[pt]=t.current,Sd(e),new Fp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/Nithiya-Ayurveda/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=u(p(),1),T=e=>{throw TypeError(e)},E=(e,t,n)=>t.has(e)||T(`Cannot `+n),D=(e,t,n)=>(E(e,t,`read from private field`),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?T(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ae(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),j(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:M(t))}function r(e,t){A(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return oe(t,n,r,e)}function k(e,t){if(e===!1||e==null)throw Error(t)}function A(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function re(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function j(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||re(),unstable_mask:i}}function M({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:j(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:j(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),k(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:M(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}var ce,le=class{constructor(e){if(O(this,ce,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(D(this,ce).has(e))return D(this,ce).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw Error(`No value found for context`)}set(e,t){D(this,ce).set(e,t)}};ce=new WeakMap;var N=new Set([`lazy`,`caseSensitive`,`path`,`id`,`index`,`children`]);function ue(e){return N.has(e)}var de=new Set([`lazy`,`caseSensitive`,`path`,`id`,`index`,`middleware`,`children`]);function fe(e){return de.has(e)}function pe(e){return e.index===!0}function me(e,t,n=[],r={},i=!1){return e.map((e,a)=>{let o=[...n,String(a)],s=typeof e.id==`string`?e.id:o.join(`-`);if(k(e.index!==!0||!e.children,`Cannot specify children on an index route`),k(i||!r[s],`Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`),pe(e)){let n={...e,id:s};return r[s]=he(n,t(n)),n}else{let n={...e,id:s,children:void 0};return r[s]=he(n,t(n)),e.children&&(n.children=me(e.children,t,o,r,i)),n}})}function he(e,t){return Object.assign(e,{...t,...typeof t.lazy==`object`&&t.lazy!=null?{lazy:{...e.lazy,...t.lazy}}:{}})}function ge(e,t,n=`/`){return _e(e,t,n,!1)}function _e(e,t,n,r){let i=Fe((typeof t==`string`?ae(t):t).pathname||`/`,n);if(i==null)return null;let a=ye(e);xe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Pe(i);o=je(a[e],t,r)}return o}function ve(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ye(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;k(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ge([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(k(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ye(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ke(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of be(e.path))a(e,t,!0,n)}),t}function be(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=be(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function xe(e){e.sort((e,t)=>e.score===t.score?Ae(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Se=/^:[\w-]+$/,Ce=3,we=2,Te=1,Ee=10,De=-2,Oe=e=>e===`*`;function ke(e,t){let n=e.split(`/`),r=n.length;return n.some(Oe)&&(r+=De),t&&(r+=we),n.filter(e=>!Oe(e)).reduce((e,t)=>e+(Se.test(t)?Ce:t===``?Te:Ee),r)}function Ae(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function je(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Me({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Me({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ge([a,u.pathname]),pathnameBase:Ke(Ge([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ge([a,u.pathnameBase]))}return o}function Me(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ne(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ne(e,t=!1,n=!0){A(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Pe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return A(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Fe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ie({basename:e,pathname:t}){return t===`/`?e:Ge([e,t])}var Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=e=>Le.test(e);function ze(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Be(n.substring(1),`/`):Be(n,t)):a=t,{pathname:a,search:qe(r),hash:Je(i)}}function Be(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ve(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function He(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ue(e){let t=He(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function We(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},k(!i.pathname||!i.pathname.includes(`?`),Ve(`?`,`pathname`,`search`,i)),k(!i.pathname||!i.pathname.includes(`#`),Ve(`#`,`pathname`,`hash`,i)),k(!i.search||!i.search.includes(`#`),Ve(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ze(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ge=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ke=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),qe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Je=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ye=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Xe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ze(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Qe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function $e(e,t){let n=e;if(typeof n!=`string`||!Le.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Qe)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Fe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{A(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}var et=Symbol(`Uninstrumented`);function tt(e,t){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(e=>e({id:t.id,index:t.index,path:t.path,instrument(e){let t=Object.keys(n);for(let r of t)e[r]&&n[r].push(e[r])}}));let r={};if(typeof t.lazy==`function`&&n.lazy.length>0){let e=rt(n.lazy,t.lazy,()=>void 0);e&&(r.lazy=e)}if(typeof t.lazy==`object`){let e=t.lazy;[`middleware`,`loader`,`action`].forEach(t=>{let i=e[t],a=n[`lazy.${t}`];if(typeof i==`function`&&a.length>0){let e=rt(a,i,()=>void 0);e&&(r.lazy=Object.assign(r.lazy||{},{[t]:e}))}})}return[`loader`,`action`].forEach(e=>{let i=t[e];if(typeof i==`function`&&n[e].length>0){let t=i[et]??i,a=rt(n[e],t,(...e)=>at(e[0]));a&&(e===`loader`&&t.hydrate===!0&&(a.hydrate=!0),a[et]=t,r[e]=a)}}),t.middleware&&t.middleware.length>0&&n.middleware.length>0&&(r.middleware=t.middleware.map(e=>{let t=e[et]??e,r=rt(n.middleware,t,(...e)=>at(e[0]));return r?(r[et]=t,r):e})),r}function nt(e,t){let n={navigate:[],fetch:[]};if(t.forEach(e=>e({instrument(e){let t=Object.keys(e);for(let r of t)e[r]&&n[r].push(e[r])}})),n.navigate.length>0){let t=e.navigate[et]??e.navigate,r=rt(n.navigate,t,(...t)=>{let[n,r]=t;return{to:typeof n==`number`||typeof n==`string`?n:n?M(n):`.`,...ot(e,r??{})}});r&&(r[et]=t,e.navigate=r)}if(n.fetch.length>0){let t=e.fetch[et]??e.fetch,r=rt(n.fetch,t,(...t)=>{let[n,,r,i]=t;return{href:r??`.`,fetcherKey:n,...ot(e,i??{})}});r&&(r[et]=t,e.fetch=r)}return e}function rt(e,t,n){return e.length===0?null:async(...r)=>{let i=await it(e,n(...r),()=>t(...r),e.length-1);if(i.type===`error`)throw i.value;return i.value}}async function it(e,t,n,r){let i=e[r],a;if(i){let o,s=async()=>(o?console.error(`You cannot call instrumented handlers more than once`):o=it(e,t,n,r-1),a=await o,k(a,`Expected a result`),a.type===`error`&&a.value instanceof Error?{status:`error`,error:a.value}:{status:`success`,error:void 0});try{await i(s,t)}catch(e){console.error(`An instrumentation function threw an error:`,e)}o||await s(),await o}else try{a={type:`success`,value:await n()}}catch(e){a={type:`error`,value:e}}return a||{type:`error`,value:Error(`No result assigned in instrumentation chain.`)}}function at(e){let{request:t,context:n,params:r,unstable_pattern:i}=e;return{request:st(t),params:{...r},unstable_pattern:i,context:ct(n)}}function ot(e,t){return{currentUrl:M(e.state.location),...`formMethod`in t?{formMethod:t.formMethod}:{},...`formEncType`in t?{formEncType:t.formEncType}:{},...`formData`in t?{formData:t.formData}:{},...`body`in t?{body:t.body}:{}}}function st(e){return{method:e.method,url:e.url,headers:{get:(...t)=>e.headers.get(...t)}}}function ct(e){if(ut(e)){let t={...e};return Object.freeze(t),t}else return{get:t=>e.get(t)}}var lt=Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function ut(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join(`\0`)===lt}var dt=[`POST`,`PUT`,`PATCH`,`DELETE`],ft=new Set(dt),pt=[`GET`,...dt],mt=new Set(pt),ht=new Set([301,302,303,307,308]),gt=new Set([307,308]),_t={state:`idle`,location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},vt={state:`idle`,data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yt={state:`unblocked`,proceed:void 0,reset:void 0,location:void 0},bt=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),xt=`remix-router-transitions`,St=Symbol(`ResetLoaderData`);function Ct(e){let t=e.window?e.window:typeof window<`u`?window:void 0,n=t!==void 0&&t.document!==void 0&&t.document.createElement!==void 0;k(e.routes.length>0,`You must provide a non-empty routes array to createRouter`);let r=e.hydrationRouteProperties||[],i=e.mapRouteProperties||bt,a=i;if(e.unstable_instrumentations){let t=e.unstable_instrumentations;a=e=>({...i(e),...tt(t.map(e=>e.route).filter(Boolean),e)})}let o={},s=me(e.routes,a,void 0,o),c,l=e.basename||`/`;l.startsWith(`/`)||(l=`/${l}`);let u=e.dataStrategy||Bt,d={unstable_passThroughRequests:!1,...e.future},f=null,p=new Set,m=null,h=null,g=null,_=e.hydrationData!=null,v=ge(s,e.history.location,l),y=!1,b=null,x,S;if(v==null&&!e.patchRoutesOnNavigation){let t=dn(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=un(s);x=!0,S=!x,v=n,b={[r.id]:t}}else if(v&&!e.hydrationData&&dt(v,s,e.history.location.pathname).active&&(v=null),!v){x=!1,S=!x,v=[];let t=dt(null,s,e.history.location.pathname);t.active&&t.matches&&(y=!0,v=t.matches)}else if(v.some(e=>e.route.lazy))x=!1,S=!x;else if(!v.some(e=>Ot(e.route)))x=!0,S=!x;else{let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null,r=v;if(n){let e=v.findIndex(e=>n[e.route.id]!==void 0);r=r.slice(0,e+1)}S=!1,x=!0,r.forEach(e=>{let r=kt(e.route,t,n);S||=r.renderFallback,x&&=!r.shouldLoad})}let C,w={historyAction:e.history.action,location:e.history.location,matches:v,initialized:x,renderFallback:S,navigation:_t,restoreScrollPosition:e.hydrationData==null?null:!1,preventScrollReset:!1,revalidation:`idle`,loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},T=`POP`,E=null,D=!1,O,ee=!1,te=new Map,ne=null,re=!1,ie=!1,M=new Set,oe=new Map,ce=0,N=-1,ue=new Map,de=new Set,fe=new Map,pe=new Map,he=new Set,ye=new Map,be,xe=null;function Se(){if(f=e.history.listen(({action:t,location:n,delta:r})=>{if(be){be(),be=void 0;return}A(ye.size===0||r!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=at({currentLocation:w.location,nextLocation:n,historyAction:t});if(i&&r!=null){let t=new Promise(e=>{be=e});e.history.go(r*-1),it(i,{state:`blocked`,location:n,proceed(){it(i,{state:`proceeding`,proceed:void 0,reset:void 0,location:n}),t.then(()=>e.history.go(r))},reset(){let e=new Map(w.blockers);e.set(i,yt),Te({blockers:e})}}),E?.resolve(),E=null;return}return ke(t,n)}),n){Fn(t,te);let e=()=>In(t,te);t.addEventListener(`pagehide`,e),ne=()=>t.removeEventListener(`pagehide`,e)}return w.initialized||ke(`POP`,w.location,{initialHydration:!0}),C}function Ce(){f&&f(),ne&&ne(),p.clear(),O&&O.abort(),w.fetchers.forEach((e,t)=>qe(t)),w.blockers.forEach((e,t)=>rt(t))}function we(e){return p.add(e),()=>p.delete(e)}function Te(e,t={}){e.matches&&=e.matches.map(e=>{let t=o[e.route.id],n=e.route;return n.element!==t.element||n.errorElement!==t.errorElement||n.hydrateFallbackElement!==t.hydrateFallbackElement?{...e,route:t}:e}),w={...w,...e};let n=[],r=[];w.fetchers.forEach((e,t)=>{e.state===`idle`&&(he.has(t)?n.push(t):r.push(t))}),he.forEach(e=>{!w.fetchers.has(e)&&!oe.has(e)&&n.push(e)}),[...p].forEach(r=>r(w,{deletedFetchers:n,newErrors:e.errors??null,viewTransitionOpts:t.viewTransitionOpts,flushSync:t.flushSync===!0})),n.forEach(e=>qe(e)),r.forEach(e=>w.fetchers.delete(e))}function Ee(t,n,{flushSync:r}={}){let i=w.actionData!=null&&w.navigation.formMethod!=null&&En(w.navigation.formMethod)&&w.navigation.state===`loading`&&t.state?._isRedirect!==!0,a;a=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:i?w.actionData:null;let o=n.loaderData?sn(w.loaderData,n.loaderData,n.matches||[],n.errors):w.loaderData,l=w.blockers;l.size>0&&(l=new Map(l),l.forEach((e,t)=>l.set(t,yt)));let u=re?!1:ut(t,n.matches||w.matches),d=D===!0||w.navigation.formMethod!=null&&En(w.navigation.formMethod)&&t.state?._isRedirect!==!0;c&&=(s=c,void 0),re||T===`POP`||(T===`PUSH`?e.history.push(t,t.state):T===`REPLACE`&&e.history.replace(t,t.state));let f;if(T===`POP`){let e=te.get(w.location.pathname);e&&e.has(t.pathname)?f={currentLocation:w.location,nextLocation:t}:te.has(t.pathname)&&(f={currentLocation:t,nextLocation:w.location})}else if(ee){let e=te.get(w.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),te.set(w.location.pathname,e)),f={currentLocation:w.location,nextLocation:t}}Te({...n,actionData:a,loaderData:o,historyAction:T,location:t,initialized:!0,renderFallback:!1,navigation:_t,revalidation:`idle`,restoreScrollPosition:u,preventScrollReset:d,blockers:l},{viewTransitionOpts:f,flushSync:r===!0}),T=`POP`,D=!1,ee=!1,re=!1,ie=!1,E?.resolve(),E=null,xe?.resolve(),xe=null}async function De(t,n){if(E?.resolve(),E=null,typeof t==`number`){E||=Ln();let n=E.promise;return e.history.go(t),n}let{path:r,submission:i,error:a}=Et(!1,Tt(w.location,w.matches,l,t,n?.fromRouteId,n?.relative),n),o;n?.unstable_mask&&(o={pathname:``,search:``,hash:``,...typeof n.unstable_mask==`string`?ae(n.unstable_mask):{...w.location.unstable_mask,...n.unstable_mask}});let s=w.location,c=j(s,r,n&&n.state,void 0,o);c={...c,...e.history.encodeLocation(c)};let u=n&&n.replace!=null?n.replace:void 0,d=`PUSH`;u===!0?d=`REPLACE`:u===!1||i!=null&&En(i.formMethod)&&i.formAction===w.location.pathname+w.location.search&&(d=`REPLACE`);let f=n&&`preventScrollReset`in n?n.preventScrollReset===!0:void 0,p=(n&&n.flushSync)===!0,m=at({currentLocation:s,nextLocation:c,historyAction:d});if(m){it(m,{state:`blocked`,location:c,proceed(){it(m,{state:`proceeding`,proceed:void 0,reset:void 0,location:c}),De(t,n)},reset(){let e=new Map(w.blockers);e.set(m,yt),Te({blockers:e})}});return}await ke(d,c,{submission:i,pendingError:a,preventScrollReset:f,replace:n&&n.replace,enableViewTransition:n&&n.viewTransition,flushSync:p,callSiteDefaultShouldRevalidate:n&&n.unstable_defaultShouldRevalidate})}function Oe(){xe||=Ln(),He(),Te({revalidation:`loading`});let e=xe.promise;return w.navigation.state===`submitting`?e:w.navigation.state===`idle`?(ke(w.historyAction,w.location,{startUninterruptedRevalidation:!0}),e):(ke(T||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:ee===!0}),e)}async function ke(t,n,r){O&&O.abort(),O=null,T=t,re=(r&&r.startUninterruptedRevalidation)===!0,lt(w.location,w.matches),D=(r&&r.preventScrollReset)===!0,ee=(r&&r.enableViewTransition)===!0;let i=c||s,a=r&&r.overrideNavigation,o=r?.initialHydration&&w.matches&&w.matches.length>0&&!y?w.matches:ge(i,n,l),u=(r&&r.flushSync)===!0;if(o&&w.initialized&&!ie&&mn(w.location,n)&&!(r&&r.submission&&En(r.submission.formMethod))){Ee(n,{matches:o},{flushSync:u});return}let d=dt(o,i,n.pathname);if(d.active&&d.matches&&(o=d.matches),!o){let{error:e,notFoundMatches:t,route:r}=ot(n.pathname);Ee(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:u});return}O=new AbortController;let f=en(e.history,n,O.signal,r&&r.submission),p=e.getContext?await e.getContext():new le,m;if(r&&r.pendingError)m=[ln(o).route.id,{type:`error`,error:r.pendingError}];else if(r&&r.submission&&En(r.submission.formMethod)){let t=await Ae(f,n,r.submission,o,p,d.active,r&&r.initialHydration===!0,{replace:r.replace,flushSync:u});if(t.shortCircuited)return;if(t.pendingActionResult){let[e,r]=t.pendingActionResult;if(yn(r)&&Xe(r.error)&&r.error.status===404){O=null,Ee(n,{matches:t.matches,loaderData:{},errors:{[e]:r.error}});return}}o=t.matches||o,m=t.pendingActionResult,a=An(n,r.submission),u=!1,d.active=!1,f=en(e.history,f.url,f.signal)}let{shortCircuited:h,matches:g,loaderData:_,errors:v}=await je(f,n,o,p,d.active,a,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,r&&r.initialHydration===!0,u,m,r&&r.callSiteDefaultShouldRevalidate);h||(O=null,Ee(n,{matches:g||o,...cn(m),loaderData:_,errors:v}))}async function Ae(t,n,i,c,u,d,f,p={}){if(He(),Te({navigation:jn(n,i)},{flushSync:p.flushSync===!0}),d){let e=await ft(c,n.pathname,t.signal);if(e.type===`aborted`)return{shortCircuited:!0};if(e.type===`error`){if(e.partialMatches.length===0){let{matches:t,route:n}=un(s);return{matches:t,pendingActionResult:[n.id,{type:`error`,error:e.error}]}}let t=ln(e.partialMatches).route.id;return{matches:e.partialMatches,pendingActionResult:[t,{type:`error`,error:e.error}]}}else if(e.matches)c=e.matches;else{let{notFoundMatches:e,error:t,route:r}=ot(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:`error`,error:t}]}}}let m,h=On(c,n);if(!h.route.action&&!h.route.lazy)m={type:`error`,error:dn(405,{method:t.method,pathname:n.pathname,routeId:h.route.id})};else{let e=await Be(t,n,Kt(a,o,t,n,c,h,f?[]:r,u),u,null);if(m=e[h.route.id],!m){for(let t of c)if(e[t.route.id]){m=e[t.route.id];break}}if(t.signal.aborted)return{shortCircuited:!0}}if(bn(m)){let n;return n=p&&p.replace!=null?p.replace:$t(m.response.headers.get(`Location`),new URL(t.url),l,e.history)===w.location.pathname+w.location.search,await ze(t,m,!0,{submission:i,replace:n}),{shortCircuited:!0}}if(yn(m)){let e=ln(c,h.route.id);return(p&&p.replace)!==!0&&(T=`PUSH`),{matches:c,pendingActionResult:[e.route.id,m,h.route.id]}}return{matches:c,pendingActionResult:[h.route.id,m]}}async function je(t,n,i,u,d,f,p,m,h,g,_,v,y){let b=f||An(n,p),x=p||m||kn(b),S=!re&&!g;if(d){if(S){let e=Me(v);Te({navigation:b,...e===void 0?{}:{actionData:e}},{flushSync:_})}let e=await ft(i,n.pathname,t.signal);if(e.type===`aborted`)return{shortCircuited:!0};if(e.type===`error`){if(e.partialMatches.length===0){let{matches:t,route:n}=un(s);return{matches:t,loaderData:{},errors:{[n.id]:e.error}}}let t=ln(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}else if(e.matches)i=e.matches;else{let{error:e,notFoundMatches:t,route:r}=ot(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}}let C=c||s,{dsMatches:T,revalidatingFetchers:E}=Dt(t,u,a,o,e.history,w,i,x,n,g?[]:r,g===!0,ie,M,he,fe,de,C,l,e.patchRoutesOnNavigation!=null,v,y);if(N=++ce,!e.dataStrategy&&!T.some(e=>e.shouldLoad)&&!T.some(e=>e.route.middleware&&e.route.middleware.length>0)&&E.length===0){let e=Qe();return Ee(n,{matches:i,loaderData:{},errors:v&&yn(v[1])?{[v[0]]:v[1].error}:null,...cn(v),...e?{fetchers:new Map(w.fetchers)}:{}},{flushSync:_}),{shortCircuited:!0}}if(S){let e={};if(!d){e.navigation=b;let t=Me(v);t!==void 0&&(e.actionData=t)}E.length>0&&(e.fetchers=Ne(E)),Te(e,{flushSync:_})}E.forEach(e=>{Ye(e.key),e.controller&&oe.set(e.key,e.controller)});let D=()=>E.forEach(e=>Ye(e.key));O&&O.signal.addEventListener(`abort`,D);let{loaderResults:ee,fetcherResults:te}=await Ve(T,E,t,n,u);if(t.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener(`abort`,D),E.forEach(e=>oe.delete(e.key));let ne=fn(ee);if(ne)return await ze(t,ne.result,!0,{replace:h}),{shortCircuited:!0};if(ne=fn(te),ne)return de.add(ne.key),await ze(t,ne.result,!0,{replace:h}),{shortCircuited:!0};let{loaderData:k,errors:A}=on(w,i,ee,v,E,te);g&&w.errors&&(A={...w.errors,...A});let j=Qe(),ae=$e(N),se=j||ae||E.length>0;return{matches:i,loaderData:k,errors:A,...se?{fetchers:new Map(w.fetchers)}:{}}}function Me(e){if(e&&!yn(e[1]))return{[e[0]]:e[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function Ne(e){return e.forEach(e=>{let t=w.fetchers.get(e.key),n=Mn(void 0,t?t.data:void 0);w.fetchers.set(e.key,n)}),new Map(w.fetchers)}async function Pe(t,n,r,i){Ye(t);let a=(i&&i.flushSync)===!0,o=c||s,u=Tt(w.location,w.matches,l,r,n,i?.relative),d=ge(o,u,l),f=dt(d,o,u);if(f.active&&f.matches&&(d=f.matches),!d){We(t,n,dn(404,{pathname:u}),{flushSync:a});return}let{path:p,submission:m,error:h}=Et(!0,u,i);if(h){We(t,n,h,{flushSync:a});return}let g=e.getContext?await e.getContext():new le,_=(i&&i.preventScrollReset)===!0;if(m&&En(m.formMethod)){await Ie(t,n,p,d,g,f.active,a,_,m,i&&i.unstable_defaultShouldRevalidate);return}fe.set(t,{routeId:n,path:p}),await Le(t,n,p,d,g,f.active,a,_,m)}async function Ie(t,n,i,u,d,f,p,m,h,g){He(),fe.delete(t),Ue(t,Nn(h,w.fetchers.get(t)),{flushSync:p});let _=new AbortController,v=en(e.history,i,_.signal,h);if(f){let e=await ft(u,new URL(v.url).pathname,v.signal,t);if(e.type===`aborted`)return;if(e.type===`error`){We(t,n,e.error,{flushSync:p});return}else if(e.matches)u=e.matches;else{We(t,n,dn(404,{pathname:i}),{flushSync:p});return}}let y=On(u,i);if(!y.route.action&&!y.route.lazy){We(t,n,dn(405,{method:h.formMethod,pathname:i,routeId:n}),{flushSync:p});return}oe.set(t,_);let b=ce,x=Kt(a,o,v,i,u,y,r,d),S=await Be(v,i,x,d,t),C=S[y.route.id];if(!C){for(let e of x)if(S[e.route.id]){C=S[e.route.id];break}}if(v.signal.aborted){oe.get(t)===_&&oe.delete(t);return}if(he.has(t)){if(bn(C)||yn(C)){Ue(t,Pn(void 0));return}}else{if(bn(C))if(oe.delete(t),N>b){Ue(t,Pn(void 0));return}else return de.add(t),Ue(t,Mn(h)),ze(v,C,!1,{fetcherSubmission:h,preventScrollReset:m});if(yn(C)){We(t,n,C.error);return}}let E=w.navigation.location||w.location,D=en(e.history,E,_.signal),ee=c||s,te=w.navigation.state===`idle`?w.matches:ge(ee,w.navigation.location,l);k(te,`Didn't find any matches after fetcher action`);let ne=++ce;ue.set(t,ne);let A=Mn(h,C.data);w.fetchers.set(t,A);let{dsMatches:re,revalidatingFetchers:j}=Dt(D,d,a,o,e.history,w,te,h,E,r,!1,ie,M,he,fe,de,ee,l,e.patchRoutesOnNavigation!=null,[y.route.id,C],g);j.filter(e=>e.key!==t).forEach(e=>{let t=e.key,n=w.fetchers.get(t),r=Mn(void 0,n?n.data:void 0);w.fetchers.set(t,r),Ye(t),e.controller&&oe.set(t,e.controller)}),Te({fetchers:new Map(w.fetchers)});let ae=()=>j.forEach(e=>Ye(e.key));_.signal.addEventListener(`abort`,ae);let{loaderResults:se,fetcherResults:le}=await Ve(re,j,D,E,d);if(_.signal.aborted)return;if(_.signal.removeEventListener(`abort`,ae),ue.delete(t),oe.delete(t),j.forEach(e=>oe.delete(e.key)),w.fetchers.has(t)){let e=Pn(C.data);w.fetchers.set(t,e)}let pe=fn(se);if(pe)return ze(D,pe.result,!1,{preventScrollReset:m});if(pe=fn(le),pe)return de.add(pe.key),ze(D,pe.result,!1,{preventScrollReset:m});let{loaderData:me,errors:_e}=on(w,te,se,void 0,j,le);$e(ne),w.navigation.state===`loading`&&ne>N?(k(T,`Expected pending action`),O&&O.abort(),Ee(w.navigation.location,{matches:te,loaderData:me,errors:_e,fetchers:new Map(w.fetchers)})):(Te({errors:_e,loaderData:sn(w.loaderData,me,te,_e),fetchers:new Map(w.fetchers)}),ie=!1)}async function Le(t,n,i,s,c,l,u,d,f){let p=w.fetchers.get(t);Ue(t,Mn(f,p?p.data:void 0),{flushSync:u});let m=new AbortController,h=en(e.history,i,m.signal);if(l){let e=await ft(s,new URL(h.url).pathname,h.signal,t);if(e.type===`aborted`)return;if(e.type===`error`){We(t,n,e.error,{flushSync:u});return}else if(e.matches)s=e.matches;else{We(t,n,dn(404,{pathname:i}),{flushSync:u});return}}let g=On(s,i);oe.set(t,m);let _=ce,v=(await Be(h,i,Kt(a,o,h,i,s,g,r,c),c,t))[g.route.id];if(oe.get(t)===m&&oe.delete(t),!h.signal.aborted){if(he.has(t)){Ue(t,Pn(void 0));return}if(bn(v))if(N>_){Ue(t,Pn(void 0));return}else{de.add(t),await ze(h,v,!1,{preventScrollReset:d});return}if(yn(v)){We(t,n,v.error);return}Ue(t,Pn(v.data))}}async function ze(r,i,a,{submission:o,fetcherSubmission:s,preventScrollReset:c,replace:u}={}){a||(E?.resolve(),E=null),i.response.headers.has(`X-Remix-Revalidate`)&&(ie=!0);let d=i.response.headers.get(`Location`);k(d,`Expected a Location header on the redirect Response`),d=$t(d,new URL(r.url),l,e.history);let f=j(w.location,d,{_isRedirect:!0});if(n){let e=!1;if(i.response.headers.has(`X-Remix-Reload-Document`))e=!0;else if(Re(d)){let n=se(d,!0);e=n.origin!==t.location.origin||Fe(n.pathname,l)==null}if(e){u?t.location.replace(d):t.location.assign(d);return}}O=null;let p=u===!0||i.response.headers.has(`X-Remix-Replace`)?`REPLACE`:`PUSH`,{formMethod:m,formAction:h,formEncType:g}=w.navigation;!o&&!s&&m&&h&&g&&(o=kn(w.navigation));let _=o||s;gt.has(i.response.status)&&_&&En(_.formMethod)?await ke(p,f,{submission:{..._,formAction:d},preventScrollReset:c||D,enableViewTransition:a?ee:void 0}):await ke(p,f,{overrideNavigation:An(f,o),fetcherSubmission:s,preventScrollReset:c||D,enableViewTransition:a?ee:void 0})}async function Be(e,t,n,r,i){let a,o={};try{a=await qt(u,e,t,n,i,r,!1)}catch(e){return n.filter(e=>e.shouldLoad).forEach(t=>{o[t.route.id]={type:`error`,error:e}}),o}if(e.signal.aborted)return o;if(!En(e.method))for(let e of n){if(a[e.route.id]?.type===`error`)break;!a.hasOwnProperty(e.route.id)&&!w.loaderData.hasOwnProperty(e.route.id)&&(!w.errors||!w.errors.hasOwnProperty(e.route.id))&&e.shouldCallHandler()&&(a[e.route.id]={type:`error`,result:Error(`No result returned from dataStrategy for route ${e.route.id}`)})}for(let[t,r]of Object.entries(a))if(vn(r)){let i=r.result;o[t]={type:`redirect`,response:Zt(i,e,t,n,l)}}else o[t]=await Xt(r);return o}async function Ve(e,t,n,r,i){let a=Be(n,r,e,i,null),o=Promise.all(t.map(async e=>{if(e.matches&&e.match&&e.request&&e.controller){let t=(await Be(e.request,e.path,e.matches,i,e.key))[e.match.route.id];return{[e.key]:t}}else return Promise.resolve({[e.key]:{type:`error`,error:dn(404,{pathname:e.path})}})}));return{loaderResults:await a,fetcherResults:(await o).reduce((e,t)=>Object.assign(e,t),{})}}function He(){ie=!0,fe.forEach((e,t)=>{oe.has(t)&&M.add(t),Ye(t)})}function Ue(e,t,n={}){w.fetchers.set(e,t),Te({fetchers:new Map(w.fetchers)},{flushSync:(n&&n.flushSync)===!0})}function We(e,t,n,r={}){let i=ln(w.matches,t);qe(e),Te({errors:{[i.route.id]:n},fetchers:new Map(w.fetchers)},{flushSync:(r&&r.flushSync)===!0})}function Ge(e){return pe.set(e,(pe.get(e)||0)+1),he.has(e)&&he.delete(e),w.fetchers.get(e)||vt}function Ke(e,t){Ye(e,t?.reason),Ue(e,Pn(null))}function qe(e){let t=w.fetchers.get(e);oe.has(e)&&!(t&&t.state===`loading`&&ue.has(e))&&Ye(e),fe.delete(e),ue.delete(e),de.delete(e),he.delete(e),M.delete(e),w.fetchers.delete(e)}function Je(e){let t=(pe.get(e)||0)-1;t<=0?(pe.delete(e),he.add(e)):pe.set(e,t),Te({fetchers:new Map(w.fetchers)})}function Ye(e,t){let n=oe.get(e);n&&(n.abort(t),oe.delete(e))}function Ze(e){for(let t of e){let e=Pn(Ge(t).data);w.fetchers.set(t,e)}}function Qe(){let e=[],t=!1;for(let n of de){let r=w.fetchers.get(n);k(r,`Expected fetcher: ${n}`),r.state===`loading`&&(de.delete(n),e.push(n),t=!0)}return Ze(e),t}function $e(e){let t=[];for(let[n,r]of ue)if(r<e){let e=w.fetchers.get(n);k(e,`Expected fetcher: ${n}`),e.state===`loading`&&(Ye(n),ue.delete(n),t.push(n))}return Ze(t),t.length>0}function et(e,t){let n=w.blockers.get(e)||yt;return ye.get(e)!==t&&ye.set(e,t),n}function rt(e){w.blockers.delete(e),ye.delete(e)}function it(e,t){let n=w.blockers.get(e)||yt;k(n.state===`unblocked`&&t.state===`blocked`||n.state===`blocked`&&t.state===`blocked`||n.state===`blocked`&&t.state===`proceeding`||n.state===`blocked`&&t.state===`unblocked`||n.state===`proceeding`&&t.state===`unblocked`,`Invalid blocker state transition: ${n.state} -> ${t.state}`);let r=new Map(w.blockers);r.set(e,t),Te({blockers:r})}function at({currentLocation:e,nextLocation:t,historyAction:n}){if(ye.size===0)return;ye.size>1&&A(!1,`A router only supports one blocker at a time`);let r=Array.from(ye.entries()),[i,a]=r[r.length-1],o=w.blockers.get(i);if(!(o&&o.state===`proceeding`)&&a({currentLocation:e,nextLocation:t,historyAction:n}))return i}function ot(e){let t=dn(404,{pathname:e}),{matches:n,route:r}=un(c||s);return{notFoundMatches:n,route:r,error:t}}function st(e,t,n){if(m=e,g=t,h=n||null,!_&&w.navigation===_t){_=!0;let e=ut(w.location,w.matches);e!=null&&Te({restoreScrollPosition:e})}return()=>{m=null,g=null,h=null}}function ct(e,t){return h&&h(e,t.map(e=>ve(e,w.loaderData)))||e.key}function lt(e,t){if(m&&g){let n=ct(e,t);m[n]=g()}}function ut(e,t){if(m){let n=ct(e,t),r=m[n];if(typeof r==`number`)return r}return null}function dt(t,n,r){if(e.patchRoutesOnNavigation){if(!t)return{active:!0,matches:_e(n,r,l,!0)||[]};if(Object.keys(t[0].params).length>0)return{active:!0,matches:_e(n,r,l,!0)}}return{active:!1,matches:null}}async function ft(t,n,r,i){if(!e.patchRoutesOnNavigation)return{type:`success`,matches:t};let u=t;for(;;){let t=c==null,d=c||s,f=o;try{await e.patchRoutesOnNavigation({signal:r,path:n,matches:u,fetcherKey:i,patch:(e,t)=>{r.aborted||Nt(e,t,d,f,a,!1)}})}catch(e){return{type:`error`,error:e,partialMatches:u}}finally{t&&!r.aborted&&(s=[...s])}if(r.aborted)return{type:`aborted`};let p=ge(d,n,l),m=null;if(p&&(Object.keys(p[0].params).length===0||(m=_e(d,n,l,!0),!(m&&u.length<m.length&&pt(u,m.slice(0,u.length))))))return{type:`success`,matches:p};if(m||=_e(d,n,l,!0),!m||pt(u,m))return{type:`success`,matches:null};u=m}}function pt(e,t){return e.length===t.length&&e.every((e,n)=>e.route.id===t[n].route.id)}function mt(e){o={},c=me(e,a,void 0,o)}function ht(e,t,n=!1){let r=c==null;Nt(e,t,c||s,o,a,n),r&&(s=[...s],Te({}))}return C={get basename(){return l},get future(){return d},get state(){return w},get routes(){return s},get window(){return t},initialize:Se,subscribe:we,enableScrollRestoration:st,navigate:De,fetch:Pe,revalidate:Oe,createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:Ge,resetFetcher:Ke,deleteFetcher:Je,dispose:Ce,getBlocker:et,deleteBlocker:rt,patchRoutes:ht,_internalFetchControllers:oe,_internalSetRoutes:mt,_internalSetStateDoNotUseOrYouWillBreakYourApp(e){Te(e)}},e.unstable_instrumentations&&(C=nt(C,e.unstable_instrumentations.map(e=>e.router).filter(Boolean))),C}function wt(e){return e!=null&&(`formData`in e&&e.formData!=null||`body`in e&&e.body!==void 0)}function Tt(e,t,n,r,i,a){let o,s;if(i){o=[];for(let e of t)if(o.push(e),e.route.id===i){s=e;break}}else o=t,s=t[t.length-1];let c=We(r||`.`,Ue(o),Fe(e.pathname,n)||e.pathname,a===`path`);if(r??(c.search=e.search,c.hash=e.hash),(r==null||r===``||r===`.`)&&s){let e=Dn(c.search);if(s.route.index&&!e)c.search=c.search?c.search.replace(/^\?/,`?index&`):`?index`;else if(!s.route.index&&e){let e=new URLSearchParams(c.search),t=e.getAll(`index`);e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();c.search=n?`?${n}`:``}}return n!==`/`&&(c.pathname=Ie({basename:n,pathname:c.pathname})),M(c)}function Et(e,t,n){if(!n||!wt(n))return{path:t};if(n.formMethod&&!Tn(n.formMethod))return{path:t,error:dn(405,{method:n.formMethod})};let r=()=>({path:t,error:dn(400,{type:`invalid-body`})}),i=(n.formMethod||`get`).toUpperCase(),a=pn(t);if(n.body!==void 0){if(n.formEncType===`text/plain`){if(!En(i))return r();let e=typeof n.body==`string`?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((e,[t,n])=>`${e}${t}=${n}
`,``):String(n.body);return{path:t,submission:{formMethod:i,formAction:a,formEncType:n.formEncType,formData:void 0,json:void 0,text:e}}}else if(n.formEncType===`application/json`){if(!En(i))return r();try{let e=typeof n.body==`string`?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:i,formAction:a,formEncType:n.formEncType,formData:void 0,json:e,text:void 0}}}catch{return r()}}}k(typeof FormData==`function`,`FormData is not available in this environment`);let o,s;if(n.formData)o=nn(n.formData),s=n.formData;else if(n.body instanceof FormData)o=nn(n.body),s=n.body;else if(n.body instanceof URLSearchParams)o=n.body,s=rn(o);else if(n.body==null)o=new URLSearchParams,s=new FormData;else try{o=new URLSearchParams(n.body),s=rn(o)}catch{return r()}let c={formMethod:i,formAction:a,formEncType:n&&n.formEncType||`application/x-www-form-urlencoded`,formData:s,json:void 0,text:void 0};if(En(c.formMethod))return{path:t,submission:c};let l=ae(t);return e&&l.search&&Dn(l.search)&&o.append(`index`,``),l.search=`?${o}`,{path:M(l),submission:c}}function Dt(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b){let x=y?yn(y[1])?y[1].error:y[1].data:void 0,S=i.createURL(a.location),C=i.createURL(c),w;if(u&&a.errors){let e=Object.keys(a.errors)[0];w=o.findIndex(t=>t.route.id===e)}else if(y&&yn(y[1])){let e=y[0];w=o.findIndex(t=>t.route.id===e)-1}let T=y?y[1].statusCode:void 0,E=T&&T>=400,D={currentUrl:S,currentParams:a.matches[0]?.params||{},nextUrl:C,nextParams:o[0].params,...s,actionResult:x,actionStatus:T},O=Ze(o),ee=o.map((i,o)=>{let{route:s}=i,f=null;if(w!=null&&o>w)f=!1;else if(s.lazy)f=!0;else if(!Ot(s))f=!1;else if(u){let{shouldLoad:e}=kt(s,a.loaderData,a.errors);f=e}else At(a.loaderData,a.matches[o],i)&&(f=!0);if(f!==null)return Gt(n,r,e,c,O,i,l,t,f);let p=!1;typeof b==`boolean`?p=b:E?p=!1:d||S.pathname+S.search===C.pathname+C.search?p=!0:S.search===C.search?jt(a.matches[o],i)&&(p=!0):p=!0;let m={...D,defaultShouldRevalidate:p};return Gt(n,r,e,c,O,i,l,t,Mt(i,m),m,b)}),te=[];return m.forEach((e,s)=>{if(u||!o.some(t=>t.route.id===e.routeId)||p.has(s))return;let c=a.fetchers.get(s),m=c&&c.state!==`idle`&&c.data===void 0,y=ge(g,e.path,_);if(!y){if(v&&m)return;te.push({key:s,routeId:e.routeId,path:e.path,matches:null,match:null,request:null,controller:null});return}if(h.has(s))return;let x=On(y,e.path),S=new AbortController,C=en(i,e.path,S.signal),w=null;if(f.has(s))f.delete(s),w=Kt(n,r,C,e.path,y,x,l,t);else if(m)d&&(w=Kt(n,r,C,e.path,y,x,l,t));else{let i;i=typeof b==`boolean`?b:E?!1:d;let a={...D,defaultShouldRevalidate:i};Mt(x,a)&&(w=Kt(n,r,C,e.path,y,x,l,t,a))}w&&te.push({key:s,routeId:e.routeId,path:e.path,matches:w,match:x,request:C,controller:S})}),{dsMatches:ee,revalidatingFetchers:te}}function Ot(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function kt(e,t,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Ot(e))return{shouldLoad:!1,renderFallback:!1};let r=t!=null&&e.id in t,i=n!=null&&n[e.id]!==void 0;if(!r&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader==`function`&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let a=!r&&!i;return{shouldLoad:a,renderFallback:a}}function At(e,t,n){let r=!t||n.route.id!==t.route.id,i=!e.hasOwnProperty(n.route.id);return r||i}function jt(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith(`*`)&&e.params[`*`]!==t.params[`*`]}function Mt(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n==`boolean`)return n}return t.defaultShouldRevalidate}function Nt(e,t,n,r,i,a){let o;if(e){let t=r[e];k(t,`No route found to patch children into: routeId = ${e}`),t.children||=[],o=t.children}else o=n;let s=[],c=[];if(t.forEach(e=>{let t=o.find(t=>Pt(e,t));t?c.push({existingRoute:t,newRoute:e}):s.push(e)}),s.length>0){let t=me(s,i,[e||`_`,`patch`,String(o?.length||`0`)],r);o.push(...t)}if(a&&c.length>0)for(let e=0;e<c.length;e++){let{existingRoute:t,newRoute:n}=c[e],r=t,[a]=me([n],i,[],{},!0);Object.assign(r,{element:a.element?a.element:r.element,errorElement:a.errorElement?a.errorElement:r.errorElement,hydrateFallbackElement:a.hydrateFallbackElement?a.hydrateFallbackElement:r.hydrateFallbackElement})}}function Pt(e,t){return`id`in e&&`id`in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children?.every((e,n)=>t.children?.some(t=>Pt(e,t)))??!1:!1}var Ft=new WeakMap,It=({key:e,route:t,manifest:n,mapRouteProperties:r})=>{let i=n[t.id];if(k(i,`No route found in manifest`),!i.lazy||typeof i.lazy!=`object`)return;let a=i.lazy[e];if(!a)return;let o=Ft.get(i);o||(o={},Ft.set(i,o));let s=o[e];if(s)return s;let c=(async()=>{let t=ue(e),n=i[e]!==void 0&&e!==`hasErrorBoundary`;if(t)A(!t,`Route property `+e+` is not a supported lazy route property. This property will be ignored.`),o[e]=Promise.resolve();else if(n)A(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let t=await a();t!=null&&(Object.assign(i,{[e]:t}),Object.assign(i,r(i)))}typeof i.lazy==`object`&&(i.lazy[e]=void 0,Object.values(i.lazy).every(e=>e===void 0)&&(i.lazy=void 0))})();return o[e]=c,c},Lt=new WeakMap;function Rt(e,t,n,r,i){let a=n[e.id];if(k(a,`No route found in manifest`),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy==`function`){let t=Lt.get(a);if(t)return{lazyRoutePromise:t,lazyHandlerPromise:t};let n=(async()=>{k(typeof e.lazy==`function`,`No lazy route function found`);let t=await e.lazy(),n={};for(let e in t){let r=t[e];if(r===void 0)continue;let i=fe(e),o=a[e]!==void 0&&e!==`hasErrorBoundary`;i?A(!i,`Route property `+e+` is not a supported property to be returned from a lazy route function. This property will be ignored.`):o?A(!o,`Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`):n[e]=r}Object.assign(a,n),Object.assign(a,{...r(a),lazy:void 0})})();return Lt.set(a,n),n.catch(()=>{}),{lazyRoutePromise:n,lazyHandlerPromise:n}}let o=Object.keys(e.lazy),s=[],c;for(let a of o){if(i&&i.includes(a))continue;let o=It({key:a,route:e,manifest:n,mapRouteProperties:r});o&&(s.push(o),a===t&&(c=o))}let l=s.length>0?Promise.all(s).then(()=>{}):void 0;return l?.catch(()=>{}),c?.catch(()=>{}),{lazyRoutePromise:l,lazyHandlerPromise:c}}async function zt(e){let t=e.matches.filter(e=>e.shouldLoad),n={};return(await Promise.all(t.map(e=>e.resolve()))).forEach((e,r)=>{n[t[r].route.id]=e}),n}async function Bt(e){return e.matches.some(e=>e.route.middleware)?Vt(e,()=>zt(e)):zt(e)}function Vt(e,t){return Ht(e,t,e=>{if(wn(e))throw e;return e},gn,n);function n(t,n,r){if(r)return Promise.resolve(Object.assign(r.value,{[n]:{type:`error`,result:t}}));{let{matches:r}=e,i=ln(r,r[Math.min(Math.max(r.findIndex(e=>e.route.id===n),0),Math.max(r.findIndex(e=>e.shouldCallHandler()),0))].route.id).route.id;return Promise.resolve({[i]:{type:`error`,result:t}})}}}async function Ht(e,t,n,r,i){let{matches:a,...o}=e;return await Ut(o,a.flatMap(e=>e.route.middleware?e.route.middleware.map(t=>[e.route.id,t]):[]),t,n,r,i)}async function Ut(e,t,n,r,i,a,o=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason??Error(`Request aborted: ${s.method} ${s.url}`);let c=t[o];if(!c)return await n();let[l,u]=c,d,f=async()=>{if(d)throw Error("You may only call `next()` once per middleware");try{return d={value:await Ut(e,t,n,r,i,a,o+1)},d.value}catch(e){return d={value:await a(e,l,d)},d.value}};try{let t=await u(e,f),n=t==null?void 0:r(t);return i(n)?n:d?n??d.value:(d={value:await f()},d.value)}catch(e){return await a(e,l,d)}}function Wt(e,t,n,r,i){let a=It({key:`middleware`,route:r.route,manifest:t,mapRouteProperties:e}),o=Rt(r.route,En(n.method)?`action`:`loader`,t,e,i);return{middleware:a,route:o.lazyRoutePromise,handler:o.lazyHandlerPromise}}function Gt(e,t,n,r,i,a,o,s,c,l=null,u){let d=!1,f=Wt(e,t,n,a,o);return{...a,_lazyPromises:f,shouldLoad:c,shouldRevalidateArgs:l,shouldCallHandler(e){return d=!0,l?typeof u==`boolean`?Mt(a,{...l,defaultShouldRevalidate:u}):typeof e==`boolean`?Mt(a,{...l,defaultShouldRevalidate:e}):Mt(a,l):c},resolve(e){let{lazy:t,loader:o,middleware:l}=a.route,u=d||c||e&&!En(n.method)&&(t||o),p=l&&l.length>0&&!o&&!t;return u&&(En(n.method)||!p)?Jt({request:n,path:r,unstable_pattern:i,match:a,lazyHandlerPromise:f?.handler,lazyRoutePromise:f?.route,handlerOverride:e,scopedContext:s}):Promise.resolve({type:`data`,result:void 0})}}}function Kt(e,t,n,r,i,a,o,s,c=null){return i.map(l=>l.route.id===a.route.id?Gt(e,t,n,r,Ze(i),l,o,s,!0,c):{...l,shouldLoad:!1,shouldRevalidateArgs:c,shouldCallHandler:()=>!1,_lazyPromises:Wt(e,t,n,l,o),resolve:()=>Promise.resolve({type:`data`,result:void 0})})}async function qt(e,t,n,r,i,a,o){r.some(e=>e._lazyPromises?.middleware)&&await Promise.all(r.map(e=>e._lazyPromises?.middleware));let s={request:t,unstable_url:tn(t,n),unstable_pattern:Ze(r),params:r[0].params,context:a,matches:r},c=o?()=>{throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`")}:e=>{let t=s;return Vt(t,()=>e({...t,fetcherKey:i,runClientMiddleware:()=>{throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))},l=await e({...s,fetcherKey:i,runClientMiddleware:c});try{await Promise.all(r.flatMap(e=>[e._lazyPromises?.handler,e._lazyPromises?.route]))}catch{}return l}async function Jt({request:e,path:t,unstable_pattern:n,match:r,lazyHandlerPromise:i,lazyRoutePromise:a,handlerOverride:o,scopedContext:s}){let c,l,u=En(e.method),d=u?`action`:`loader`,f=i=>{let a,c=new Promise((e,t)=>a=t);l=()=>a(),e.signal.addEventListener(`abort`,l);let u=a=>typeof i==`function`?i({request:e,unstable_url:tn(e,t),unstable_pattern:n,params:r.params,context:s},...a===void 0?[]:[a]):Promise.reject(Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)),f=(async()=>{try{return{type:`data`,result:await(o?o(e=>u(e)):u())}}catch(e){return{type:`error`,result:e}}})();return Promise.race([f,c])};try{let t=u?r.route.action:r.route.loader;if(i||a)if(t){let e,[n]=await Promise.all([f(t).catch(t=>{e=t}),i,a]);if(e!==void 0)throw e;c=n}else{await i;let t=u?r.route.action:r.route.loader;if(t)[c]=await Promise.all([f(t),a]);else if(d===`action`){let t=new URL(e.url),n=t.pathname+t.search;throw dn(405,{method:e.method,pathname:n,routeId:r.route.id})}else return{type:`data`,result:void 0}}else if(t)c=await f(t);else{let t=new URL(e.url);throw dn(404,{pathname:t.pathname+t.search})}}catch(e){return{type:`error`,result:e}}finally{l&&e.signal.removeEventListener(`abort`,l)}return c}async function Yt(e){let t=e.headers.get(`Content-Type`);return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function Xt(e){let{result:t,type:n}=e;if(Sn(t)){let e;try{e=await Yt(t)}catch(e){return{type:`error`,error:e}}return n===`error`?{type:`error`,error:new Ye(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:`data`,data:e,statusCode:t.status,headers:t.headers}}return n===`error`?xn(t)?t.data instanceof Error?{type:`error`,error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`error`,error:hn(t),statusCode:Xe(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`error`,error:t,statusCode:Xe(t)?t.status:void 0}:xn(t)?{type:`data`,data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:`data`,data:t}}function Zt(e,t,n,r,i){let a=e.headers.get(`Location`);if(k(a,`Redirects returned/thrown from loaders/actions must have a Location header`),!Re(a)){let o=r.slice(0,r.findIndex(e=>e.route.id===n)+1);a=Tt(new URL(t.url),o,i,a),e.headers.set(`Location`,a)}return e}var Qt=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function $t(e,t,n,r){if(Re(e)){let r=e,i=r.startsWith(`//`)?new URL(t.protocol+r):new URL(r);if(Qt.includes(i.protocol))throw Error(`Invalid redirect location`);let a=Fe(i.pathname,n)!=null;if(i.origin===t.origin&&a)return i.pathname+i.search+i.hash}try{let t=r.createURL(e);if(Qt.includes(t.protocol))throw Error(`Invalid redirect location`)}catch{}return e}function en(e,t,n,r){let i=e.createURL(pn(t)).toString(),a={signal:n};if(r&&En(r.formMethod)){let{formMethod:e,formEncType:t}=r;a.method=e.toUpperCase(),t===`application/json`?(a.headers=new Headers({"Content-Type":t}),a.body=JSON.stringify(r.json)):t===`text/plain`?a.body=r.text:t===`application/x-www-form-urlencoded`&&r.formData?a.body=nn(r.formData):a.body=r.formData}return new Request(i,a)}function tn(e,t){let n=new URL(e.url),r=typeof t==`string`?ae(t):t;if(n.pathname=r.pathname||`/`,r.search){let e=new URLSearchParams(r.search),t=e.getAll(`index`);e.delete(`index`);for(let n of t.filter(Boolean))e.append(`index`,n);n.search=e.size?`?${e.toString()}`:``}else n.search=``;return n.hash=r.hash||``,n}function nn(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r==`string`?r:r.name);return t}function rn(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function an(e,t,n,r=!1,i=!1){let a={},o=null,s,c=!1,l={},u=n&&yn(n[1])?n[1].error:void 0;return e.forEach(n=>{if(!(n.route.id in t))return;let d=n.route.id,f=t[d];if(k(!bn(f),`Cannot handle redirect results in processLoaderData`),yn(f)){let t=f.error;if(u!==void 0&&(t=u,u=void 0),o||={},i)o[d]=t;else{let n=ln(e,d);o[n.route.id]??(o[n.route.id]=t)}r||(a[d]=St),c||(c=!0,s=Xe(f.error)?f.error.status:500),f.headers&&(l[d]=f.headers)}else a[d]=f.data,f.statusCode&&f.statusCode!==200&&!c&&(s=f.statusCode),f.headers&&(l[d]=f.headers)}),u!==void 0&&n&&(o={[n[0]]:u},n[2]&&(a[n[2]]=void 0)),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:l}}function on(e,t,n,r,i,a){let{loaderData:o,errors:s}=an(t,n,r);return i.filter(e=>!e.matches||e.matches.some(e=>e.shouldLoad)).forEach(t=>{let{key:n,match:r,controller:i}=t;if(i&&i.signal.aborted)return;let o=a[n];if(k(o,`Did not find corresponding fetcher result`),yn(o)){let t=ln(e.matches,r?.route.id);s&&s[t.route.id]||(s={...s,[t.route.id]:o.error}),e.fetchers.delete(n)}else if(bn(o))k(!1,`Unhandled fetcher revalidation redirect`);else{let t=Pn(o.data);e.fetchers.set(n,t)}}),{loaderData:o,errors:s}}function sn(e,t,n,r){let i=Object.entries(t).filter(([,e])=>e!==St).reduce((e,[t,n])=>(e[t]=n,e),{});for(let a of n){let n=a.route.id;if(!t.hasOwnProperty(n)&&e.hasOwnProperty(n)&&a.route.loader&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function cn(e){return e?yn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ln(e,t){return(t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e]).reverse().find(e=>e.route.hasErrorBoundary===!0)||e[0]}function un(e){let t=e.length===1?e[0]:e.find(e=>e.index||!e.path||e.path===`/`)||{id:`__shim-error-route__`};return{matches:[{params:{},pathname:``,pathnameBase:``,route:t}],route:t}}function dn(e,{pathname:t,routeId:n,method:r,type:i,message:a}={}){let o=`Unknown Server Error`,s=`Unknown @remix-run/router error`;return e===400?(o=`Bad Request`,r&&t&&n?s=`You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i===`invalid-body`&&(s=`Unable to encode submission body`)):e===403?(o=`Forbidden`,s=`Route "${n}" does not match URL "${t}"`):e===404?(o=`Not Found`,s=`No route matches URL "${t}"`):e===405&&(o=`Method Not Allowed`,r&&t&&n?s=`You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:r&&(s=`Invalid request method "${r.toUpperCase()}"`)),new Ye(e||500,o,Error(s),!0)}function fn(e){let t=Object.entries(e);for(let e=t.length-1;e>=0;e--){let[n,r]=t[e];if(bn(r))return{key:n,result:r}}}function pn(e){return M({...typeof e==`string`?ae(e):e,hash:``})}function mn(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===``?t.hash!==``:e.hash===t.hash?!0:t.hash!==``}function hn(e){return new Ye(e.init?.status??500,e.init?.statusText??`Internal Server Error`,e.data)}function gn(e){return typeof e==`object`&&!!e&&Object.entries(e).every(([e,t])=>typeof e==`string`&&_n(t))}function _n(e){return typeof e==`object`&&!!e&&`type`in e&&`result`in e&&(e.type===`data`||e.type===`error`)}function vn(e){return Sn(e.result)&&ht.has(e.result.status)}function yn(e){return e.type===`error`}function bn(e){return(e&&e.type)===`redirect`}function xn(e){return typeof e==`object`&&!!e&&`type`in e&&`data`in e&&`init`in e&&e.type===`DataWithResponseInit`}function Sn(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.headers==`object`&&e.body!==void 0}function Cn(e){return ht.has(e)}function wn(e){return Sn(e)&&Cn(e.status)&&e.headers.has(`Location`)}function Tn(e){return mt.has(e.toUpperCase())}function En(e){return ft.has(e.toUpperCase())}function Dn(e){return new URLSearchParams(e).getAll(`index`).some(e=>e===``)}function On(e,t){let n=typeof t==`string`?ae(t).search:t.search;if(e[e.length-1].route.index&&Dn(n||``))return e[e.length-1];let r=He(e);return r[r.length-1]}function kn(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function An(e,t){return t?{state:`loading`,location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:`loading`,location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function jn(e,t){return{state:`submitting`,location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Mn(e,t){return e?{state:`loading`,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:`loading`,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Nn(e,t){return{state:`submitting`,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Pn(e){return{state:`idle`,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Fn(e,t){try{let n=e.sessionStorage.getItem(xt);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch{}}function In(e,t){if(t.size>0){let n={};for(let[e,r]of t)n[e]=[...r];try{e.sessionStorage.setItem(xt,JSON.stringify(n))}catch(e){A(!1,`Failed to save applied view transitions in sessionStorage (${e}).`)}}}function Ln(){let e,t,n=new Promise((r,i)=>{e=async e=>{r(e);try{await n}catch{}},t=async e=>{i(e);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Rn=w.createContext(null);Rn.displayName=`DataRouter`;var zn=w.createContext(null);zn.displayName=`DataRouterState`;var Bn=w.createContext(!1);function Vn(){return w.useContext(Bn)}var Hn=w.createContext({isTransitioning:!1});Hn.displayName=`ViewTransition`;var Un=w.createContext(new Map);Un.displayName=`Fetchers`;var Wn=w.createContext(null);Wn.displayName=`Await`;var Gn=w.createContext(null);Gn.displayName=`Navigation`;var Kn=w.createContext(null);Kn.displayName=`Location`;var qn=w.createContext({outlet:null,matches:[],isDataRoute:!1});qn.displayName=`Route`;var Jn=w.createContext(null);Jn.displayName=`RouteError`;var Yn=`REACT_ROUTER_ERROR`,Xn=`REDIRECT`,Zn=`ROUTE_ERROR_RESPONSE`;function Qn(e){if(e.startsWith(`${Yn}:${Xn}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function $n(e){if(e.startsWith(`${Yn}:${Zn}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ye(t.status,t.statusText,t.data)}catch{}}function er(e,{relative:t}={}){k(tr(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=w.useContext(Gn),{hash:i,pathname:a,search:o}=ur(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ge([n,a])),r.createHref({pathname:s,search:o,hash:i})}function tr(){return w.useContext(Kn)!=null}function nr(){return k(tr(),`useLocation() may be used only in the context of a <Router> component.`),w.useContext(Kn).location}var rr=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ir(e){w.useContext(Gn).static||w.useLayoutEffect(e)}function ar(){let{isDataRoute:e}=w.useContext(qn);return e?Or():or()}function or(){k(tr(),`useNavigate() may be used only in the context of a <Router> component.`);let e=w.useContext(Rn),{basename:t,navigator:n}=w.useContext(Gn),{matches:r}=w.useContext(qn),{pathname:i}=nr(),a=JSON.stringify(Ue(r)),o=w.useRef(!1);return ir(()=>{o.current=!0}),w.useCallback((r,s={})=>{if(A(o.current,rr),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=We(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ge([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var sr=w.createContext(null);function cr(){return w.useContext(sr)}function lr(e){let t=w.useContext(qn).outlet;return w.useMemo(()=>t&&w.createElement(sr.Provider,{value:e},t),[t,e])}function ur(e,{relative:t}={}){let{matches:n}=w.useContext(qn),{pathname:r}=nr(),i=JSON.stringify(Ue(n));return w.useMemo(()=>We(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function dr(e,t,n){k(tr(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=w.useContext(Gn),{matches:i}=w.useContext(qn),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ar(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=nr(),d;if(t){let e=typeof t==`string`?ae(t):t;k(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ge(e,{pathname:p});A(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),A(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=vr(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ge([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ge([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?w.createElement(Kn.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function fr(){let e=Dr(),t=Xe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=w.createElement(w.Fragment,null,w.createElement(`p`,null,`💿 Hey developer 👋`),w.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,w.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,w.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Unexpected Application Error!`),w.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?w.createElement(`pre`,{style:i},n):null,o)}var pr=w.createElement(fr,null),mr=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=$n(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:w.createElement(qn.Provider,{value:this.props.routeContext},w.createElement(Jn.Provider,{value:e,children:this.props.component}));return this.context?w.createElement(gr,{error:e},t):t}};mr.contextType=Bn;var hr=new WeakMap;function gr({children:e,error:t}){let{basename:n}=w.useContext(Gn);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Qn(t.digest);if(e){let r=hr.get(t);if(r)throw r;let i=$e(e.location,n);if(Qe&&!hr.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw hr.set(t,n),n}return w.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function _r({routeContext:e,match:t,children:n}){let r=w.useContext(Rn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(qn.Provider,{value:e},n)}function vr(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);k(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||pr,o&&(s<0&&c===0?(Ar(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?w.createElement(n.route.Component,null):n.route.element?n.route.element:e,w.createElement(_r,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?w.createElement(mr,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function yr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function br(e){let t=w.useContext(Rn);return k(t,yr(e)),t}function xr(e){let t=w.useContext(zn);return k(t,yr(e)),t}function Sr(e){let t=w.useContext(qn);return k(t,yr(e)),t}function Cr(e){let t=Sr(e),n=t.matches[t.matches.length-1];return k(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function wr(){return Cr(`useRouteId`)}function Tr(){return xr(`useNavigation`).navigation}function Er(){let{matches:e,loaderData:t}=xr(`useMatches`);return w.useMemo(()=>e.map(e=>ve(e,t)),[e,t])}function Dr(){let e=w.useContext(Jn),t=xr(`useRouteError`),n=Cr(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Or(){let{router:e}=br(`useNavigate`),t=Cr(`useNavigate`),n=w.useRef(!1);return ir(()=>{n.current=!0}),w.useCallback(async(r,i={})=>{A(n.current,rr),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var kr={};function Ar(e,t,n){!t&&!kr[e]&&(kr[e]=!0,A(!1,n))}var jr={};function Mr(e,t){!e&&!jr[t]&&(jr[t]=!0,console.warn(t))}var Nr=w.useOptimistic,Pr=()=>void 0;function Fr(e){return Nr?Nr(e):[e,Pr]}function Ir(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&A(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:w.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&A(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&A(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var Lr=[`HydrateFallback`,`hydrateFallbackElement`],Rr=class{constructor(){this.status=`pending`,this.promise=new Promise((e,t)=>{this.resolve=t=>{this.status===`pending`&&(this.status=`resolved`,e(t))},this.reject=e=>{this.status===`pending`&&(this.status=`rejected`,t(e))}})}};function zr({router:e,flushSync:t,onError:n,unstable_useTransitions:r}){r=Vn()||r;let[i,a]=w.useState(e.state),[o,s]=Fr(i),[c,l]=w.useState(),[u,d]=w.useState({isTransitioning:!1}),[f,p]=w.useState(),[m,h]=w.useState(),[g,_]=w.useState(),v=w.useRef(new Map),y=w.useCallback((i,{deletedFetchers:o,newErrors:c,flushSync:u,viewTransitionOpts:g})=>{c&&n&&Object.values(c).forEach(e=>n(e,{location:i.location,params:i.matches[0]?.params??{},unstable_pattern:Ze(i.matches)})),i.fetchers.forEach((e,t)=>{e.data!==void 0&&v.current.set(t,e.data)}),o.forEach(e=>v.current.delete(e)),Mr(u===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let y=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition==`function`;if(Mr(g==null||y,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!g||!y){t&&u?t(()=>a(i)):r===!1?a(i):w.startTransition(()=>{r===!0&&s(e=>Br(e,i)),a(i)});return}if(t&&u){t(()=>{m&&(f?.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:g.currentLocation,nextLocation:g.nextLocation})});let n=e.window.document.startViewTransition(()=>{t(()=>a(i))});n.finished.finally(()=>{t(()=>{p(void 0),h(void 0),l(void 0),d({isTransitioning:!1})})}),t(()=>h(n));return}m?(f?.resolve(),m.skipTransition(),_({state:i,currentLocation:g.currentLocation,nextLocation:g.nextLocation})):(l(i),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}))},[e.window,t,m,f,r,s,n]);w.useLayoutEffect(()=>e.subscribe(y),[e,y]),w.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new Rr)},[u]),w.useEffect(()=>{if(f&&c&&e.window){let t=c,n=f.promise,i=e.window.document.startViewTransition(async()=>{r===!1?a(t):w.startTransition(()=>{r===!0&&s(e=>Br(e,t)),a(t)}),await n});i.finished.finally(()=>{p(void 0),h(void 0),l(void 0),d({isTransitioning:!1})}),h(i)}},[c,f,e.window,r,s]),w.useEffect(()=>{f&&c&&o.location.key===c.location.key&&f.resolve()},[f,m,o.location,c]),w.useEffect(()=>{!u.isTransitioning&&g&&(l(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),_(void 0))},[u.isTransitioning,g]);let b=w.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:t=>e.navigate(t),push:(t,n,r)=>e.navigate(t,{state:n,preventScrollReset:r?.preventScrollReset}),replace:(t,n,r)=>e.navigate(t,{replace:!0,state:n,preventScrollReset:r?.preventScrollReset})}),[e]),x=e.basename||`/`,S=w.useMemo(()=>({router:e,navigator:b,static:!1,basename:x,onError:n}),[e,b,x,n]);return w.createElement(w.Fragment,null,w.createElement(Rn.Provider,{value:S},w.createElement(zn.Provider,{value:o},w.createElement(Un.Provider,{value:v.current},w.createElement(Hn.Provider,{value:u},w.createElement(Wr,{basename:x,location:o.location,navigationType:o.historyAction,navigator:b,unstable_useTransitions:r},w.createElement(Vr,{routes:e.routes,future:e.future,state:o,isStatic:!1,onError:n})))))),null)}function Br(e,t){return{...e,navigation:t.navigation.state===`idle`?e.navigation:t.navigation,revalidation:t.revalidation===`idle`?e.revalidation:t.revalidation,actionData:t.navigation.state===`submitting`?e.actionData:t.actionData,fetchers:t.fetchers}}var Vr=w.memo(Hr);function Hr({routes:e,future:t,state:n,isStatic:r,onError:i}){return dr(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Ur(e){return lr(e.context)}function Wr({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){k(!tr(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=w.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=w.useMemo(()=>{let e=Fe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return A(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(Gn.Provider,{value:c},w.createElement(Kn.Provider,{children:t,value:h}))}w.Component;var Gr=`get`,Kr=`application/x-www-form-urlencoded`;function qr(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jr(e){return qr(e)&&e.tagName.toLowerCase()===`button`}function Yr(e){return qr(e)&&e.tagName.toLowerCase()===`form`}function Xr(e){return qr(e)&&e.tagName.toLowerCase()===`input`}function Zr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qr(e,t){return e.button===0&&(!t||t===`_self`)&&!Zr(e)}var $r=null;function ei(){if($r===null)try{new FormData(document.createElement(`form`),0),$r=!1}catch{$r=!0}return $r}var ti=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function ni(e){return e!=null&&!ti.has(e)?(A(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kr}"`),null):e}function ri(e,t){let n,r,i,a,o;if(Yr(e)){let o=e.getAttribute(`action`);r=o?Fe(o,t):null,n=e.getAttribute(`method`)||Gr,i=ni(e.getAttribute(`enctype`))||Kr,a=new FormData(e)}else if(Jr(e)||Xr(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Fe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gr,i=ni(e.getAttribute(`formenctype`))||ni(o.getAttribute(`enctype`))||Kr,a=new FormData(o,e),!ei()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qr(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gr,r=null,i=Kr,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ii={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},ai=/[&><\u2028\u2029]/g;function oi(e){return e.replace(ai,e=>ii[e])}function si(e,t){if(e===!1||e==null)throw Error(t)}function ci(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Fe(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function li(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ui(e){return e!=null&&typeof e.page==`string`}function di(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fi(e,t,n){return _i((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await li(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(di).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pi(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mi(e,t,{includeHydrateFallback:n}={}){return hi(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hi(e){return[...new Set(e)]}function gi(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _i(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ui(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gi(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vi(){let e=w.useContext(Rn);return si(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yi(){let e=w.useContext(zn);return si(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bi=w.createContext(void 0);bi.displayName=`FrameworkContext`;function xi(){let e=w.useContext(bi);return si(e,`You must render this element inside a <HydratedRouter> element`),e}function Si(e,t){let n=w.useContext(bi),[r,i]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),w.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Ci(s,p),onBlur:Ci(c,m),onMouseEnter:Ci(l,p),onMouseLeave:Ci(u,m),onTouchStart:Ci(d,p)}]:[a,f,{}]:[!1,f,{}]}function Ci(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wi({page:e,...t}){let n=Vn(),{router:r}=vi(),i=w.useMemo(()=>ge(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?w.createElement(Ei,{page:e,matches:i,...t}):w.createElement(Di,{page:e,matches:i,...t}):null}function Ti(e){let{manifest:t,routeModules:n}=xi(),[r,i]=w.useState([]);return w.useEffect(()=>{let r=!1;return fi(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Ei({page:e,matches:t,...n}){let r=nr(),{future:i}=xi(),{basename:a}=vi(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ci(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Di({page:e,matches:t,...n}){let r=nr(),{future:i,manifest:a,routeModules:o}=xi(),{basename:s}=vi(),{loaderData:c,matches:l}=yi(),u=w.useMemo(()=>pi(e,t,l,a,r,`data`),[e,t,l,a,r]),d=w.useMemo(()=>pi(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ci(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=w.useMemo(()=>mi(d,a),[d,a]),m=Ti(d);return w.createElement(w.Fragment,null,f.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>w.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>w.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Oi(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}w.Component;var ki=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{ki&&(window.__reactRouterVersion=`7.14.0`)}catch{}function Ai(e,t){return Ct({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:ne({window:t?.window}),hydrationData:t?.hydrationData||ji(),routes:e,mapRouteProperties:Ir,hydrationRouteProperties:Lr,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window,unstable_instrumentations:t?.unstable_instrumentations}).initialize()}function ji(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Mi(e.errors)}),e}function Mi(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&r.__type===`RouteErrorResponse`)n[e]=new Ye(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type===`Error`){if(r.__subType){let t=window[r.__subType];if(typeof t==`function`)try{let i=new t(r.message);i.stack=``,n[e]=i}catch{}}if(n[e]==null){let t=Error(r.message);t.stack=``,n[e]=t}}else n[e]=r;return n}function Ni({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=w.useState({action:n.action,location:n.location}),o=w.useCallback(e=>{r===!1?a(e):w.startTransition(()=>a(e))},[r]);return w.useLayoutEffect(()=>n.listen(o),[n,o]),w.createElement(Wr,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Ni.displayName=`unstable_HistoryRouter`;var Pi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fi=w.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=w.useContext(Gn),v=typeof l==`string`&&Pi.test(l),y=$e(l,h);l=y.to;let b=er(l,{relative:r}),x=nr(),S=null;if(o){let e=We(o,[],x.unstable_mask?x.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ge([h,e.pathname])),S=g.createHref(e)}let[C,T,E]=Si(n,p),D=Bi(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let ee=!(y.isExternal||i),te=w.createElement(`a`,{...p,...E,href:(ee?S:void 0)||y.absoluteURL||b,onClick:ee?O:e,ref:Oi(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?w.createElement(w.Fragment,null,te,w.createElement(wi,{page:b})):te});Fi.displayName=`Link`;var Ii=w.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ur(a,{relative:c.relative}),d=nr(),f=w.useContext(zn),{navigator:p,basename:m}=w.useContext(Gn),h=f!=null&&Xi(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Fe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,T;T=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(S):i;return w.createElement(Fi,{...c,"aria-current":C,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ii.displayName=`NavLink`;var Li=w.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gr,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=w.useContext(Gn),g=Ui(),_=Wi(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Pi.test(s);return w.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?w.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Li.displayName=`Form`;function Ri({getKey:e,storageKey:t,...n}){let r=w.useContext(bi),{basename:i}=w.useContext(Gn),a=nr(),o=Er();Ji({getKey:e,storageKey:t});let s=w.useMemo(()=>{if(!r||!e)return null;let t=qi(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return w.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${oi(JSON.stringify(t||Gi))}, ${oi(JSON.stringify(s))})`}})}Ri.displayName=`ScrollRestoration`;function P(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F(e){let t=w.useContext(Rn);return k(t,P(e)),t}function zi(e){let t=w.useContext(zn);return k(t,P(e)),t}function Bi(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ar(),d=nr(),f=ur(e,{relative:o});return w.useCallback(p=>{if(Qr(p,t)){p.preventDefault();let t=n===void 0?M(d)===M(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?w.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Vi=0,Hi=()=>`__${String(++Vi)}__`;function Ui(){let{router:e}=F(`useSubmit`),{basename:t}=w.useContext(Gn),n=wr(),r=e.fetch,i=e.navigate;return w.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ri(e,t);a.navigate===!1?await r(a.fetcherKey||Hi(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Wi(e,{relative:t}={}){let{basename:n}=w.useContext(Gn),r=w.useContext(qn);k(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ur(e||`.`,{relative:t})},o=nr();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ge([n,a.pathname])),M(a)}var Gi=`react-router-scroll-positions`,Ki={};function qi(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Fe(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Ji({getKey:e,storageKey:t}={}){let{router:n}=F(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=zi(`useScrollRestoration`),{basename:a}=w.useContext(Gn),o=nr(),s=Er(),c=Tr();w.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Yi(w.useCallback(()=>{if(c.state===`idle`){let t=qi(o,s,a,e);Ki[t]=window.scrollY}try{sessionStorage.setItem(t||Gi,JSON.stringify(Ki))}catch(e){A(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(w.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Gi);e&&(Ki=JSON.parse(e))}catch{}},[t]),w.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Ki,()=>window.scrollY,e?(t,n)=>qi(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),w.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{A(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Yi(e,t){let{capture:n}=t||{};w.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Xi(e,{relative:t}={}){let n=w.useContext(Hn);k(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=F(`useViewTransitionState`),i=ur(e,{relative:t});if(!n.isTransitioning)return!1;let a=Fe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Fe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Me(i.pathname,o)!=null||Me(i.pathname,a)!=null}var Zi=u(_(),1);function Qi(e){return w.createElement(zr,{flushSync:Zi.flushSync,...e})}var $i=u(y(),1),ea=`/Nithiya-Ayurveda/assets/logo-BC5qaa_O.png`,ta=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=s(((e,t)=>{t.exports=ta()}))(),na=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --deep-green:    #040d07;
    --mid-green:     #0a1f12;
    --nav-green:     #0b2015;
    --nav-green2:    #0e2a1c;
    --gold:          #c9a84c;
    --gold-light:    #e8c96a;
    --gold-pale:     #f5e8c0;
    --gold-dim:      rgba(201,168,76,0.45);
    --gold-faint:    rgba(201,168,76,0.12);
    --cream:         #fdf6e8;
    --text-nav:      #e8dfc8;
    --text-dim:      rgba(232,223,200,0.55);
    --glass-bg:      rgba(4,13,7,0.92);
    --glass-border:  rgba(201,168,76,0.18);
  }

  /* ── TOP STRIP ── */
  .na-top-strip {
    width: 100%;
    background: linear-gradient(90deg, var(--deep-green) 0%, var(--nav-green2) 50%, var(--deep-green) 100%);
    border-bottom: 1px solid rgba(201,168,76,0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 8px 40px;
    position: fixed;
    top: 0; left: 0;
    z-index: 1001;
    transition: transform 0.4s ease;
    overflow: hidden;
  }
  .na-top-strip::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(232,201,106,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent);
  }
  .na-top-strip.na-hidden { transform: translateY(-100%); }

  .na-strip-text {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: rgba(201,168,76,0.7);
    white-space: nowrap;
  }
  .na-strip-dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(201,168,76,0.35);
    flex-shrink: 0;
  }

  /* ── NAVBAR ── */
  .na-navbar {
    position: fixed;
    top: 28px; left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--nav-green);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    box-shadow:
      0 4px 32px rgba(0,0,0,0.28),
      0 1px 0 rgba(201,168,76,0.1) inset;
    transition: top 0.4s ease, background 0.35s ease, box-shadow 0.35s ease;
  }
  .na-navbar.na-strip-hidden { top: 0; }
  .na-navbar.na-scrolled {
    background: rgba(7, 20, 12, 0.98);
    box-shadow:
      0 16px 56px rgba(0,0,0,0.36),
      0 1px 0 rgba(201,168,76,0.14) inset;
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
  }

  .na-navbar::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(201,168,76,0.06) 10%,
      rgba(201,168,76,0.5) 30%,
      rgba(232,201,106,0.85) 50%,
      rgba(201,168,76,0.5) 70%,
      rgba(201,168,76,0.06) 90%,
      transparent 100%
    );
  }
  .na-navbar::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 20%; right: 20%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent);
  }

  .na-navbar-inner {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 40px;
    height: 74px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 40px;
    position: relative;
  }

  /* ── LOGO ── */
  .na-logo-group {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1);
  }
  .na-logo-group:hover { transform: translateY(-1.5px); }

  .na-logo-img-wrap {
    position: relative;
    width: 50px; height: 50px;
    flex-shrink: 0;
  }
  .na-logo-img-wrap::before {
    content: '';
    position: absolute; inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.3);
    transition: border-color 0.4s, box-shadow 0.4s;
  }
  .na-logo-img-wrap::after {
    content: '';
    position: absolute; inset: -12px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.1);
    transition: border-color 0.4s, transform 0.5s;
  }
  .na-logo-group:hover .na-logo-img-wrap::before {
    border-color: rgba(201,168,76,0.7);
    box-shadow: 0 0 22px rgba(201,168,76,0.28), inset 0 0 16px rgba(201,168,76,0.1);
  }
  .na-logo-group:hover .na-logo-img-wrap::after {
    border-color: rgba(201,168,76,0.22);
    transform: rotate(15deg);
  }

  .na-logo-img {
    width: 50px; height: 50px;
    object-fit: contain; border-radius: 50%;
    position: relative; z-index: 1;
    filter:
      drop-shadow(0 0 6px rgba(201,168,76,0.38))
      drop-shadow(0 0 20px rgba(201,168,76,0.18))
      brightness(1.08);
    transition: filter 0.4s ease;
  }
  .na-logo-group:hover .na-logo-img {
    filter:
      drop-shadow(0 0 12px rgba(201,168,76,0.65))
      drop-shadow(0 0 28px rgba(201,168,76,0.32))
      brightness(1.2);
  }

  .na-logo-text { display: flex; flex-direction: column; gap: 5px; }

  .na-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 600;
    color: var(--gold-light);
    letter-spacing: 0.5px; line-height: 1;
    transition: color 0.3s, text-shadow 0.3s;
    text-shadow: 0 0 28px rgba(201,168,76,0.22);
  }
  .na-logo-group:hover .na-logo-name {
    color: var(--gold-pale);
    text-shadow: 0 0 40px rgba(201,168,76,0.5);
  }

  .na-logo-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 9px; font-weight: 300;
    letter-spacing: 3.5px; text-transform: uppercase;
    color: rgba(201,168,76,0.45); font-style: italic;
    transition: color 0.3s;
  }
  .na-logo-group:hover .na-logo-tagline { color: rgba(201,168,76,0.72); }

  /* ── NAV CENTER ── */
  .na-nav-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .na-nav-ornament {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 5px; opacity: 0.38;
  }
  .na-orn-line {
    height: 1px; width: 40px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.7));
  }
  .na-orn-line.r { background: linear-gradient(90deg, rgba(201,168,76,0.7), transparent); }
  .na-orn-leaf {
    font-size: 8px; color: rgba(201,168,76,0.9);
    letter-spacing: 2px;
  }

  .na-nav-links {
    display: flex; align-items: center;
    list-style: none; gap: 0; margin: 0; padding: 0;
  }

  .na-nav-links li {
    position: relative;
    cursor: pointer;
    padding: 5px 22px;
    display: flex; align-items: center;
  }

  .na-nav-links li span {
    font-family: 'Jost', sans-serif;
    font-size: 10px; font-weight: 500;
    letter-spacing: 3.5px; text-transform: uppercase;
    color: var(--text-nav);
    display: block;
    transition: color 0.35s, text-shadow 0.35s;
    position: relative;
  }

  .na-nav-links li::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 22px; right: 22px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-light), transparent);
    box-shadow: 0 0 8px rgba(201,168,76,0.6);
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(0.25,1,0.5,1);
  }
  .na-nav-links li:hover::after,
  .na-nav-links li.na-active::after { transform: scaleX(1); }

  .na-nav-links li:hover span {
    color: var(--gold-pale);
    text-shadow: 0 0 18px rgba(201,168,76,0.35);
  }
  .na-nav-links li.na-active span {
    color: var(--gold-light);
    text-shadow: 0 0 16px rgba(201,168,76,0.3);
  }

  .na-nav-links li.na-active::before {
    content: '✦';
    position: absolute;
    top: -8px; left: 50%;
    transform: translateX(-50%);
    font-size: 6px;
    color: rgba(201,168,76,0.55);
  }

  /* ── ACTIONS ── */
  .na-nav-actions {
    display: flex; align-items: center; gap: 4px;
  }

  .na-icon-btn {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text-nav);
    transition: color 0.3s, background 0.3s, transform 0.25s;
    background: none; border: none;
    position: relative; border-radius: 50%;
  }
  .na-icon-btn:hover {
    color: var(--gold-light);
    background: rgba(201,168,76,0.08);
    transform: translateY(-1px);
  }
  .na-icon-btn svg { width: 17px; height: 17px; stroke-width: 1.3; }

  .na-cart-badge {
    position: absolute; top: 5px; right: 5px;
    width: 15px; height: 15px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--deep-green);
    font-family: 'Jost', sans-serif;
    font-size: 7.5px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    line-height: 1;
    box-shadow: 0 0 12px rgba(201,168,76,0.6), 0 2px 6px rgba(0,0,0,0.3);
  }

  .na-actions-sep {
    width: 1px; height: 22px;
    background: rgba(201,168,76,0.2); margin: 0 6px;
  }

  /* ── BUY NOW CTA ── */
  .na-buy-wrap {
    position: relative; display: flex; align-items: center;
  }
  .na-buy-leaf {
    font-size: 12px; color: rgba(201,168,76,0.32);
    margin: 0 4px; transition: color 0.3s, transform 0.35s;
    pointer-events: none; user-select: none;
  }
  .na-buy-wrap:hover .na-buy-leaf { color: rgba(201,168,76,0.55); }
  .na-buy-leaf.r { transform: scaleX(-1); }
  .na-buy-wrap:hover .na-buy-leaf.r { transform: scaleX(-1) translateX(-2px); }

  .na-buy-btn {
    font-family: 'Jost', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 3.2px; text-transform: uppercase;
    color: var(--deep-green);
    background: linear-gradient(135deg, #b8903e 0%, #e8c96a 38%, #c9a84c 65%, #d4b460 100%);
    background-size: 220% 220%;
    background-position: left center;
    border: none; padding: 12px 28px;
    cursor: pointer; position: relative; overflow: hidden;
    clip-path: polygon(9px 0%, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
    transition: background-position 0.55s ease, transform 0.25s ease, box-shadow 0.3s ease, letter-spacing 0.3s;
    box-shadow: 0 3px 20px rgba(201,168,76,0.22);
  }
  .na-buy-btn:hover {
    background-position: right center;
    transform: translateY(-2px);
    letter-spacing: 3.8px;
    box-shadow: 0 8px 30px rgba(201,168,76,0.42);
  }
  .na-buy-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 28%, rgba(255,255,255,0.4) 50%, transparent 72%);
    transform: translateX(-150%);
    transition: transform 0.6s ease;
  }
  .na-buy-btn:hover::before { transform: translateX(150%); }

  /* ── HAMBURGER ── */
  .na-hamburger {
    display: none; flex-direction: column;
    gap: 5px; cursor: pointer;
    background: none; border: none; padding: 8px;
    border-radius: 8px;
    transition: background 0.3s;
  }
  .na-hamburger:hover { background: rgba(201,168,76,0.06); }
  .na-hamburger span {
    display: block; height: 1px;
    background: var(--gold-light);
    transition: transform 0.35s ease, opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }
  .na-hamburger span:nth-child(1) { width: 22px; }
  .na-hamburger span:nth-child(2) { width: 14px; margin-left: 4px; }
  .na-hamburger span:nth-child(3) { width: 22px; }
  .na-hamburger.na-open span:nth-child(1) { width: 22px; transform: translateY(6px) rotate(45deg); }
  .na-hamburger.na-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .na-hamburger.na-open span:nth-child(3) { width: 22px; transform: translateY(-6px) rotate(-45deg); }

  /* ── MOBILE MENU — compact slide-down panel ── */
  .na-mobile-menu {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: rgba(5, 14, 8, 0.98);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    z-index: 997;
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 0;
    list-style: none;
    margin: 0;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
    border-bottom: 1px solid rgba(201,168,76,0.18);
    box-shadow: 0 16px 48px rgba(0,0,0,0.5);
    overflow: hidden;
  }
  .na-mobile-menu::after {
    content: '';
    position: absolute;
    bottom: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
  }
  .na-mobile-menu.na-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  /* Spacer pushes content below the fixed navbar */
  .na-mobile-menu-spacer {
    height: 60px;
    flex-shrink: 0;
  }

  /* Gold top line accent */
  .na-mobile-menu-top-accent {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.6) 30%, rgba(232,201,106,0.9) 50%, rgba(201,168,76,0.6) 70%, transparent);
    margin-bottom: 4px;
    flex-shrink: 0;
  }

  .na-mobile-links {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }

  .na-mobile-link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 24px;
    cursor: pointer;
    border-bottom: 1px solid rgba(201,168,76,0.06);
    transition: background 0.2s ease, padding-left 0.25s ease;
    position: relative;
  }
  .na-mobile-link-item:last-child { border-bottom: none; }
  .na-mobile-link-item:active { background: rgba(201,168,76,0.06); }

  .na-mobile-link-item span {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--text-nav);
    transition: color 0.25s;
  }
  .na-mobile-link-item.na-active span {
    color: var(--gold-light);
  }
  .na-mobile-link-item.na-active::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, var(--gold), transparent);
  }
  .na-mobile-link-item .na-ml-arrow {
    font-size: 9px;
    color: rgba(201,168,76,0.3);
    transition: color 0.25s, transform 0.25s;
  }
  .na-mobile-link-item.na-active .na-ml-arrow {
    color: rgba(201,168,76,0.6);
    transform: translateX(2px);
  }

  .na-mobile-menu-footer {
    padding: 14px 24px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .na-mobile-buy-btn {
    flex: 1;
    font-family: 'Jost', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 3px; text-transform: uppercase;
    color: var(--deep-green);
    background: linear-gradient(135deg, #b8903e 0%, #e8c96a 45%, #c9a84c 100%);
    border: none;
    padding: 11px 20px;
    cursor: pointer;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    position: relative; overflow: hidden;
  }
  .na-mobile-buy-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
    transform: translateX(-150%);
    transition: transform 0.5s;
  }
  .na-mobile-buy-btn:active::before { transform: translateX(150%); }
  .na-mobile-buy-btn:active {
    box-shadow: 0 8px 28px rgba(201,168,76,0.45);
    transform: translateY(-1px);
  }

  .na-mobile-contact-info {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 24px 0;
  }
  .na-mobile-contact-info span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px; font-style: italic;
    color: rgba(201,168,76,0.4);
    letter-spacing: 1px;
  }
  .na-mobile-contact-divider {
    flex: 1; height: 1px;
    background: rgba(201,168,76,0.1);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 980px) {
  .na-nav-center { display: none; }
  .na-buy-wrap   { display: none; }
  .na-actions-sep { display: none; }
  .na-hamburger { display: flex; }
  .na-navbar-inner { padding: 0 16px; height: 60px; grid-template-columns: auto 1fr auto; gap: 12px; }
  .na-logo-img { width: 38px; height: 38px; }
  .na-logo-img-wrap { width: 38px; height: 38px; }
  .na-logo-img-wrap::before { inset: -5px; }
  .na-logo-img-wrap::after { inset: -9px; }
  .na-logo-group { gap: 10px; }
  .na-logo-name { font-size: 16px; }
  .na-logo-tagline { font-size: 7.5px; letter-spacing: 2px; }
  .na-top-strip { display: none; }
  .na-navbar { top: 0 !important; }
  .na-icon-btn { width: 36px; height: 36px; }
  .na-icon-btn svg { width: 15px; height: 15px; }
  .na-cart-badge { top: 3px; right: 3px; width: 13px; height: 13px; font-size: 7px; }

  /* ✅ ADD THESE LINES HERE (VERY IMPORTANT) */
  .na-navbar-inner {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  .na-hamburger {
    order: -1;
  }

  .na-logo-group {
    margin-left: 8px;
  }
}

  @media (max-width: 480px) {
    .na-logo-tagline { display: none; }
    .na-logo-name { font-size: 15px; }
    .na-navbar-inner { height: 56px; padding: 0 14px; }
    .na-logo-img { width: 34px; height: 34px; }
    .na-logo-img-wrap { width: 34px; height: 34px; }
    .na-mobile-menu-spacer { height: 56px; }
  }
`,ra=[`Home`,`About`,`Products`,`Team`,`Contact`];function ia({cartCount:e=0,setIsCartOpen:t}){let[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)(!1),c=(0,w.useRef)(!1),l=(0,w.useRef)(0),u=ar(),d=nr();return(0,w.useEffect)(()=>{if(c.current)return;let e=document.createElement(`style`);e.textContent=na,document.head.appendChild(e),c.current=!0},[]),(0,w.useEffect)(()=>{let e=()=>{let e=window.scrollY;r(e>50),s(e>30),l.current=e};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,w.useEffect)(()=>(document.body.style.overflow=i?`hidden`:``,()=>{document.body.style.overflow=``}),[i]),typeof window<`u`&&window.innerWidth<=480||typeof window<`u`&&window.innerWidth,(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`na-top-strip${o?` na-hidden`:``}`,children:[(0,I.jsx)(`span`,{className:`na-strip-text`,children:`Free delivery on orders above ₹999`}),(0,I.jsx)(`span`,{className:`na-strip-dot`}),(0,I.jsx)(`span`,{className:`na-strip-text`,children:`100% Natural · Clinically Validated`}),(0,I.jsx)(`span`,{className:`na-strip-dot`}),(0,I.jsx)(`span`,{className:`na-strip-text`,children:`Est. Since 2001 · Kerala Heritage`})]}),(0,I.jsxs)(`div`,{className:`na-mobile-menu${i?` na-open`:``}`,children:[(0,I.jsx)(`div`,{className:`na-mobile-menu-spacer`}),(0,I.jsx)(`div`,{className:`na-mobile-menu-top-accent`}),(0,I.jsx)(`div`,{className:`na-mobile-links`,children:ra.map((e,t)=>{let n=e===`Home`?`/`:`/`+e.toLowerCase();return(0,I.jsxs)(`div`,{className:`na-mobile-link-item${d.pathname===n?` na-active`:``}`,onClick:()=>{u(n),a(!1)},children:[(0,I.jsx)(`span`,{children:e}),(0,I.jsx)(`span`,{className:`na-ml-arrow`,children:`›`})]},t)})}),(0,I.jsx)(`div`,{className:`na-mobile-menu-footer`,children:(0,I.jsx)(`button`,{className:`na-mobile-buy-btn`,onClick:()=>{u(`/products`),a(!1)},children:`Shop Now`})}),(0,I.jsxs)(`div`,{className:`na-mobile-contact-info`,children:[(0,I.jsx)(`div`,{className:`na-mobile-contact-divider`}),(0,I.jsx)(`span`,{children:`Rooted in Nature · Trusted in Science`}),(0,I.jsx)(`div`,{className:`na-mobile-contact-divider`})]})]}),(0,I.jsx)(`nav`,{className:`na-navbar${n?` na-scrolled`:``}${o?` na-strip-hidden`:``}`,children:(0,I.jsxs)(`div`,{className:`na-navbar-inner`,children:[(0,I.jsxs)(`div`,{className:`na-logo-group`,onClick:()=>u(`/`),children:[(0,I.jsx)(`div`,{className:`na-logo-img-wrap`,children:(0,I.jsx)(`img`,{src:ea,alt:`Nithya Ayurveda`,className:`na-logo-img`})}),(0,I.jsxs)(`div`,{className:`na-logo-text`,children:[(0,I.jsx)(`div`,{className:`na-logo-name`,children:`Nithya Ayurveda`}),(0,I.jsx)(`div`,{className:`na-logo-tagline`,children:`Rooted in Nature · Trusted in Science`})]})]}),(0,I.jsxs)(`div`,{className:`na-nav-center`,children:[(0,I.jsxs)(`div`,{className:`na-nav-ornament`,children:[(0,I.jsx)(`div`,{className:`na-orn-line`}),(0,I.jsx)(`span`,{className:`na-orn-leaf`,children:`✦ ❧ ✦`}),(0,I.jsx)(`div`,{className:`na-orn-line r`})]}),(0,I.jsx)(`ul`,{className:`na-nav-links`,children:ra.map(e=>{let t=e===`Home`?`/`:`/`+e.toLowerCase();return(0,I.jsx)(`li`,{className:d.pathname===t?`na-active`:``,onClick:()=>u(t),children:(0,I.jsx)(`span`,{children:e})},e)})})]}),(0,I.jsxs)(`div`,{className:`na-nav-actions`,children:[(0,I.jsx)(`button`,{className:`na-icon-btn`,"aria-label":`Search`,children:(0,I.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,children:[(0,I.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,I.jsx)(`path`,{d:`M20.5 20.5l-3.8-3.8`})]})}),(0,I.jsxs)(`button`,{type:`button`,className:`na-icon-btn`,"aria-label":`Cart`,onClick:e=>{e.preventDefault(),e.stopPropagation(),typeof t==`function`&&t(!0)},children:[(0,I.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`path`,{d:`M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z`}),(0,I.jsx)(`path`,{d:`M3 6h18`}),(0,I.jsx)(`path`,{d:`M16 10a4 4 0 01-8 0`})]}),(0,I.jsx)(`span`,{className:`na-cart-badge`,children:e})]}),(0,I.jsx)(`div`,{className:`na-actions-sep`}),(0,I.jsxs)(`div`,{className:`na-buy-wrap`,children:[(0,I.jsx)(`span`,{className:`na-buy-leaf`,children:`❧`}),(0,I.jsx)(`button`,{className:`na-buy-btn`,onClick:()=>u(`/products`),children:`Buy Now`}),(0,I.jsx)(`span`,{className:`na-buy-leaf r`,children:`❧`})]}),(0,I.jsxs)(`button`,{className:`na-hamburger ${i?`na-open`:``}`,onClick:()=>a(e=>!e),"aria-label":`Toggle menu`,children:[(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{})]})]})]})}),(0,I.jsx)(`div`,{style:{height:`60px`},className:`na-desktop-spacer`}),(0,I.jsx)(`style`,{children:`
        @media (min-width: 981px) {
          .na-desktop-spacer { height: 102px !important; }
        }
      `})]})}var aa=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --ft-dark:    #030a05;
    --ft-mid:     #071510;
    --ft-green:   #0c2018;
    --ft-gold:    #c9a84c;
    --ft-gold-l:  #e8c96a;
    --ft-gold-p:  #f5e8c0;
    --ft-cream:   rgba(245,235,221,0.78);
    --ft-muted:   rgba(245,235,221,0.38);
    --ft-faint:   rgba(245,235,221,0.18);
    --ft-border:  rgba(201,168,76,0.14);
    --ft-gold-b:  rgba(201,168,76,0.22);
  }

  @keyframes ftSpin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes ftShimmer {
    0%,100% { opacity: 0.5; }
    50%      { opacity: 1; }
  }
  @keyframes ftLeafSway {
    0%,100% { transform: rotate(-18deg) translate(-28px,-22px) rotate(0deg); }
    50%      { transform: rotate(-18deg) translate(-28px,-22px) rotate(3deg); }
  }

  /* ── FOOTER WRAPPER — eliminates white gap on ALL pages ── */
  .ft-outer-wrap {
    display: block;
    margin: 0;
    padding: 0;
    line-height: 0;
    background: #030a05;
    /* Ensure no inherited margin/gap from parent */
    margin-top: 0;
  }

  /* ── ROOT ── */
  .ft-root {
    display: block;
    margin: 0;
    padding: 0;
    background: var(--ft-dark);
    font-family: 'Jost', sans-serif;
    position: relative; overflow: hidden;
    color: var(--ft-muted);
    border-top: none;
    outline: none;
    line-height: normal;
  }

  /* Top rule — gold shimmer line */
  .ft-top-rule {
    width: 100%; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(201,168,76,0.15) 15%,
      rgba(201,168,76,0.55) 35%,
      rgba(232,201,106,0.85) 50%,
      rgba(201,168,76,0.55) 65%,
      rgba(201,168,76,0.15) 85%,
      transparent 100%
    );
    display: block;
  }

  .ft-mandala {
    position: absolute; top: 50%; left: 50%;
    width: 800px; height: 800px;
    opacity: 0.035; pointer-events: none; z-index: 0;
    animation: ftSpin 260s linear infinite;
  }

  .ft-radial-glow {
    position: absolute; top: 40%; left: 50%;
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(201,168,76,0.03) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none; z-index: 0;
  }

  .ft-leaf { position: absolute; pointer-events: none; z-index: 0; }
  .ft-leaf.tl {
    top: 0; left: 0; width: 200px; opacity: 0.055;
    animation: ftLeafSway 12s ease-in-out infinite;
  }
  .ft-leaf.br {
    bottom: 60px; right: 0; width: 200px; opacity: 0.05;
    transform: rotate(162deg) translate(-28px,-22px);
  }
  .ft-leaf.bl {
    bottom: 80px; left: 80px; width: 120px; opacity: 0.04;
    transform: rotate(20deg);
  }

  /* ── CONTAINER ── */
  .ft-container {
    position: relative; z-index: 1;
    max-width: 1240px; margin: 0 auto;
    padding: 60px 52px 44px;
  }

  /* ── GRID ── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.7fr 1fr 1fr 1.3fr;
    gap: 56px; margin-bottom: 64px;
  }

  /* Scroll animation */
  .ft-anim {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
  }
  .ft-anim.ft-in { opacity: 1; transform: translateY(0); }
  .ft-anim-d1 { transition-delay: 0.05s; }
  .ft-anim-d2 { transition-delay: 0.12s; }
  .ft-anim-d3 { transition-delay: 0.2s; }
  .ft-anim-d4 { transition-delay: 0.28s; }

  /* ── BRAND ── */
  .ft-logo-row {
    display: flex; align-items: center;
    gap: 14px; margin-bottom: 20px;
  }
  .ft-logo-ring {
    position: relative; width: 52px; height: 52px; flex-shrink: 0;
  }
  .ft-logo-ring::before {
    content: '';
    position: absolute; inset: -5px; border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.28);
    transition: border-color 0.4s;
  }
  .ft-logo-ring::after {
    content: '';
    position: absolute; inset: -11px; border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.1);
    transition: border-color 0.4s, transform 0.5s;
  }
  .ft-logo-ring:hover::before { border-color: rgba(201,168,76,0.6); }
  .ft-logo-ring:hover::after  { border-color: rgba(201,168,76,0.2); transform: rotate(20deg); }

  .ft-logo-img {
    width: 52px; height: 52px; border-radius: 50%; object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(201,168,76,0.25)) brightness(1.05);
    transition: filter 0.4s;
  }
  .ft-logo-ring:hover .ft-logo-img {
    filter: drop-shadow(0 0 14px rgba(201,168,76,0.5)) brightness(1.15);
  }

  .ft-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 600;
    color: rgba(245,235,221,0.92);
    letter-spacing: 0.04em; display: block; line-height: 1;
    text-shadow: 0 0 24px rgba(201,168,76,0.18);
  }
  .ft-brand-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.65rem; font-weight: 300;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: rgba(201,168,76,0.48); font-style: italic;
    display: block; margin-top: 5px;
  }

  .ft-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 300; font-style: italic;
    color: rgba(245,235,221,0.38); line-height: 1.9;
    margin: 0 0 24px; max-width: 300px;
  }

  .ft-brand-divider {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 22px;
  }
  .ft-brand-div-line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, rgba(201,168,76,0.2), transparent);
  }
  .ft-brand-div-glyph {
    font-size: 10px; color: rgba(201,168,76,0.35);
  }

  .ft-socials { display: flex; gap: 10px; }
  .ft-social-btn {
    width: 40px; height: 40px;
    border: 1px solid var(--ft-gold-b);
    border-radius: 50%; background: transparent;
    display: flex; align-items: center; justify-content: center;
    color: var(--ft-muted);
    cursor: pointer; transition: all .35s;
    position: relative; overflow: hidden;
    text-decoration: none;
  }
  .ft-social-btn::before {
    content: '';
    position: absolute; inset: 0; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
    opacity: 0; transition: opacity .35s;
  }
  .ft-social-btn:hover {
    border-color: var(--ft-gold);
    color: rgba(245,235,221,0.88);
    transform: translateY(-3px) rotate(5deg);
    box-shadow: 0 6px 20px rgba(201,168,76,0.2);
  }
  .ft-social-btn:hover::before { opacity: 1; }
  .ft-social-btn svg { width: 15px; height: 15px; position: relative; z-index: 1; }

  /* ── COLUMNS ── */
  .ft-col-label {
    font-family: 'Jost', sans-serif;
    font-size: 0.58rem; font-weight: 600;
    letter-spacing: 0.3em; color: var(--ft-gold); text-transform: uppercase;
    margin: 0 0 22px; display: flex; align-items: center; gap: 10px;
  }
  .ft-col-label::after {
    content: '';
    height: 1px; flex: 1;
    background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent);
  }

  .ft-link-list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 12px;
  }

  .ft-link {
    color: var(--ft-muted); text-decoration: none;
    font-family: 'Jost', sans-serif; font-size: 0.82rem; font-weight: 300;
    letter-spacing: 0.03em; transition: all .3s;
    display: inline-flex; align-items: center; gap: 0;
    position: relative;
  }
  .ft-link::before {
    content: '·';
    font-size: 14px; color: rgba(201,168,76,0);
    transition: color 0.3s, margin-right 0.3s;
    margin-right: 0;
  }
  .ft-link:hover {
    color: rgba(245,235,221,0.92);
    transform: translateX(8px);
    text-shadow: 0 0 14px rgba(201,168,76,0.18);
  }
  .ft-link:hover::before {
    color: rgba(201,168,76,0.6);
    margin-right: 6px;
  }

  .ft-contact-block { margin-bottom: 18px; }
  .ft-contact-block strong {
    display: block; font-family: 'Jost', sans-serif;
    font-size: 0.75rem; font-weight: 500;
    color: rgba(245,235,221,0.65); letter-spacing: 0.04em; margin-bottom: 5px;
  }
  .ft-contact-block p {
    font-family: 'Jost', sans-serif; font-size: 0.78rem;
    color: var(--ft-muted); margin: 0; line-height: 1.8; font-weight: 300;
  }
  .ft-contact-block a {
    color: var(--ft-muted); text-decoration: none;
    transition: color 0.3s;
  }
  .ft-contact-block a:hover { color: var(--ft-gold-l); }

  .ft-whatsapp-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(37,211,102,0.08);
    border: 1px solid rgba(37,211,102,0.2);
    border-radius: 100px; padding: 5px 13px;
    font-size: 0.7rem; font-weight: 400; color: rgba(37,211,102,0.7);
    margin-top: 8px; transition: all 0.3s; cursor: pointer;
    text-decoration: none;
  }
  .ft-whatsapp-pill:hover {
    background: rgba(37,211,102,0.14);
    border-color: rgba(37,211,102,0.4);
    color: rgba(37,211,102,0.9);
    transform: translateY(-1px);
  }
  .ft-whatsapp-pill svg { width: 13px; height: 13px; }

  /* ── TRUST BAR ── */
  .ft-trust {
    border-top: 1px solid var(--ft-border);
    border-bottom: 1px solid var(--ft-border);
    padding: 20px 0; margin-bottom: 32px;
    display: flex; justify-content: center; align-items: center;
    gap: 0; flex-wrap: wrap;
    position: relative;
  }
  .ft-trust::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.02) 50%, transparent 100%);
  }

  .ft-trust-item {
    font-family: 'Jost', sans-serif; font-size: 0.58rem; font-weight: 500;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--ft-faint);
    display: flex; align-items: center; gap: 18px;
    padding: 0 24px;
    transition: color 0.3s;
    cursor: default;
  }
  .ft-trust-item:hover { color: rgba(201,168,76,0.5); }
  .ft-trust-sep {
    width: 1px; height: 18px;
    background: linear-gradient(180deg, transparent, rgba(201,168,76,0.25), transparent);
    flex-shrink: 0;
  }

  /* ── BOTTOM ── */
  .ft-bottom {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
    padding-top: 24px;
    border-top: 1px solid rgba(201,168,76,0.08);
  }
  .ft-copy {
    font-family: 'Jost', sans-serif; font-size: 0.72rem;
    color: rgba(245,235,221,0.22); font-weight: 300; margin: 0;
    letter-spacing: 0.03em;
  }
  .ft-legal { display: flex; gap: 20px; }
  .ft-legal a {
    font-family: 'Jost', sans-serif; font-size: 0.58rem; font-weight: 500;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(245,235,221,0.2); text-decoration: none; transition: color .3s;
  }
  .ft-legal a:hover { color: var(--ft-gold); }

  .ft-crafted {
    display: flex; align-items: center; gap: 6px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.75rem; font-style: italic;
    color: rgba(201,168,76,0.28);
  }
  .ft-crafted span { animation: ftShimmer 3s ease-in-out infinite; }

  .ft-scroll-top-wrap {
    position: absolute; right: 52px; bottom: 48px;
  }
  .ft-scroll-top-btn {
    width: 44px; height: 44px;
    border: 1px solid rgba(201,168,76,0.2); background: transparent;
    color: rgba(245,235,221,0.28);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; border-radius: 8px; overflow: hidden;
    transition: all .3s; position: relative;
  }
  .ft-scroll-top-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.1), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .ft-scroll-top-btn:hover {
    border-color: var(--ft-gold);
    color: var(--ft-gold-l);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(201,168,76,0.18);
  }
  .ft-scroll-top-btn:hover::before { opacity: 1; }
  .ft-scroll-top-btn svg { width: 16px; height: 16px; position: relative; z-index: 1; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
    .ft-container { padding: 56px 28px 44px; }
    .ft-scroll-top-wrap { right: 28px; }
  }
  @media (max-width: 720px) {
    .ft-grid { grid-template-columns: 1fr; gap: 28px; }
    .ft-container { padding: 44px 20px 72px; }
    .ft-trust { gap: 12px; flex-wrap: wrap; justify-content: flex-start; padding: 16px 20px; }
    .ft-trust-item { padding: 4px 12px; font-size: 0.52rem; }
    .ft-trust-sep { display: none; }
    .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
    .ft-scroll-top-wrap { right: 20px; bottom: 72px; }
    .ft-crafted { display: none; }
    .ft-tagline { max-width: 100%; }
  }
`,oa=[`AYUSH Certified`,`100% Organic`,`Pure Extracts`,`GMP Compliant`];function sa(){let e=new Date().getFullYear(),t=()=>window.scrollTo({top:0,behavior:`smooth`}),n=(0,w.useRef)(null),r=(0,w.useRef)([]);(0,w.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`ft-in`)})},{threshold:.08});return r.current.forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[]);let i=e=>{e&&!r.current.includes(e)&&r.current.push(e)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:aa}),(0,I.jsx)(`div`,{className:`ft-outer-wrap`,children:(0,I.jsxs)(`footer`,{className:`ft-root`,ref:n,children:[(0,I.jsx)(`div`,{className:`ft-top-rule`}),(0,I.jsxs)(`svg`,{className:`ft-mandala`,viewBox:`0 0 600 600`,"aria-hidden":`true`,children:[[...Array(20)].map((e,t)=>(0,I.jsxs)(`g`,{transform:`rotate(${t*18} 300 300)`,children:[(0,I.jsx)(`ellipse`,{cx:`300`,cy:`110`,rx:`6`,ry:`32`,fill:`#B8964E`,opacity:`0.25`}),(0,I.jsx)(`circle`,{cx:`300`,cy:`82`,r:`2.5`,fill:`#B8964E`,opacity:`0.35`})]},t)),[140,200,255,300].map((e,t)=>(0,I.jsx)(`circle`,{cx:`300`,cy:`300`,r:e,fill:`none`,stroke:`#B8964E`,strokeWidth:`0.4`,opacity:`0.6`},t)),[...Array(8)].map((e,t)=>(0,I.jsx)(`path`,{d:`M300,300 L${300+295*Math.cos(t*Math.PI/4)},${300+295*Math.sin(t*Math.PI/4)}`,stroke:`#B8964E`,strokeWidth:`0.3`,opacity:`0.3`},t))]}),(0,I.jsx)(`div`,{className:`ft-radial-glow`}),(0,I.jsxs)(`svg`,{className:`ft-leaf tl`,viewBox:`0 0 200 220`,fill:`none`,"aria-hidden":`true`,children:[(0,I.jsx)(`path`,{d:`M40 180 C30 120, 60 60, 120 20 C140 50, 130 100, 100 140 C80 165, 60 175, 40 180Z`,fill:`#fff`,opacity:`0.9`}),(0,I.jsx)(`path`,{d:`M40 180 C80 155, 110 120, 120 20`,stroke:`#c9a84c`,strokeWidth:`0.8`,opacity:`0.4`}),(0,I.jsx)(`path`,{d:`M40 180 C75 140, 95 100, 120 20`,stroke:`#c9a84c`,strokeWidth:`0.5`,opacity:`0.3`}),(0,I.jsx)(`path`,{d:`M68 150 C90 135, 103 115, 120 80`,stroke:`#c9a84c`,strokeWidth:`0.6`,opacity:`0.25`}),(0,I.jsx)(`path`,{d:`M55 165 C75 148, 88 128, 120 20`,stroke:`#fff`,strokeWidth:`0.4`,opacity:`0.2`})]}),(0,I.jsx)(`svg`,{className:`ft-leaf br`,viewBox:`0 0 200 220`,fill:`none`,"aria-hidden":`true`,children:(0,I.jsx)(`path`,{d:`M40 180 C30 120, 60 60, 120 20 C140 50, 130 100, 100 140 C80 165, 60 175, 40 180Z`,fill:`#fff`,opacity:`0.9`})}),(0,I.jsx)(`svg`,{className:`ft-leaf bl`,viewBox:`0 0 120 160`,fill:`none`,"aria-hidden":`true`,children:(0,I.jsx)(`path`,{d:`M30 130 C20 85, 45 40, 90 15 C105 35, 95 70, 72 100 C56 120, 42 128, 30 130Z`,fill:`#fff`,opacity:`0.9`})}),(0,I.jsxs)(`div`,{className:`ft-container`,children:[(0,I.jsxs)(`div`,{className:`ft-grid`,children:[(0,I.jsxs)(`div`,{ref:i,className:`ft-anim ft-anim-d1`,children:[(0,I.jsxs)(`div`,{className:`ft-logo-row`,children:[(0,I.jsx)(`div`,{className:`ft-logo-ring`,children:(0,I.jsx)(`img`,{src:ea,alt:`Nithya Ayurveda`,className:`ft-logo-img`})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{className:`ft-brand-name`,children:`Nithya Ayurveda`}),(0,I.jsx)(`span`,{className:`ft-brand-sub`,children:`Rooted in Nature · Trusted in Science`})]})]}),(0,I.jsx)(`p`,{className:`ft-tagline`,children:`Nurturing holistic wellness through the synergy of ancient Vedic knowledge and modern botanical science.`}),(0,I.jsxs)(`div`,{className:`ft-brand-divider`,children:[(0,I.jsx)(`div`,{className:`ft-brand-div-line`}),(0,I.jsx)(`span`,{className:`ft-brand-div-glyph`,children:`✦`})]}),(0,I.jsxs)(`div`,{className:`ft-socials`,children:[(0,I.jsx)(`a`,{href:`https://www.instagram.com/nithya_ayurveda?utm_source=qr&igsh=MTUyY3gzcm1iYjN6dQ==`,target:`_blank`,rel:`noopener noreferrer`,className:`ft-social-btn`,"aria-label":`Instagram`,children:(0,I.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,I.jsx)(`circle`,{cx:`17.5`,cy:`6.5`,r:`0.5`,fill:`currentColor`,stroke:`none`})]})}),(0,I.jsx)(`a`,{href:`https://www.facebook.com/share/1D8MDu7JVU/`,target:`_blank`,rel:`noopener noreferrer`,className:`ft-social-btn`,"aria-label":`Facebook`,children:(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,I.jsx)(`path`,{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`})})})]})]}),(0,I.jsxs)(`div`,{ref:i,className:`ft-anim ft-anim-d2`,children:[(0,I.jsx)(`h4`,{className:`ft-col-label`,children:`Navigation`}),(0,I.jsx)(`ul`,{className:`ft-link-list`,children:[`Home`,`About`,`Products`,`Team`,`Contact`].map(e=>(0,I.jsx)(`li`,{children:(0,I.jsx)(`a`,{href:e===`Home`?`/`:`/${e.toLowerCase()}`,className:`ft-link`,children:e})},e))})]}),(0,I.jsxs)(`div`,{ref:i,className:`ft-anim ft-anim-d3`,children:[(0,I.jsx)(`h4`,{className:`ft-col-label`,children:`Collections`}),(0,I.jsx)(`ul`,{className:`ft-link-list`,children:[`Hemp Pain Spray`,`Ovucare`,`Vajra-X`,`Kufrida Drops`].map(e=>(0,I.jsx)(`li`,{children:(0,I.jsx)(`a`,{href:`/products`,className:`ft-link`,children:e})},e))})]}),(0,I.jsxs)(`div`,{ref:i,className:`ft-anim ft-anim-d4`,children:[(0,I.jsx)(`h4`,{className:`ft-col-label`,children:`Connect`}),(0,I.jsxs)(`div`,{className:`ft-contact-block`,children:[(0,I.jsx)(`strong`,{children:`Shop no 2 chatrapati shivaji maharaj chowk`}),(0,I.jsx)(`p`,{children:`walhekarwadi pune Maharashtra 411033`})]}),(0,I.jsxs)(`div`,{className:`ft-contact-block`,children:[(0,I.jsx)(`strong`,{children:`Ayurvedic Support`}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`a`,{href:`mailto:nithyaayurveda09@gmail.com`,children:`nithyaayurveda09@gmail.com`})}),(0,I.jsx)(`p`,{children:(0,I.jsx)(`a`,{href:`tel:+918956658209`,children:`+91 8956658209`})})]}),(0,I.jsxs)(`a`,{href:`https://wa.me/918956658209`,target:`_blank`,rel:`noopener noreferrer`,className:`ft-whatsapp-pill`,children:[(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,I.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`})}),`Chat on WhatsApp`]})]})]}),(0,I.jsx)(`div`,{ref:i,className:`ft-anim ft-anim-d2 ft-trust`,children:oa.map((e,t)=>(0,I.jsxs)(`div`,{className:`ft-trust-item`,children:[t!==0&&(0,I.jsx)(`div`,{className:`ft-trust-sep`}),e]},e))}),(0,I.jsxs)(`div`,{ref:i,className:`ft-anim ft-anim-d3 ft-bottom`,children:[(0,I.jsxs)(`p`,{className:`ft-copy`,children:[`© `,e,` Nithya Ayurveda. Crafted for balance and tranquility.`]}),(0,I.jsxs)(`div`,{className:`ft-crafted`,children:[`Made with `,(0,I.jsx)(`span`,{children:`❤`}),` in India`]}),(0,I.jsxs)(`div`,{className:`ft-legal`,children:[(0,I.jsx)(`a`,{href:`#`,children:`Privacy`}),(0,I.jsx)(`a`,{href:`#`,children:`Terms`}),(0,I.jsx)(`a`,{href:`#`,children:`Shipping`})]})]}),(0,I.jsx)(`div`,{className:`ft-scroll-top-wrap`,children:(0,I.jsx)(`button`,{className:`ft-scroll-top-btn`,onClick:t,"aria-label":`Back to top`,children:(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,children:(0,I.jsx)(`path`,{d:`M12 19V5M5 12l7-7 7 7`})})})})]})]})})]})}var ca=e=>{if(e.length===0)return`Hello%2C%20I%20want%20to%20know%20more%20about%20your%20products.`;let t=`Hello, I want to order:

`;return e.forEach((e,n)=>{t+=`${n+1}. ${e.name} (Qty: ${e.quantity})\n`}),t+=`
Please assist me with the order.`,encodeURIComponent(t)};function la({cart:e,setCart:t}){return(0,I.jsx)(`button`,{onClick:()=>{let n=`https://wa.me/917972643129?text=${ca(e)}`;window.open(n,`_blank`),t([])},className:`fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition`,children:`Order on WhatsApp`})}var ua=(0,w.createContext)({});function da(e){let t=(0,w.useRef)(null);return t.current===null&&(t.current=e()),t.current}var fa=typeof window<`u`?w.useLayoutEffect:w.useEffect,pa=(0,w.createContext)(null);function ma(e,t){e.indexOf(t)===-1&&e.push(t)}function ha(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ga=(e,t,n)=>n>t?t:n<e?e:n,_a={},va=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ya(e){return typeof e==`object`&&!!e}var ba=e=>/^0[^.\s]+$/u.test(e);function xa(e){let t;return()=>(t===void 0&&(t=e()),t)}var Sa=e=>e,Ca=(e,t)=>n=>t(e(n)),wa=(...e)=>e.reduce(Ca),Ta=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Ea=class{constructor(){this.subscriptions=[]}add(e){return ma(this.subscriptions,e),()=>ha(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Da=e=>e*1e3,Oa=e=>e/1e3;function ka(e,t){return t?1e3/t*e:0}var Aa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ja=1e-7,Ma=12;function Na(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Aa(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ja&&++s<Ma);return o}function Pa(e,t,n,r){if(e===t&&n===r)return Sa;let i=t=>Na(t,0,1,e,n);return e=>e===0||e===1?e:Aa(i(e),t,r)}var Fa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ia=e=>t=>1-e(1-t),La=Pa(.33,1.53,.69,.99),Ra=Ia(La),za=Fa(Ra),Ba=e=>e>=1?1:(e*=2)<1?.5*Ra(e):.5*(2-2**(-10*(e-1))),Va=e=>1-Math.sin(Math.acos(e)),Ha=Ia(Va),Ua=Fa(Va),Wa=Pa(.42,0,1,1),Ga=Pa(0,0,.58,1),Ka=Pa(.42,0,.58,1),qa=e=>Array.isArray(e)&&typeof e[0]!=`number`,Ja=e=>Array.isArray(e)&&typeof e[0]==`number`,Ya={linear:Sa,easeIn:Wa,easeInOut:Ka,easeOut:Ga,circIn:Va,circInOut:Ua,circOut:Ha,backIn:Ra,backInOut:za,backOut:La,anticipate:Ba},Xa=e=>typeof e==`string`,Za=e=>{if(Ja(e)){e.length;let[t,n,r,i]=e;return Pa(t,n,r,i)}else if(Xa(e))return Ya[e],`${e}`,Ya[e];return e},Qa=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],$a={value:null,addProjectionMetrics:null};function eo(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&$a.value&&$a.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var to=40;function no(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Qa.reduce((e,n)=>(e[n]=eo(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=_a.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,to),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Qa.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Qa.length;t++)o[Qa[t]].cancel(e)},state:i,steps:o}}var{schedule:L,cancel:ro,state:io,steps:ao}=no(typeof requestAnimationFrame<`u`?requestAnimationFrame:Sa,!0),oo;function so(){oo=void 0}var co={now:()=>(oo===void 0&&co.set(io.isProcessing||_a.useManualTiming?io.timestamp:performance.now()),oo),set:e=>{oo=e,queueMicrotask(so)}},lo={layout:0,mainThread:0,waapi:0},uo=e=>t=>typeof t==`string`&&t.startsWith(e),fo=uo(`--`),po=uo(`var(--`),mo=e=>po(e)?ho.test(e.split(`/*`)[0].trim()):!1,ho=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function R(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var z={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},B={...z,transform:e=>ga(0,1,e)},go={...z,default:1},_o=e=>Math.round(e*1e5)/1e5,vo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yo(e){return e==null}var bo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xo=(e,t)=>n=>!!(typeof n==`string`&&bo.test(n)&&n.startsWith(e)||t&&!yo(n)&&Object.prototype.hasOwnProperty.call(n,t)),So=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(vo);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Co=e=>ga(0,255,e),wo={...z,transform:e=>Math.round(Co(e))},To={test:xo(`rgb`,`red`),parse:So(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+wo.transform(e)+`, `+wo.transform(t)+`, `+wo.transform(n)+`, `+_o(B.transform(r))+`)`};function Eo(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Do={test:xo(`#`),parse:Eo,transform:To.transform},Oo=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ko=Oo(`deg`),Ao=Oo(`%`),V=Oo(`px`),jo=Oo(`vh`),Mo=Oo(`vw`),No={...Ao,parse:e=>Ao.parse(e)/100,transform:e=>Ao.transform(e*100)},Po={test:xo(`hsl`,`hue`),parse:So(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Ao.transform(_o(t))+`, `+Ao.transform(_o(n))+`, `+_o(B.transform(r))+`)`},Fo={test:e=>To.test(e)||Do.test(e)||Po.test(e),parse:e=>To.test(e)?To.parse(e):Po.test(e)?Po.parse(e):Do.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?To.transform(e):Po.transform(e),getAnimatableNone:e=>{let t=Fo.parse(e);return t.alpha=0,Fo.transform(t)}},Io=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Lo(e){return isNaN(e)&&typeof e==`string`&&(e.match(vo)?.length||0)+(e.match(Io)?.length||0)>0}var Ro=`number`,zo=`color`,Bo=`var`,Vo=`var(`,Ho="${}",Uo=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wo(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Uo,e=>(Fo.test(e)?(r.color.push(a),i.push(zo),n.push(Fo.parse(e))):e.startsWith(Vo)?(r.var.push(a),i.push(Bo),n.push(e)):(r.number.push(a),i.push(Ro),n.push(parseFloat(e))),++a,Ho)).split(Ho),indexes:r,types:i}}function Go(e){return Wo(e).values}function Ko({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Ro?i+=_o(r[a]):e===zo?i+=Fo.transform(r[a]):i+=r[a]}return i}}function qo(e){return Ko(Wo(e))}var Jo=e=>typeof e==`number`?0:Fo.test(e)?Fo.getAnimatableNone(e):e,Yo=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Jo(e);function Xo(e){let t=Wo(e);return Ko(t)(t.values.map((e,n)=>Yo(e,t.split[n])))}var Zo={test:Lo,parse:Go,createTransformer:qo,getAnimatableNone:Xo};function Qo(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $o({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Qo(s,r,e+1/3),a=Qo(s,r,e),o=Qo(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function es(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,ts=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ns=[Do,To,Po],rs=e=>ns.find(t=>t.test(e));function is(e){let t=rs(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Po&&(n=$o(n)),n}var as=(e,t)=>{let n=is(e),r=is(t);if(!n||!r)return es(e,t);let i={...n};return e=>(i.red=ts(n.red,r.red,e),i.green=ts(n.green,r.green,e),i.blue=ts(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),To.transform(i))},os=new Set([`none`,`hidden`]);function ss(e,t){return os.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function cs(e,t){return n=>H(e,t,n)}function ls(e){return typeof e==`number`?cs:typeof e==`string`?mo(e)?es:Fo.test(e)?as:ps:Array.isArray(e)?us:typeof e==`object`?Fo.test(e)?as:ds:es}function us(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>ls(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ds(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ls(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function fs(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var ps=(e,t)=>{let n=Zo.createTransformer(t),r=Wo(e),i=Wo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?os.has(e)&&!i.values.length||os.has(t)&&!r.values.length?ss(e,t):wa(us(fs(r,i),i.values),n):(`${e}${t}`,es(e,t))};function ms(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):ls(e)(e,t)}var hs=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>L.update(t,e),stop:()=>ro(t),now:()=>io.isProcessing?io.timestamp:co.now()}},gs=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},_s=2e4;function vs(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function ys(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(vs(r),_s);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Oa(i)}}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function bs(e,t){return e*Math.sqrt(1-t*t)}var xs=12;function Ss(e,t,n){let r=n;for(let n=1;n<xs;n++)r-=e(r)/t(r);return r}var Cs=.001;function ws({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=ga(U.minDamping,U.maxDamping,o),e=ga(U.minDuration,U.maxDuration,Oa(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=bs(t,o),c=Math.exp(-i);return Cs-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=bs(t**2,o);return(-i(t)+Cs>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Cs+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Ss(i,a,s);if(e=Da(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Ts=[`duration`,`bounce`],Es=[`stiffness`,`damping`,`mass`];function Ds(e,t){return t.some(t=>e[t]!==void 0)}function Os(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!Ds(e,Es)&&Ds(e,Ts))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ga(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=ws({...e,velocity:0});t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function ks(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Os({...n,velocity:-Oa(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Oa(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y,b,x,S,C,w;if(h<1)x=bs(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>Da(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=Da(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=Da(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(vs(T),_s),t=gs(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}ks.applyToOptions=e=>{let t=ys(e,100,ks);return e.ease=t.ease,e.duration=Da(t.duration),e.type=`keyframes`,e};var As=5;function js(e,t,n){let r=Math.max(t-As,0);return ka(n-e(r),t-r)}function Ms({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ks({keyframes:[f.value,m(f.value)],velocity:js(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Ns(e,t,n){let r=[],i=n||_a.mix||ms,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=wa(Array.isArray(t)?t[n]||Sa:t,a)),r.push(a)}return r}function Ps(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Ns(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Ta(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ga(e[0],e[a-1],t)):l}function Fs(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Ta(0,t,r);e.push(H(n,1,i))}}function Is(e){let t=[0];return Fs(t,e.length-1),t}function Ls(e,t){return e.map(e=>e*t)}function Rs(e,t){return e.map(()=>t||Ka).splice(0,e.length-1)}function zs({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=qa(r)?r.map(Za):Za(r),a={done:!1,value:t[0]},o=Ps(Ls(n&&n.length===t.length?n:Is(t),e),t,{ease:Array.isArray(i)?i:Rs(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Bs=e=>e!==null;function Vs(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Bs),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Hs={decay:Ms,inertia:Ms,tween:zs,keyframes:zs,spring:ks};function Us(e){typeof e.type==`string`&&(e.type=Hs[e.type])}var Ws=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Gs=e=>e/100,Ks=class extends Ws{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==co.now()&&this.tick(co.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},lo.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Us(e);let{type:t=zs,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||zs;s!==zs&&typeof o[0]!=`number`&&(this.mixKeyframes=wa(Gs,ms(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=vs(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ga(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Ms&&(b.value=Vs(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Oa(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Oa(e)}get time(){return Oa(this.currentTime)}set time(e){e=Da(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return js(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(co.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Oa(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=hs,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(co.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,lo.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function qs(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Js=e=>e*180/Math.PI,Ys=e=>Zs(Js(Math.atan2(e[1],e[0]))),Xs={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ys,rotateZ:Ys,skewX:e=>Js(Math.atan(e[1])),skewY:e=>Js(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Zs=e=>(e%=360,e<0&&(e+=360),e),Qs=Ys,$s=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ec=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),tc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$s,scaleY:ec,scale:e=>($s(e)+ec(e))/2,rotateX:e=>Zs(Js(Math.atan2(e[6],e[5]))),rotateY:e=>Zs(Js(Math.atan2(-e[2],e[0]))),rotateZ:Qs,rotate:Qs,skewX:e=>Js(Math.atan(e[4])),skewY:e=>Js(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function nc(e){return+!!e.includes(`scale`)}function rc(e,t){if(!e||e===`none`)return nc(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=tc,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Xs,i=t}if(!i)return nc(t);let a=r[t],o=i[1].split(`,`).map(ac);return typeof a==`function`?a(o):o[a]}var ic=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return rc(n,t)};function ac(e){return parseFloat(e.trim())}var oc=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],sc=new Set(oc),cc=e=>e===z||e===V,lc=new Set([`x`,`y`,`z`]),uc=oc.filter(e=>!lc.has(e));function dc(e){let t=[];return uc.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var fc={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>rc(t,`x`),y:(e,{transform:t})=>rc(t,`y`)};fc.translateX=fc.x,fc.translateY=fc.y;var pc=new Set,mc=!1,hc=!1,gc=!1;function _c(){if(hc){let e=Array.from(pc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=dc(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}hc=!1,mc=!1,pc.forEach(e=>e.complete(gc)),pc.clear()}function vc(){pc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hc=!0)})}function yc(){gc=!0,vc(),_c(),gc=!1}var bc=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(pc.add(this),mc||(mc=!0,L.read(vc),L.resolveKeyframes(_c))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}qs(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),pc.delete(this)}cancel(){this.state===`scheduled`&&(pc.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},xc=e=>e.startsWith(`--`);function Sc(e,t,n){xc(t)?e.style.setProperty(t,n):e.style[t]=n}var Cc={};function wc(e,t){let n=xa(e);return()=>Cc[t]??n()}var Tc=wc(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Ec=wc(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Dc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Oc={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Dc([0,.65,.55,1]),circOut:Dc([.55,0,1,.45]),backIn:Dc([.31,.01,.66,-.59]),backOut:Dc([.33,1.53,.69,.99])};function kc(e,t){if(e)return typeof e==`function`?Ec()?gs(e,t):`ease-out`:Ja(e)?Dc(e):Array.isArray(e)?e.map(e=>kc(e,t)||Oc.easeOut):Oc[e]}function Ac(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=kc(s,i);Array.isArray(d)&&(u.easing=d),$a.value&&lo.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return $a.value&&p.finished.finally(()=>{lo.waapi--}),p}function jc(e){return typeof e==`function`&&`applyToOptions`in e}function Mc({type:e,...t}){return jc(e)&&Ec()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Nc=class extends Ws{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Mc(e);this.animation=Ac(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Vs(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Sc(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Oa(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Oa(e)}get time(){return Oa(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Da(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Tc()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Sa):r(this)}},Pc={anticipate:Ba,backInOut:za,circInOut:Ua};function Fc(e){return e in Pc}function Ic(e){typeof e.ease==`string`&&Fc(e.ease)&&(e.ease=Pc[e.ease])}var Lc=10,W=class extends Nc{constructor(e){Ic(e),Us(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Ks({...a,autoplay:!1}),s=Math.max(Lc,co.now()-this.startTime),c=ga(0,Lc,s-Lc),l=o.sample(s).value,{name:u}=this.options;i&&u&&Sc(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Rc=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Zo.test(e)||e===`0`)&&!e.startsWith(`url(`));function zc(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Bc(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Rc(i,t),s=Rc(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:zc(e)||(n===`spring`||jc(n))&&r}function Vc(e){e.duration=0,e.type=`keyframes`}var Hc=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Uc=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Wc(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Uc.test(e[t]))return!0;return!1}var Gc=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Kc=xa(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function qc(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Kc()&&n&&(Hc.has(n)||Gc.has(n)&&Wc(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Jc=40,Yc=class extends Ws{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=co.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||bc)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=co.now();let u=!0;Bc(e,i,a,o)||(u=!1,(_a.instantAnimations||!s)&&l?.(Vs(e,n,t)),e[0]=e[e.length-1],Vc(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Jc?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&qc(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new W({...d,element:p})}catch{m=new Ks(d)}else m=new Ks(d);m.finished.then(()=>{this.notifyFinished()}).catch(Sa),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),yc()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Xc(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Zc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Qc(e){let t=Zc.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function $c(e,t,n=1){`${e}`;let[r,i]=Qc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return va(e)?parseFloat(e):e}return mo(i)?$c(i,t,n+1):i}var el={type:`spring`,stiffness:500,damping:25,restSpeed:10},tl=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),nl={type:`keyframes`,duration:.8},rl={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},il=(e,{keyframes:t})=>t.length>2?nl:sc.has(e)?e.startsWith(`scale`)?tl(t[1]):el:rl;function al(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function ol(e,t){let n=e?.[t]??e?.default??e;return n===e?n:al(n,e)}var sl=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function cl(e){for(let t in e)if(!sl.has(t))return!0;return!1}var ll=(e,t,n,r={},i,a)=>o=>{let s=ol(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Da(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};cl(s)||Object.assign(u,il(e,u)),u.duration&&=Da(u.duration),u.repeatDelay&&=Da(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Vc(u),u.delay===0&&(d=!0)),(_a.instantAnimations||_a.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Vc(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Vs(u.keyframes,s);if(e!==void 0){L.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Ks(u):new Yc(u)};function ul(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function dl(e,t,n,r){if(typeof t==`function`){let[i,a]=ul(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ul(r);t=t(n===void 0?e.custom:n,i,a)}return t}function fl(e,t,n){let r=e.getProps();return dl(r,t,n===void 0?r.custom:n,e)}var pl=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...oc]),ml=30,hl=e=>!isNaN(parseFloat(e)),gl={current:void 0},_l=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=co.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=co.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=hl(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ea);let n=this.events[e].add(t);return e===`change`?()=>{n(),L.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return gl.current&&gl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=co.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ml)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,ml);return ka(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function vl(e,t){return new _l(e,t)}var yl=e=>Array.isArray(e);function bl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,vl(n))}function xl(e){return yl(e)?e[e.length-1]||0:e}function Sl(e,t){let{transitionEnd:n={},transition:r={},...i}=fl(e,t)||{};i={...i,...n};for(let t in i)bl(e,t,xl(i[t]))}var G=e=>!!(e&&e.getVelocity);function Cl(e){return!!(G(e)&&e.add)}function wl(e,t){let n=e.getValue(`willChange`);if(Cl(n))return n.add(t);if(!n&&_a.WillChange){let n=new _a.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Tl(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var El=`data-`+Tl(`framerAppearId`);function Dl(e){return e.props[El]}function Ol({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function kl(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?al(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Ol(d,t))continue;let o={delay:n,...ol(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){L.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Dl(e);if(n){let e=window.MotionHandoffAnimation(n,t,L);e!==null&&(o.startTime=e,f=!0)}}wl(e,t);let p=l??e.shouldReduceMotion;r.start(ll(t,r,i,p&&pl.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>L.update(()=>{o&&Sl(e,o)});u.length?Promise.all(u).then(t):t()}return u}function Al(e,t,n={}){let r=fl(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(kl(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return jl(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function jl(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Al(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Xc(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Ml(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Al(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Al(e,t,n);else{let i=typeof t==`function`?fl(e,t,n.custom):t;r=Promise.all(kl(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Nl={test:e=>e===`auto`,parse:e=>e},Pl=e=>t=>t.test(e),Fl=[z,V,Ao,ko,Mo,jo,Nl],Il=e=>Fl.find(Pl(e));function Ll(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||ba(e)}var Rl=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function K(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(vo)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Rl.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var q=/\b([a-z-]*)\(.*?\)/gu,J={...Zo,getAnimatableNone:e=>{let t=e.match(q);return t?t.map(K).join(` `):e}},Y={...Zo,getAnimatableNone:e=>{let t=Zo.parse(e);return Zo.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},X={...z,transform:Math.round},zl={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,inset:V,insetBlock:V,insetBlockStart:V,insetBlockEnd:V,insetInline:V,insetInlineStart:V,insetInlineEnd:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,paddingBlock:V,paddingBlockStart:V,paddingBlockEnd:V,paddingInline:V,paddingInlineStart:V,paddingInlineEnd:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,marginBlock:V,marginBlockStart:V,marginBlockEnd:V,marginInline:V,marginInlineStart:V,marginInlineEnd:V,fontSize:V,backgroundPositionX:V,backgroundPositionY:V,rotate:ko,rotateX:ko,rotateY:ko,rotateZ:ko,scale:go,scaleX:go,scaleY:go,scaleZ:go,skew:ko,skewX:ko,skewY:ko,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:B,originX:No,originY:No,originZ:V,zIndex:X,fillOpacity:B,strokeOpacity:B,numOctaves:X},Bl={...zl,color:Fo,backgroundColor:Fo,outlineColor:Fo,fill:Fo,stroke:Fo,borderColor:Fo,borderTopColor:Fo,borderRightColor:Fo,borderBottomColor:Fo,borderLeftColor:Fo,filter:J,WebkitFilter:J,mask:Y,WebkitMask:Y},Vl=e=>Bl[e],Hl=new Set([J,Y]);function Ul(e,t){let n=Vl(e);return Hl.has(n)||(n=Zo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Wl=new Set([`auto`,`none`,`0`]);function Gl(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Wl.has(t)&&Wo(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ul(n,i)}var Kl=class extends bc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),mo(r))){let i=$c(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!pl.has(n)||e.length!==2)return;let[r,i]=e,a=Il(r),o=Il(i);if(R(r)!==R(i)&&fc[n]){this.needsMeasurement=!0;return}if(a!==o)if(cc(a)&&cc(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else fc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Ll(e[t]))&&n.push(t);n.length&&Gl(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=fc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ql(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Jl=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Yl(e){return ya(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Xl,cancel:Zl}=no(queueMicrotask,!1),Ql={x:!1,y:!1};function $l(){return Ql.x||Ql.y}function eu(e){return e===`x`||e===`y`?Ql[e]?null:(Ql[e]=!0,()=>{Ql[e]=!1}):Ql.x||Ql.y?null:(Ql.x=Ql.y=!0,()=>{Ql.x=Ql.y=!1})}function tu(e,t){let n=ql(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function nu(e){return!(e.pointerType===`touch`||$l())}function ru(e,t,n={}){let[r,i,a]=tu(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!nu(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var iu=(e,t)=>t?e===t?!0:iu(e,t.parentElement):!1,au=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,ou=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function su(e){return ou.has(e.tagName)||e.isContentEditable===!0}var cu=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function lu(e){return cu.has(e.tagName)||e.isContentEditable===!0}var uu=new WeakSet;function du(e){return t=>{t.key===`Enter`&&e(t)}}function fu(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var pu=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=du(()=>{if(uu.has(n))return;fu(n,`down`);let e=du(()=>{fu(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>fu(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function mu(e){return au(e)&&!$l()}var hu=new WeakSet;function gu(e,t,n={}){let[r,i,a]=tu(e,n),o=e=>{let r=e.currentTarget;if(!mu(e)||hu.has(e))return;uu.add(r),n.stopPropagation&&hu.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),uu.has(r)&&uu.delete(r),mu(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||iu(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Yl(e)&&(e.addEventListener(`focus`,e=>pu(e,i)),!su(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function _u(e){return ya(e)&&`ownerSVGElement`in e}var vu=new WeakMap,yu,bu=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:_u(r)&&`getBBox`in r?r.getBBox()[t]:r[n],xu=bu(`inline`,`width`,`offsetWidth`),Su=bu(`block`,`height`,`offsetHeight`);function Cu({target:e,borderBoxSize:t}){vu.get(e)?.forEach(n=>{n(e,{get width(){return xu(e,t)},get height(){return Su(e,t)}})})}function wu(e){e.forEach(Cu)}function Tu(){typeof ResizeObserver>`u`||(yu=new ResizeObserver(wu))}function Eu(e,t){yu||Tu();let n=ql(e);return n.forEach(e=>{let n=vu.get(e);n||(n=new Set,vu.set(e,n)),n.add(t),yu?.observe(e)}),()=>{n.forEach(e=>{let n=vu.get(e);n?.delete(t),n?.size||yu?.unobserve(e)})}}var Du=new Set,Ou;function ku(){Ou=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Du.forEach(t=>t(e))},window.addEventListener(`resize`,Ou)}function Au(e){return Du.add(e),Ou||ku(),()=>{Du.delete(e),!Du.size&&typeof Ou==`function`&&(window.removeEventListener(`resize`,Ou),Ou=void 0)}}function ju(e,t){return typeof e==`function`?Au(e):Eu(e,t)}function Mu(e){return _u(e)&&e.tagName===`svg`}var Nu=[...Fl,Fo,Zo],Pu=e=>Nu.find(Pl(e)),Fu=()=>({translate:0,scale:1,origin:0,originPoint:0}),Iu=()=>({x:Fu(),y:Fu()}),Lu=()=>({min:0,max:0}),Ru=()=>({x:Lu(),y:Lu()}),zu=new WeakMap;function Bu(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Vu(e){return typeof e==`string`||Array.isArray(e)}var Hu=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Uu=[`initial`,...Hu];function Wu(e){return Bu(e.animate)||Uu.some(t=>Vu(e[t]))}function Z(e){return!!(Wu(e)||e.variants)}function Gu(e,t,n){for(let r in t){let i=t[r],a=n[r];if(G(i))e.addValue(r,i);else if(G(a))e.addValue(r,vl(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,vl(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ku={current:null},qu={current:!1},Ju=typeof window<`u`;function Yu(){if(qu.current=!0,Ju)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ku.current=e.matches;e.addEventListener(`change`,t),t()}else Ku.current=!1}var Xu=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Zu={};function Qu(e){Zu=e}function $u(){return Zu}var ed=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=bc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=co.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,L.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Wu(t),this.isVariantNode=Z(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&G(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,zu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(qu.current||Yu(),this.shouldReduceMotion=Ku.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),ro(this.notifyUpdate),ro(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Hc.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Nc({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:Da(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=sc.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&L.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Zu){let t=Zu[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ru()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Xu.length;t++){let n=Xu[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Gu(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=vl(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(va(n)||ba(n))?n=parseFloat(n):!Pu(n)&&Zo.test(t)&&(n=Ul(e,t)),this.setBaseTarget(e,G(n)?n.get():n)),G(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=dl(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!G(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ea),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Xl.render(this.render)}},td=class extends ed{constructor(){super(...arguments),this.KeyframeResolver=Kl}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;G(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},nd=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function rd({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function id({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ad(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function od(e){return e===void 0||e===1}function sd({scale:e,scaleX:t,scaleY:n}){return!od(e)||!od(t)||!od(n)}function cd(e){return sd(e)||ld(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ld(e){return ud(e.x)||ud(e.y)}function ud(e){return e&&e!==`0%`}function dd(e,t,n){return n+t*(e-n)}function fd(e,t,n,r,i){return i!==void 0&&(e=dd(e,i,r)),dd(e,n,r)+t}function pd(e,t=0,n=1,r,i){e.min=fd(e.min,t,n,r,i),e.max=fd(e.max,t,n,r,i)}function md(e,{x:t,y:n}){pd(e.x,t.translate,t.scale,t.originPoint),pd(e.y,n.translate,n.scale,n.originPoint)}var hd=.999999999999,gd=1.0000000000001;function _d(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(vd(e.x,-a.scroll.offset.x),vd(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,md(e,o)),r&&cd(a.latestValues)&&bd(e,a.latestValues,a.layout?.layoutBox))}t.x<gd&&t.x>hd&&(t.x=1),t.y<gd&&t.y>hd&&(t.y=1)}function vd(e,t){e.min+=t,e.max+=t}function yd(e,t,n,r,i=.5){pd(e,t,n,H(e.min,e.max,i),r)}function Q(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function bd(e,t,n){let r=n??e;yd(e.x,Q(t.x,r.x),t.scaleX,t.scale,t.originX),yd(e.y,Q(t.y,r.y),t.scaleY,t.scale,t.originY)}function xd(e,t){return rd(ad(e.getBoundingClientRect(),t))}function Sd(e,t,n){let r=xd(e,n),{scroll:i}=t;return i&&(vd(r.x,i.offset.x),vd(r.y,i.offset.y)),r}var Cd={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},wd=oc.length;function Td(e,t,n){let r=``,i=!0;for(let a=0;a<wd;a++){let o=oc[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Jl(s,zl[o]);if(!c){i=!1;let t=Cd[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Ed(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(sc.has(e)){o=!0;continue}else if(fo(e)){i[e]=n;continue}else{let t=Jl(n,zl[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Td(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Dd(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Od(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var kd={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(V.test(e))e=parseFloat(e);else return e;return`${Od(e,t.target.x)}% ${Od(e,t.target.y)}%`}},Ad={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Zo.parse(e);if(i.length>5)return r;let a=Zo.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},jd={borderRadius:{...kd,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:kd,borderTopRightRadius:kd,borderBottomLeftRadius:kd,borderBottomRightRadius:kd,boxShadow:Ad};function Md(e,{layout:t,layoutId:n}){return sc.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!jd[e]||e===`opacity`)}function $(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(G(r[t])||i&&G(i[t])||Md(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Nd(e){return window.getComputedStyle(e)}var Pd=class extends td{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Dd}readValueFromInstance(e,t){if(sc.has(t))return this.projection?.isProjecting?nc(t):ic(e,t);{let n=Nd(e),r=(fo(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return xd(e,t)}build(e,t,n){Ed(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return $(e,t,n)}},Fd={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Id={offset:`strokeDashoffset`,array:`strokeDasharray`};function Ld(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Fd:Id;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Rd=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function zd(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Ed(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Rd)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Ld(d,i,a,o,!1)}var Bd=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Vd=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Hd(e,t,n,r){Dd(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Bd.has(n)?n:Tl(n),t.attrs[n])}function Ud(e,t,n){let r=$(e,t,n);for(let n in e)if(G(e[n])||G(t[n])){let t=oc.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Wd=class extends td{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Ru}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(sc.has(t)){let e=Vl(t);return e&&e.default||0}return t=Bd.has(t)?t:Tl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ud(e,t,n)}build(e,t,n){zd(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Hd(e,t,n,r)}mount(e){this.isSVGTag=Vd(e.tagName),super.mount(e)}},Gd=Uu.length;function Kd(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Kd(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Gd;n++){let r=Uu[n],i=e.props[r];(Vu(i)||i===!1)&&(t[r]=i)}return t}function qd(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Jd=[...Hu].reverse(),Yd=Hu.length;function Xd(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Ml(e,t,n)))}function Zd(e){let t=Xd(e),n=ef(),r=!0,i=!1,a=t=>(n,r)=>{let i=fl(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Kd(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Yd;t++){let p=Jd[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Vu(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Bu(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Qd(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=yl(t)&&yl(n)?!qd(t,n):t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=fl(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Xc(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=fl(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=ef(),i=!0}}}function Qd(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!qd(t,e):!1}function $d(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ef(){return{animate:$d(!0),whileInView:$d(),whileHover:$d(),whileTap:$d(),whileDrag:$d(),whileFocus:$d(),exit:$d()}}function tf(e,t){e.min=t.min,e.max=t.max}function nf(e,t){tf(e.x,t.x),tf(e.y,t.y)}function rf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var af=1e-4,of=1-af,sf=1+af,cf=.01,lf=0-cf,uf=0+cf;function df(e){return e.max-e.min}function ff(e,t,n){return Math.abs(e-t)<=n}function pf(e,t,n,r=.5){e.origin=r,e.originPoint=H(t.min,t.max,e.origin),e.scale=df(n)/df(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=of&&e.scale<=sf||isNaN(e.scale))&&(e.scale=1),(e.translate>=lf&&e.translate<=uf||isNaN(e.translate))&&(e.translate=0)}function mf(e,t,n,r){pf(e.x,t.x,n.x,r?r.originX:void 0),pf(e.y,t.y,n.y,r?r.originY:void 0)}function hf(e,t,n,r=0){e.min=(r?H(n.min,n.max,r):n.min)+t.min,e.max=e.min+df(t)}function gf(e,t,n,r){hf(e.x,t.x,n.x,r?.x),hf(e.y,t.y,n.y,r?.y)}function _f(e,t,n,r=0){let i=r?H(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+df(t)}function vf(e,t,n,r){_f(e.x,t.x,n.x,r?.x),_f(e.y,t.y,n.y,r?.y)}function yf(e,t,n,r,i){return e-=t,e=dd(e,1/n,r),i!==void 0&&(e=dd(e,1/i,r)),e}function bf(e,t=0,n=1,r=.5,i,a=e,o=e){if(Ao.test(t)&&(t=parseFloat(t),t=H(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=H(a.min,a.max,r);e===a&&(s-=t),e.min=yf(e.min,t,n,s,i),e.max=yf(e.max,t,n,s,i)}function xf(e,t,[n,r,i],a,o){bf(e,t[n],t[r],t[i],t.scale,a,o)}var Sf=[`x`,`scaleX`,`originX`],Cf=[`y`,`scaleY`,`originY`];function wf(e,t,n,r){xf(e.x,t,Sf,n?n.x:void 0,r?r.x:void 0),xf(e.y,t,Cf,n?n.y:void 0,r?r.y:void 0)}function Tf(e){return e.translate===0&&e.scale===1}function Ef(e){return Tf(e.x)&&Tf(e.y)}function Df(e,t){return e.min===t.min&&e.max===t.max}function Of(e,t){return Df(e.x,t.x)&&Df(e.y,t.y)}function kf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Af(e,t){return kf(e.x,t.x)&&kf(e.y,t.y)}function jf(e){return df(e.x)/df(e.y)}function Mf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Nf(e){return[e(`x`),e(`y`)]}function Pf(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Ff=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],If=Ff.length,Lf=e=>typeof e==`string`?parseFloat(e):e,Rf=e=>typeof e==`number`||V.test(e);function zf(e,t,n,r,i,a){i?(e.opacity=H(0,n.opacity??1,Vf(r)),e.opacityExit=H(t.opacity??1,0,Hf(r))):a&&(e.opacity=H(t.opacity??1,n.opacity??1,r));for(let i=0;i<If;i++){let a=Ff[i],o=Bf(t,a),s=Bf(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Rf(o)===Rf(s)?(e[a]=Math.max(H(Lf(o),Lf(s),r),0),(Ao.test(s)||Ao.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,r))}function Bf(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Vf=Uf(0,.5,Ha),Hf=Uf(.5,.95,Sa);function Uf(e,t,n){return r=>r<e?0:r>t?1:n(Ta(e,t,r))}function Wf(e,t,n){let r=G(e)?e:vl(e);return r.start(ll(``,r,t,n)),r.animation}function Gf(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Kf=(e,t)=>e.depth-t.depth,qf=class{constructor(){this.children=[],this.isDirty=!1}add(e){ma(this.children,e),this.isDirty=!0}remove(e){ha(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Kf),this.isDirty=!1,this.children.forEach(e)}};function Jf(e,t){let n=co.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(ro(r),e(a-t))};return L.setup(r,!0),()=>ro(r)}function Yf(e){return G(e)?e.get():e}var Xf=class{constructor(){this.members=[]}add(e){ma(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ha(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ha(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Zf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Qf={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},$f=[``,`X`,`Y`,`Z`],ep=1e3,tp=0;function np(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function rp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Dl(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,L,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&rp(r)}function ip({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=tp++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$a.value&&(Qf.nodes=Qf.calculatedTargetDeltas=Qf.calculatedProjections=0),this.nodes.forEach(sp),this.nodes.forEach(gp),this.nodes.forEach(_p),this.nodes.forEach(cp),$a.addProjectionMetrics&&$a.addProjectionMetrics(Qf)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new qf)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ea),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=_u(t)&&!Mu(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;L.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Jf(i,250),Zf.hasAnimatedSinceResize&&(Zf.hasAnimatedSinceResize=!1,this.nodes.forEach(hp)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||wp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Af(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...ol(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||hp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ro(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vp),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(dp),this.nodes.forEach(up);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(fp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(pp),this.nodes.forEach(mp),this.nodes.forEach(ap),this.nodes.forEach(op)):this.nodes.forEach(fp),this.clearAllSnapshots();let e=co.now();io.delta=ga(0,1e3/60,e-io.timestamp),io.timestamp=e,io.isProcessing=!0,ao.update.process(io),ao.preRender.process(io),ao.render.process(io),io.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lp),this.sharedNodes.forEach(yp)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,L.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){L.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!df(this.snapshot.measuredBox.x)&&!df(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Ru(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ef(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||cd(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Op(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Ru();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ap))){let{scroll:e}=this.root;e&&(vd(t.x,e.offset.x),vd(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Ru();if(nf(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&nf(t,e),vd(t.x,i.offset.x),vd(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Ru();nf(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(vd(r.x,-n.scroll.offset.x),vd(r.y,-n.scroll.offset.y)),cd(n.latestValues)&&bd(r,n.latestValues,n.layout?.layoutBox)}return cd(this.latestValues)&&bd(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Ru();nf(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!cd(n.latestValues))continue;let r;n.instance&&(sd(n.latestValues)&&n.updateSnapshot(),r=Ru(),nf(r,n.measurePageBox())),wf(t,n.latestValues,n.snapshot?.layoutBox,r)}return cd(this.latestValues)&&wf(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==io.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=io.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ru(),this.targetWithTransforms=Ru()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gf(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):nf(this.target,this.layout.layoutBox),md(this.target,this.targetDelta)):nf(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),$a.value&&Qf.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||sd(this.parent.latestValues)||ld(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ru(),this.relativeTargetOrigin=Ru(),vf(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),nf(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===io.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;nf(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;_d(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Ru());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rf(this.prevProjectionDelta.x,this.projectionDelta.x),rf(this.prevProjectionDelta.y,this.projectionDelta.y)),mf(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Mf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),$a.value&&Qf.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Iu(),this.projectionDelta=Iu(),this.projectionDeltaWithTransform=Iu()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Iu();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Ru(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Cp));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;bp(a.x,e.x,n),bp(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vf(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Sp(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Of(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Ru(),nf(d,this.relativeTarget)),s&&(this.animationValues=i,zf(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(ro(this.pendingAnimation),void 0),this.pendingAnimation=L.update(()=>{Zf.hasAnimatedSinceResize=!0,lo.layout++,this.motionValue||=vl(0),this.motionValue.jump(0,!1),this.currentAnimation=Wf(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{lo.layout--},onComplete:()=>{lo.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ep),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&kp(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Ru();let t=df(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=df(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}nf(t,n),bd(t,i),mf(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Xf),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&np(`z`,e,r,this.animationValues);for(let t=0;t<$f.length;t++)np(`rotate${$f[t]}`,e,r,this.animationValues),np(`skew${$f[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Yf(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Yf(t?.pointerEvents)||``),this.hasProjected&&!cd(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Pf(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in jd){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=jd[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Yf(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(up),this.root.sharedNodes.clear()}}}function ap(e){e.updateLayout()}function op(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Nf(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=df(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;tf(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else kp(i,t.layoutBox,n)&&Nf(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=df(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Iu();mf(o,n,t.layoutBox);let s=Iu();a?mf(s,e.applyTransform(r,!0),t.measuredBox):mf(s,n,t.layoutBox);let c=!Ef(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Ru();vf(s,t.layoutBox,i.layoutBox,o);let c=Ru();vf(c,n,a.layoutBox,o),Af(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function sp(e){$a.value&&Qf.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function cp(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function lp(e){e.clearSnapshot()}function up(e){e.clearMeasurements()}function dp(e){e.isLayoutDirty=!0,e.updateLayout()}function fp(e){e.isLayoutDirty=!1}function pp(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function mp(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function hp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function gp(e){e.resolveTargetDelta()}function _p(e){e.calcProjection()}function vp(e){e.resetSkewAndRotation()}function yp(e){e.removeLeadSnapshot()}function bp(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function xp(e,t,n,r){e.min=H(t.min,n.min,r),e.max=H(t.max,n.max,r)}function Sp(e,t,n,r){xp(e.x,t.x,n.x,r),xp(e.y,t.y,n.y,r)}function Cp(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var wp={duration:.45,ease:[.4,0,.1,1]},Tp=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ep=Tp(`applewebkit/`)&&!Tp(`chrome/`)?Math.round:Sa;function Dp(e){e.min=Ep(e.min),e.max=Ep(e.max)}function Op(e){Dp(e.x),Dp(e.y)}function kp(e,t,n){return e===`position`||e===`preserve-aspect`&&!ff(jf(t),jf(n),.2)}function Ap(e){return e!==e.root&&e.scroll?.wasRoot}var jp=ip({attachResizeListener:(e,t)=>Gf(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Mp={current:void 0},Np=ip({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Mp.current){let e=new jp({});e.mount(window),e.setOptions({layoutScroll:!0}),Mp.current=e}return Mp.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Pp=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Fp(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ip(...e){return t=>{let n=!1,r=e.map(e=>{let r=Fp(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Fp(e[t],null)}}}}function Lp(...e){return w.useCallback(Ip(...e),e)}var Rp=class extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Yl(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Yl(e)&&e.offsetWidth||0,r=Yl(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function zp({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,w.useId)(),s=(0,w.useRef)(null),c=(0,w.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,w.useContext)(Pp),u=Lp(s,e.props?.ref??e?.ref);return(0,w.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,I.jsx)(Rp,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:w.cloneElement(e,{ref:u})})}var Bp=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=da(Vp),d=(0,w.useId)(),f=!0,p=(0,w.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,w.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,I.jsx)(zp,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,I.jsx)(pa.Provider,{value:p,children:e})};function Vp(){return new Map}function Hp(e=!0){let t=(0,w.useContext)(pa);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,w.useId)();(0,w.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,w.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Up=e=>e.key||``;function Wp(e){let t=[];return w.Children.forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t}var Gp=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Hp(o),f=(0,w.useMemo)(()=>Wp(e),[e]),p=o&&!u?[]:f.map(Up),m=(0,w.useRef)(!0),h=(0,w.useRef)(f),g=da(()=>new Map),_=(0,w.useRef)(new Set),[v,y]=(0,w.useState)(f),[b,x]=(0,w.useState)(f);fa(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Up(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Up(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Wp(e)),y(f),null}let{forceRender:C}=(0,w.useContext)(ua);return(0,I.jsx)(I.Fragment,{children:b.map(e=>{let v=Up(e),y=o&&!u?!1:f===b||p.includes(v);return(0,I.jsx)(Bp,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Kp=(0,w.createContext)({strict:!1}),qp={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Jp=!1;function Yp(){if(Jp)return;let e={};for(let t in qp)e[t]={isEnabled:e=>qp[t].some(t=>!!e[t])};Qu(e),Jp=!0}function Xp(){return Yp(),$u()}function Zp(e){let t=Xp();for(let n in e)t[n]={...t[n],...e[n]};Qu(t)}var Qp=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function $p(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Qp.has(e)}var em=c({default:()=>tm}),tm,nm=o((()=>{throw tm={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),rm=e=>!$p(e);function im(e){typeof e==`function`&&(rm=t=>t.startsWith(`on`)?!$p(t):e(t))}try{im((nm(),d(em)).default)}catch{}function am(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||G(e[i])||(rm(i)||n===!0&&$p(i)||!t&&!$p(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var om=(0,w.createContext)({});function sm(e,t){if(Wu(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Vu(t)?t:void 0,animate:Vu(n)?n:void 0}}return e.inherit===!1?{}:t}function cm(e){let{initial:t,animate:n}=sm(e,(0,w.useContext)(om));return(0,w.useMemo)(()=>({initial:t,animate:n}),[lm(t),lm(n)])}function lm(e){return Array.isArray(e)?e.join(` `):e}var um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dm(e,t,n){for(let r in t)!G(t[r])&&!Md(r,n)&&(e[r]=t[r])}function fm({transformTemplate:e},t){return(0,w.useMemo)(()=>{let n=um();return Ed(n,t,e),Object.assign({},n.vars,n.style)},[t])}function pm(e,t){let n=e.style||{},r={};return dm(r,n,e),Object.assign(r,fm(e,t)),r}function mm(e,t){let n={},r=pm(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var hm=()=>({...um(),attrs:{}});function gm(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=hm();return zd(n,t,Vd(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};dm(t,e.style,e),i.style={...t,...i.style}}return i}var _m=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function vm(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(_m.indexOf(e)>-1||/[A-Z]/u.test(e))}function ym(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??vm(e)?gm:mm)(t,r,i,e),c=am(t,typeof e==`string`,a),l=e===w.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,w.useMemo)(()=>G(u)?u.get():u,[u]);return(0,w.createElement)(e,{...l,children:d})}function bm({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:xm(n,r,i,e),renderState:t()}}function xm(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Yf(a[e]);let{initial:o,animate:s}=e,c=Wu(e),l=Z(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Bu(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=dl(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Sm=e=>(t,n)=>{let r=(0,w.useContext)(om),i=(0,w.useContext)(pa),a=()=>bm(e,t,r,i);return n?a():da(a)},Cm=Sm({scrapeMotionValuesFromProps:$,createRenderState:um}),wm=Sm({scrapeMotionValuesFromProps:Ud,createRenderState:hm}),Tm=Symbol.for(`motionComponentSymbol`);function Em(e,t,n){let r=(0,w.useRef)(n);(0,w.useInsertionEffect)(()=>{r.current=n});let i=(0,w.useRef)(null);return(0,w.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Dm=(0,w.createContext)({});function Om(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function km(e,t,n,r,i,a){let{visualElement:o}=(0,w.useContext)(om),s=(0,w.useContext)(Kp),c=(0,w.useContext)(pa),l=(0,w.useContext)(Pp),u=l.reducedMotion,d=l.skipAnimations,f=(0,w.useRef)(null),p=(0,w.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,w.useContext)(Dm);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Am(f.current,n,i,h);let g=(0,w.useRef)(!1);(0,w.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[El],v=(0,w.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return fa(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,w.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Am(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:jm(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Om(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function jm(e){if(e)return e.options.allowProjection===!1?jm(e.parent):e.projection}function Mm(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Zp(r);let a=n?n===`svg`:vm(e),o=a?wm:Cm;function s(n,s){let c,l={...(0,w.useContext)(Pp),...n,layoutId:Nm(n)},{isStatic:u}=l,d=cm(n),f=o(n,u);if(!u&&typeof window<`u`){Pm(l,r);let t=Fm(l);c=t.MeasureLayout,d.visualElement=km(e,f,l,i,t.ProjectionNode,a)}return(0,I.jsxs)(om.Provider,{value:d,children:[c&&d.visualElement?(0,I.jsx)(c,{visualElement:d.visualElement,...l}):null,ym(e,n,Em(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,w.forwardRef)(s);return c[Tm]=e,c}function Nm({layoutId:e}){let t=(0,w.useContext)(ua).id;return t&&e!==void 0?t+`-`+e:e}function Pm(e,t){(0,w.useContext)(Kp).strict}function Fm(e){let{drag:t,layout:n}=Xp();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Im(e,t){if(typeof Proxy>`u`)return Mm;let n=new Map,r=(n,r)=>Mm(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Mm(a,void 0,e,t)),n.get(a))})}var Lm=(e,t)=>t.isSVG??vm(e)?new Wd(t):new Pd(t,{allowProjection:e!==w.Fragment}),Rm=class extends nd{constructor(e){super(e),e.animationState||=Zd(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Bu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},zm=0,Bm={animation:{Feature:Rm},exit:{Feature:class extends nd{constructor(){super(...arguments),this.id=zm++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=fl(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Vm(e){return{point:{x:e.pageX,y:e.pageY}}}var Hm=e=>t=>au(t)&&e(t,Vm(t));function Um(e,t,n,r){return Gf(e,t,Hm(n),r)}var Wm=({current:e})=>e?e.ownerDocument.defaultView:null,Gm=(e,t)=>Math.abs(e-t);function Km(e,t){let n=Gm(e.x,t.x),r=Gm(e.y,t.y);return Math.sqrt(n**2+r**2)}var qm=new Set([`auto`,`scroll`]),Jm=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ym(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Zm(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Km(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=io;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Ym(t,this.transformPagePoint),L.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Zm(e.type===`pointercancel`?this.lastMoveEventInfo:Ym(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!au(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Ym(Vm(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=io;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Zm(s,this.history)),this.removeListeners=wa(Um(this.contextWindow,`pointermove`,this.handlePointerMove),Um(this.contextWindow,`pointerup`,this.handlePointerUp),Um(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(qm.has(e.overflowX)||qm.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),L.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ro(this.updatePoint)}};function Ym(e,t){return t?{point:t(e.point)}:e}function Xm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zm({point:e},t){return{point:e,delta:Xm(e,$m(t)),offset:Xm(e,Qm(t)),velocity:eh(t,.1)}}function Qm(e){return e[0]}function $m(e){return e[e.length-1]}function eh(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=$m(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Da(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Da(t)*2&&(r=e[1]);let a=Oa(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function th(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?H(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?H(n,e,r.max):Math.min(e,n)),e}function nh(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function rh(e,{top:t,left:n,bottom:r,right:i}){return{x:nh(e.x,n,i),y:nh(e.y,t,r)}}function ih(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ah(e,t){return{x:ih(e.x,t.x),y:ih(e.y,t.y)}}function oh(e,t){let n=.5,r=df(e),i=df(t);return i>r?n=Ta(t.min,t.max-r,e.min):r>i&&(n=Ta(e.min,e.max-i,t.min)),ga(0,1,n)}function sh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var ch=.35;function lh(e=ch){return e===!1?e=0:e===!0&&(e=ch),{x:uh(e,`left`,`right`),y:uh(e,`top`,`bottom`)}}function uh(e,t,n){return{min:dh(e,t),max:dh(e,n)}}function dh(e,t){return typeof e==`number`?e:e[t]||0}var fh=new WeakMap,ph=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ru(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Vm(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eu(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Nf(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ao.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=df(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&L.update(()=>i(e,t),!1,!0),wl(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=_h(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&L.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Jm(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Wm(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&L.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!gh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=th(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Om(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=rh(n.layoutBox,e):this.constraints=!1,this.elastic=lh(t),r!==this.constraints&&!Om(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Nf(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=sh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Om(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Sd(n,r.root,this.visualElement.getTransformPagePoint()),a=ah(r.layout.layoutBox,i);if(t){let e=t(id(a));this.hasMutatedConstraints=!!e,e&&(a=rd(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Nf(o=>{if(!gh(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return wl(this.visualElement,e),n.start(ll(e,n,0,t,this.visualElement,!1))}stopAnimation(){Nf(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Nf(t=>{let{drag:n}=this.getProps();if(!gh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-H(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Om(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Nf(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=oh({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Nf(t=>{if(!gh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(H(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fh.set(this.visualElement,this);let e=this.visualElement.current,t=Um(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&lu(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Om(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=hh(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),L.read(r);let o=Gf(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Nf(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ch,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function mh(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function hh(e,t,n){let r=ju(e,mh(n)),i=ju(t,mh(n));return()=>{r(),i()}}function gh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function _h(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var vh=class extends nd{constructor(e){super(e),this.removeGroupControls=Sa,this.removeListeners=Sa,this.controls=new ph(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sa}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},yh=e=>(t,n)=>{e&&L.update(()=>e(t,n),!1,!0)},bh=class extends nd{constructor(){super(...arguments),this.removePointerDownListener=Sa}onPointerDown(e){this.session=new Jm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wm(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:yh(e),onStart:yh(t),onMove:yh(n),onEnd:(e,t)=>{delete this.session,r&&L.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Um(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},xh=!1,Sh=class extends w.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),xh&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Zf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),xh=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||L.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Xl.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;xh=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Ch(e){let[t,n]=Hp(),r=(0,w.useContext)(ua);return(0,I.jsx)(Sh,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(Dm),isPresent:t,safeToRemove:n})}var wh={pan:{Feature:bh},drag:{Feature:vh,ProjectionNode:Np,MeasureLayout:Ch}};function Th(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&L.postRender(()=>i(t,Vm(t)))}var Eh=class extends nd{mount(){let{current:e}=this.node;e&&(this.unmount=ru(e,(e,t)=>(Th(this.node,t,`Start`),e=>Th(this.node,e,`End`))))}unmount(){}},Dh=class extends nd{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=wa(Gf(this.node.current,`focus`,()=>this.onFocus()),Gf(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Oh(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&L.postRender(()=>i(t,Vm(t)))}var kh=class extends nd{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=gu(e,(e,t)=>(Oh(this.node,t,`Start`),(e,{success:t})=>Oh(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Ah=new WeakMap,jh=new WeakMap,Mh=e=>{let t=Ah.get(e.target);t&&t(e)},Nh=e=>{e.forEach(Mh)};function Ph({root:e,...t}){let n=e||document;jh.has(n)||jh.set(n,{});let r=jh.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Nh,{root:e,...t})),r[i]}function Fh(e,t,n){let r=Ph(t);return Ah.set(e,n),r.observe(e),()=>{Ah.delete(e),r.unobserve(e)}}var Ih={some:0,all:1},Lh=class extends nd{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Ih[r]};this.stopObserver=Fh(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Rh(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Rh({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var zh={inView:{Feature:Lh},tap:{Feature:kh},focus:{Feature:Dh},hover:{Feature:Eh}},Bh={layout:{ProjectionNode:Np,MeasureLayout:Ch}},Vh=Im({...Bm,...zh,...wh,...Bh},Lm),Hh=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Jost:wght@200;300;400;500;600&display=swap');

  :root {
    --cd-bg:        #040d07;
    --cd-bg2:       #071510;
    --cd-gold:      #c9a84c;
    --cd-gold-lt:   #e8c96a;
    --cd-gold-pale: #f5e8c0;
    --cd-gold-dim:  rgba(201,168,76,0.18);
    --cd-cream:     #fdf6e8;
    --cd-text:      #e8dfc8;
    --cd-text-dim:  rgba(232,223,200,0.5);
  }

  /* ── BACKDROP ── */
  .cd-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(2,6,3,0.65);
    backdrop-filter: blur(6px) saturate(120%);
    -webkit-backdrop-filter: blur(6px) saturate(120%);
    z-index: 2000;
    cursor: pointer;
  }

  /* ── DRAWER PANEL ── */
  .cd-panel {
    position: fixed;
    top: 0; right: 0;
    width: 420px;
    max-width: 100vw;
    height: 100%;
    background: var(--cd-bg);
    z-index: 2001;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: -20px 0 80px rgba(0,0,0,0.6), -1px 0 0 var(--cd-gold-dim);
  }

  .cd-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cd-gold), var(--cd-gold-lt), transparent);
  }

  .cd-panel::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 0% 0%, rgba(201,168,76,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 100% 100%, rgba(201,168,76,0.03) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── HEADER ── */
  .cd-header {
    padding: 28px 32px 24px;
    border-bottom: 1px solid var(--cd-gold-dim);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .cd-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 8.5px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--cd-gold);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }
  .cd-eyebrow::before {
    content: '';
    width: 16px; height: 1px;
    background: var(--cd-gold);
  }

  .cd-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 400;
    color: var(--cd-cream);
    line-height: 1;
    margin: 0;
  }
  .cd-title em { font-style: italic; color: var(--cd-gold-lt); }

  .cd-item-count {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 300;
    color: var(--cd-text-dim);
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .cd-close {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    background: transparent;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--cd-text-dim);
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-top: 4px;
  }
  .cd-close:hover {
    border-color: var(--cd-gold);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.06);
    transform: rotate(90deg);
  }
  .cd-close svg { width: 14px; height: 14px; }

  /* ── ITEMS AREA ── */
  .cd-body {
    flex: 1;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    scrollbar-width: thin;
    scrollbar-color: rgba(201,168,76,0.2) transparent;
  }
  .cd-body::-webkit-scrollbar { width: 3px; }
  .cd-body::-webkit-scrollbar-track { background: transparent; }
  .cd-body::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); border-radius: 2px; }

  /* ── EMPTY STATE ── */
  .cd-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 32px;
    text-align: center;
    gap: 16px;
    height: 100%;
  }

  .cd-empty-icon {
    width: 72px; height: 72px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    display: flex; align-items: center; justify-content: center;
    color: rgba(201,168,76,0.25);
    margin-bottom: 8px;
  }
  .cd-empty-icon svg { width: 28px; height: 28px; }

  .cd-empty-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 300;
    color: rgba(232,223,200,0.35);
    font-style: italic;
    margin: 0;
  }
  .cd-empty-sub {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: rgba(232,223,200,0.2);
    letter-spacing: 1px;
    line-height: 1.7;
    margin: 0;
    max-width: 220px;
  }

  /* ── CART ITEM ── */
  .cd-item-list { padding: 8px 0; }

  .cd-item {
    display: flex;
    gap: 16px;
    padding: 20px 32px;
    border-bottom: 1px solid rgba(201,168,76,0.06);
    align-items: center;
    transition: background 0.25s ease;
    position: relative;
  }
  .cd-item:hover { background: rgba(201,168,76,0.025); }

  .cd-item::before {
    content: '';
    position: absolute;
    left: 0; top: 20%; bottom: 20%;
    width: 2px;
    background: linear-gradient(180deg, transparent, var(--cd-gold), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .cd-item:hover::before { opacity: 1; }

  .cd-item-thumb {
    width: 56px; height: 56px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    display: flex; align-items: center; justify-content: center;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(4,13,7,0.3) 100%);
    flex-shrink: 0;
    overflow: hidden;
    font-size: 22px;
  }
  .cd-item-thumb img {
    width: 100%; height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(201,168,76,0.2));
  }

  .cd-item-info { flex: 1; min-width: 0; }

  .cd-item-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 400;
    color: var(--cd-cream);
    margin: 0 0 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cd-item-cat {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--cd-gold);
    margin: 0 0 8px;
    opacity: 0.7;
  }

  .cd-qty-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cd-qty-btn {
    width: 22px; height: 22px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    background: transparent;
    color: var(--cd-text-dim);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 13px;
    line-height: 1;
    transition: all 0.25s;
  }
  .cd-qty-btn:hover {
    border-color: var(--cd-gold);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.06);
  }
  .cd-qty-num {
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--cd-cream);
    min-width: 18px;
    text-align: center;
  }

  .cd-item-price {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--cd-gold-lt);
    white-space: nowrap;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .cd-item-price .cd-unit-price {
    font-size: 10px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    color: var(--cd-text-dim);
  }
  .cd-remove-btn {
    background: none;
    border: none;
    color: rgba(232,223,200,0.2);
    cursor: pointer;
    font-size: 10px;
    letter-spacing: 1px;
    font-family: 'Jost', sans-serif;
    padding: 0;
    transition: color 0.25s;
    text-transform: uppercase;
  }
  .cd-remove-btn:hover { color: rgba(220,60,60,0.6); }

  /* ── SUMMARY ── */
  .cd-summary {
    padding: 20px 32px;
    border-bottom: 1px solid var(--cd-gold-dim);
    position: relative; z-index: 1;
    flex-shrink: 0;
  }

  .cd-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .cd-summary-label {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--cd-text-dim);
  }
  .cd-summary-val {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    color: var(--cd-cream);
  }
  .cd-summary-divider {
    height: 1px;
    background: var(--cd-gold-dim);
    margin: 12px 0;
  }
  .cd-total-label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--cd-gold);
  }
  .cd-total-val {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--cd-gold-lt);
  }

  /* ── FOOTER ── */
  .cd-footer {
    padding: 24px 32px 32px;
    position: relative; z-index: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .cd-wa-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #040d07;
    background: linear-gradient(135deg, #25D366 0%, #1ebe5d 50%, #25D366 100%);
    background-size: 200% 200%;
    background-position: left center;
    border: none;
    padding: 16px 28px;
    cursor: pointer;
    clip-path: polygon(9px 0%, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
    transition: background-position 0.5s ease, box-shadow 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 24px rgba(37,211,102,0.2);
    position: relative;
    overflow: hidden;
  }
  .cd-wa-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
    transform: translateX(-140%);
    transition: transform 0.6s ease;
  }
  .cd-wa-btn:hover {
    background-position: right center;
    box-shadow: 0 8px 40px rgba(37,211,102,0.4);
    transform: translateY(-1px);
  }
  .cd-wa-btn:hover::before { transform: translateX(140%); }
  .cd-wa-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
  }

  .cd-wa-icon { flex-shrink: 0; }
  .cd-wa-icon svg { width: 18px; height: 18px; }

  .cd-continue-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--cd-text-dim);
    background: transparent;
    border: 1px solid rgba(201,168,76,0.12);
    padding: 12px 28px;
    cursor: pointer;
    clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
    transition: all 0.3s ease;
  }
  .cd-continue-btn:hover {
    border-color: rgba(201,168,76,0.3);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.03);
  }

  .cd-note {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    color: rgba(232,223,200,0.2);
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.6;
  }
  .cd-note strong { color: rgba(232,223,200,0.35); font-weight: 400; }

  @media (max-width: 460px) {
    .cd-panel { width: 100vw; }
    .cd-header { padding: 24px 20px 20px; }
    .cd-item { padding: 16px 20px; }
    .cd-footer { padding: 20px 20px 28px; }
    .cd-summary { padding: 16px 20px; }
  }
`,Uh={spray:`💆`,flower:`🌸`,bolt:`⚡`,leaf:`🌿`};function Wh({isOpen:e,setIsOpen:t,cart:n,setCart:r}){let i=(0,w.useRef)();(0,w.useEffect)(()=>{let e=`cd-styles`;if(!document.getElementById(e)){let t=document.createElement(`style`);t.id=e,t.textContent=Hh,document.head.appendChild(t)}},[]),(0,w.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]);let a=(e,t)=>{r(n=>n.map(n=>n.id===e?{...n,quantity:Math.max(1,(n.quantity||1)+t)}:n))},o=e=>{r(t=>t.filter(t=>t.id!==e))},s=()=>{if(n.length===0)return`Hello%2C%20I%20want%20to%20know%20more%20about%20your%20products.`;let e=`Hello! I'd like to place an order:

`;n.forEach((t,n)=>{let r=parseFloat(t.price)||0,i=t.quantity||1,a=r*i;e+=`${n+1}. ${t.name}  ×${i}  (₹${r} each = ₹${a})\n`});let t=n.reduce((e,t)=>e+(parseFloat(t.price)||0)*(t.quantity||1),0);return e+=`\nOrder Total: ₹${t.toLocaleString(`en-IN`)}`,e+=`

Please assist me with completing this order. Thank you!`,encodeURIComponent(e)},c=()=>{n.length!==0&&window.open(`https://wa.me/918956658209?text=${s()}`,`_blank`)},l=n.reduce((e,t)=>e+(t.quantity||1),0),u=n.reduce((e,t)=>e+(parseFloat(t.price)||0)*(t.quantity||1),0);return(0,I.jsx)(Gp,{children:e&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Vh.div,{className:`cd-backdrop`,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.25}},exit:{opacity:0,transition:{duration:.25}}},initial:`hidden`,animate:`visible`,exit:`exit`,onClick:()=>t(!1)}),(0,I.jsxs)(Vh.div,{ref:i,className:`cd-panel`,variants:{hidden:{x:`100%`,opacity:0},visible:{x:0,opacity:1,transition:{type:`spring`,damping:28,stiffness:300}},exit:{x:`100%`,opacity:0,transition:{duration:.3,ease:`easeInOut`}}},initial:`hidden`,animate:`visible`,exit:`exit`,children:[(0,I.jsxs)(`div`,{className:`cd-header`,children:[(0,I.jsxs)(`div`,{className:`cd-header-left`,children:[(0,I.jsx)(`div`,{className:`cd-eyebrow`,children:`Your Selection`}),(0,I.jsxs)(`h2`,{className:`cd-title`,children:[`Sacred `,(0,I.jsx)(`em`,{children:`Cart`})]}),(0,I.jsx)(`div`,{className:`cd-item-count`,children:l===0?`No items`:`${l} item${l===1?``:`s`} selected`})]}),(0,I.jsx)(`button`,{className:`cd-close`,onClick:()=>t(!1),"aria-label":`Close cart`,children:(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,children:(0,I.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`})})})]}),(0,I.jsx)(`div`,{className:`cd-body`,children:n.length===0?(0,I.jsxs)(`div`,{className:`cd-empty`,children:[(0,I.jsx)(`div`,{className:`cd-empty-icon`,children:(0,I.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1`,strokeLinecap:`round`,children:[(0,I.jsx)(`path`,{d:`M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z`}),(0,I.jsx)(`path`,{d:`M3 6h18`}),(0,I.jsx)(`path`,{d:`M16 10a4 4 0 01-8 0`})]})}),(0,I.jsx)(`h3`,{className:`cd-empty-title`,children:`Your cart awaits`}),(0,I.jsx)(`p`,{className:`cd-empty-sub`,children:`Add sacred formulations to begin your Ayurvedic journey.`})]}):(0,I.jsx)(`div`,{className:`cd-item-list`,children:(0,I.jsx)(Gp,{initial:!1,children:n.map(e=>{let t=parseFloat(e.price)||0,n=e.quantity||1,r=t*n;return(0,I.jsxs)(Vh.div,{className:`cd-item`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20,height:0,padding:0,marginBottom:0},transition:{duration:.25},children:[(0,I.jsx)(`div`,{className:`cd-item-thumb`,children:e.image?(0,I.jsx)(`img`,{src:e.image,alt:e.name}):(0,I.jsx)(`span`,{children:Uh[e.icon]||`🌿`})}),(0,I.jsxs)(`div`,{className:`cd-item-info`,children:[(0,I.jsx)(`div`,{className:`cd-item-name`,children:e.name}),e.category&&(0,I.jsx)(`div`,{className:`cd-item-cat`,children:e.category}),(0,I.jsxs)(`div`,{className:`cd-qty-row`,children:[(0,I.jsx)(`button`,{className:`cd-qty-btn`,onClick:()=>a(e.id,-1),children:`−`}),(0,I.jsx)(`span`,{className:`cd-qty-num`,children:n}),(0,I.jsx)(`button`,{className:`cd-qty-btn`,onClick:()=>a(e.id,1),children:`+`})]})]}),(0,I.jsxs)(`div`,{className:`cd-item-price`,children:[t>0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`span`,{children:[`₹`,r.toLocaleString(`en-IN`)]}),n>1&&(0,I.jsxs)(`span`,{className:`cd-unit-price`,children:[`₹`,t,` × `,n]})]}):(0,I.jsx)(`span`,{style:{fontSize:12,opacity:.4},children:`—`}),(0,I.jsx)(`button`,{className:`cd-remove-btn`,onClick:()=>o(e.id),children:`Remove`})]})]},e.id)})})})}),n.length>0&&(0,I.jsxs)(`div`,{className:`cd-summary`,children:[(0,I.jsxs)(`div`,{className:`cd-summary-row`,children:[(0,I.jsx)(`span`,{className:`cd-summary-label`,children:`Subtotal`}),(0,I.jsxs)(`span`,{className:`cd-summary-val`,children:[`₹`,u.toLocaleString(`en-IN`)]})]}),(0,I.jsxs)(`div`,{className:`cd-summary-row`,children:[(0,I.jsx)(`span`,{className:`cd-summary-label`,children:`Shipping`}),(0,I.jsx)(`span`,{className:`cd-summary-val`,style:{color:`#5fb87a`,fontSize:13},children:u>=499?`Free ✦`:`Calculated on order`})]}),(0,I.jsx)(`div`,{className:`cd-summary-divider`}),(0,I.jsxs)(`div`,{className:`cd-summary-row`,children:[(0,I.jsx)(`span`,{className:`cd-total-label`,children:`Order Total`}),(0,I.jsxs)(`span`,{className:`cd-total-val`,children:[`₹`,u.toLocaleString(`en-IN`)]})]})]}),(0,I.jsxs)(`div`,{className:`cd-footer`,children:[(0,I.jsxs)(`button`,{className:`cd-wa-btn`,onClick:c,disabled:n.length===0,children:[(0,I.jsx)(`span`,{className:`cd-wa-icon`,children:(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,children:(0,I.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`})})}),`Order via WhatsApp`]}),(0,I.jsx)(`button`,{className:`cd-continue-btn`,onClick:()=>t(!1),children:`← Continue Shopping`}),(0,I.jsxs)(`p`,{className:`cd-note`,children:[`Your order will be processed by our team via WhatsApp.`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`strong`,{children:`Free shipping on orders above ₹499.`})]})]})]})]})})}function Gh({whatsappNumber:e=`919876543210`,phoneNumber:t=null}){let[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{let e=setTimeout(()=>r(!0),300);return()=>clearTimeout(e)},[]),(0,w.useEffect)(()=>{let e=setInterval(()=>{a(!0),setTimeout(()=>a(!1),900)},4e3);return()=>clearInterval(e)},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        /* ─── Keyframes ─────────────────────────────────── */
        @keyframes fhwSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes fhwPulseRing {
          0%   { opacity: 0.72; transform: scale(1);    }
          100% { opacity: 0;    transform: scale(1.7);  }
        }
        @keyframes fhwDotGlow {
          0%,100% { box-shadow: 0 0 0 2px rgba(37,211,102,0.28); }
          50%      { box-shadow: 0 0 0 6px rgba(37,211,102,0.10); }
        }

        /* ─── Root ───────────────────────────────────────── */
        .fhw {
          position: fixed;
          bottom: 30px;
          right: 26px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
          font-family: 'DM Sans', sans-serif;
          animation: ${n?`fhwSlideUp 0.55s cubic-bezier(0.34,1.56,0.64,1) both`:`none`};
        }

        /* ─── "Need Help?" pill ──────────────────────────── */
        .fhw-bubble {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(18px) saturate(2);
          -webkit-backdrop-filter: blur(18px) saturate(2);
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow:
            0 2px 16px rgba(0,0,0,0.09),
            0 0 0 1px rgba(255,255,255,0.65) inset;
          font-size: 13.5px;
          font-weight: 600;
          color: #111;
          letter-spacing: 0.01em;
          user-select: none;
          cursor: default;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .fhw-bubble:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.13);
        }
        .fhw-bubble-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
          animation: fhwDotGlow 2.4s ease-in-out infinite;
        }

        /* ─── Button group ───────────────────────────────── */
        .fhw-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        /* ─── Row (tooltip + button) ─────────────────────── */
        .fhw-row {
          display: flex;
          align-items: center;
          position: relative;
        }

        /* ─── TOOLTIP ────────────────────────────────────── */
        .fhw-tip {
          position: absolute;
          right: calc(100% + 15px);
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;

          /* Frosted dark glass */
          background: rgba(10,10,16,0.84);
          backdrop-filter: blur(20px) saturate(1.7);
          -webkit-backdrop-filter: blur(20px) saturate(1.7);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          padding: 10px 14px 10px 10px;
          box-shadow:
            0 12px 40px rgba(0,0,0,0.4),
            0 3px 10px  rgba(0,0,0,0.28),
            0 0 0 1px   rgba(255,255,255,0.04) inset;

          transition:
            opacity   0.22s ease,
            transform 0.24s cubic-bezier(0.34,1.4,0.64,1);
        }

        /* Arrow caret pointing right */
        .fhw-tip::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: rgba(10,10,16,0.84);
          border-top:   1px solid rgba(255,255,255,0.09);
          border-right: 1px solid rgba(255,255,255,0.09);
          border-radius: 2px;
        }

        .fhw-row:hover .fhw-tip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* Tooltip inner layout */
        .fhw-tip-inner {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fhw-tip-stripe {
          width: 3px;
          border-radius: 10px;
          align-self: stretch;
          min-height: 32px;
          flex-shrink: 0;
        }
        .fhw-tip-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fhw-tip-label {
          font-size: 12.5px;
          font-weight: 600;
          color: #f0f0f0;
          letter-spacing: 0.015em;
          line-height: 1.3;
        }
        .fhw-tip-sub {
          font-size: 10.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          letter-spacing: 0.01em;
          line-height: 1.3;
        }

        /* ─── Shared FAB base ────────────────────────────── */
        .fhw-btn {
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition:
            transform  0.25s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.25s ease,
            filter     0.2s  ease;
        }
        .fhw-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: transparent;
          transition: background 0.2s;
        }
        .fhw-btn:hover::after { background: rgba(255,255,255,0.11); }
        .fhw-btn:active       { transform: scale(0.93) !important; }

        /* ─── WhatsApp FAB ───────────────────────────────── */
        .fhw-btn-wa {
          width: 60px;
          height: 60px;
          background: linear-gradient(145deg, #2BDB6E 0%, #1aad54 55%, #128C7E 100%);
          box-shadow:
            0 6px 22px rgba(37,211,102,0.38),
            0 2px 6px  rgba(0,0,0,0.14);
        }
        .fhw-btn-wa:hover {
          transform: scale(1.11);
          box-shadow:
            0 12px 36px rgba(37,211,102,0.48),
            0 4px 10px  rgba(0,0,0,0.16);
          filter: brightness(1.05);
        }

        /* Pulse ring */
        .fhw-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2.5px solid rgba(37,211,102,0.55);
          opacity: 0;
          pointer-events: none;
        }
        .fhw-pulse.active {
          animation: fhwPulseRing 0.9s ease-out forwards;
        }

        /* ─── Phone FAB ──────────────────────────────────── */
        .fhw-btn-call {
          width: 52px;
          height: 52px;
          background: linear-gradient(145deg, #4C8EDA 0%, #2563EB 60%, #1a4fc4 100%);
          box-shadow:
            0 5px 18px rgba(59,130,246,0.36),
            0 2px 6px  rgba(0,0,0,0.14);
        }
        .fhw-btn-call:hover {
          transform: scale(1.11);
          box-shadow:
            0 12px 32px rgba(59,130,246,0.46),
            0 4px 10px  rgba(0,0,0,0.16);
          filter: brightness(1.06);
        }

        /* ─── Responsive ─────────────────────────────────── */
        @media (max-width: 768px) {
          .fhw          { bottom: 22px; right: 18px; gap: 12px; }
          .fhw-btn-wa   { width: 54px;  height: 54px; }
          .fhw-btn-call { width: 46px;  height: 46px; }
          .fhw-bubble   { font-size: 13px; padding: 9px 15px; }
          .fhw-tip      { display: none; }
        }
        @media (max-width: 480px) {
          .fhw          { bottom: 16px; right: 14px; }
          .fhw-bubble   { display: none; }
          .fhw-btn-wa   { width: 50px; height: 50px; }
          .fhw-btn-call { width: 43px; height: 43px; }
        }
      `}),(0,I.jsxs)(`div`,{className:`fhw`,children:[(0,I.jsxs)(`div`,{className:`fhw-bubble`,children:[(0,I.jsx)(`span`,{className:`fhw-bubble-dot`}),`Need Help?`]}),(0,I.jsxs)(`div`,{className:`fhw-group`,children:[(0,I.jsxs)(`div`,{className:`fhw-row`,children:[(0,I.jsx)(`div`,{className:`fhw-tip`,children:(0,I.jsxs)(`div`,{className:`fhw-tip-inner`,children:[(0,I.jsx)(`span`,{className:`fhw-tip-stripe`,style:{background:`linear-gradient(180deg,#2BDB6E,#128C7E)`}}),(0,I.jsxs)(`div`,{className:`fhw-tip-text`,children:[(0,I.jsx)(`span`,{className:`fhw-tip-label`,children:`Chat on WhatsApp`}),(0,I.jsx)(`span`,{className:`fhw-tip-sub`,children:`Typically replies instantly`})]})]})}),(0,I.jsxs)(`button`,{className:`fhw-btn fhw-btn-wa`,onClick:()=>{window.open(`https://wa.me/${e}?text=Hi!%20I%20need%20help%20with%20your%20products%20and%20services.`,`_blank`)},"aria-label":`Chat with us on WhatsApp`,children:[(0,I.jsx)(`span`,{className:`fhw-pulse${i?` active`:``}`}),(0,I.jsx)(`svg`,{width:`30`,height:`30`,viewBox:`0 0 48 48`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,I.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M24 7C14.611 7 7 14.611 7 24c0 3.313.955 6.406 2.608 9.016L7.5 40.5l7.7-2.068A16.94 16.94 0 0024 41c9.389 0 17-7.611 17-17S33.389 7 24 7zm-5.193 9.25c-.39-.02-.82.01-1.218.203-.36.175-.647.454-.9.72-.56.604-1.382 1.724-1.382 3.577 0 1.877 1.182 3.7 1.612 4.29.044.062.12.178.232.348.616.946 2.278 3.336 4.785 4.88 2.904 1.786 5.085 1.987 6.155 2.094.17.017.318.026.44.026 1.22 0 2.244-.46 3.01-1.275.578-.624.893-1.367.978-2.095.022-.19.017-.36-.01-.488-.055-.261-.268-.477-.535-.592-.254-.11-2.92-1.33-3.354-1.485-.433-.154-.78-.133-1.055.156-.322.34-.665.892-.934 1.215-.138.167-.334.195-.508.125-.316-.128-1.266-.575-2.447-1.674-1.183-1.1-1.872-2.358-2.04-2.688-.12-.237-.009-.43.1-.558.227-.264.504-.48.69-.746.132-.19.172-.39.108-.608-.17-.578-.936-2.74-1.222-3.527-.168-.46-.416-.52-.707-.534z`,fill:`white`})})]})]}),t&&(0,I.jsxs)(`div`,{className:`fhw-row`,children:[(0,I.jsx)(`div`,{className:`fhw-tip`,children:(0,I.jsxs)(`div`,{className:`fhw-tip-inner`,children:[(0,I.jsx)(`span`,{className:`fhw-tip-stripe`,style:{background:`linear-gradient(180deg,#4C8EDA,#1a4fc4)`}}),(0,I.jsxs)(`div`,{className:`fhw-tip-text`,children:[(0,I.jsx)(`span`,{className:`fhw-tip-label`,children:`Call Us Now`}),(0,I.jsx)(`span`,{className:`fhw-tip-sub`,children:t})]})]})}),(0,I.jsx)(`button`,{className:`fhw-btn fhw-btn-call`,onClick:()=>{t&&(window.location.href=`tel:${t}`)},"aria-label":`Call support`,children:(0,I.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,I.jsx)(`path`,{d:`M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z`,fill:`white`})})})]})]})]})]})}function Kh(){let[e,t]=(0,w.useState)([]),[n,r]=(0,w.useState)(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ia,{cartCount:e.reduce((e,t)=>e+(t.quantity||1),0),setIsCartOpen:r}),(0,I.jsx)(Ur,{context:{addToCart:e=>{t(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:(t.quantity||1)+1}:t):[...t,{...e,quantity:1}])},cart:e,setCart:t}}),(0,I.jsx)(sa,{}),(0,I.jsx)(Wh,{isOpen:n,setIsOpen:r,cart:e,setCart:t}),(0,I.jsx)(la,{cart:e,setCart:t}),(0,I.jsx)(Gh,{whatsappNumber:`918956658209`,phoneNumber:`918956658209`})]})}var qh=[{id:1,img:`/Nithiya-Ayurveda/assets/product1-Dmzu0qAh.png`,tag:`RESPIRATORY CARE`,name:`Kufrida Cough Syrup`,subtitle:`NATURAL SUPPORT FOR CLEAR BREATHING`,desc:`Yasthimadhu, Tulsi & Vasaka — for dry cough, throat irritation, chest congestion & lung wellness.`,mrp:89,discount:12,badge:`BESTSELLER`,rating:4.4,reviewCount:97,category:`Respiratory Care`},{id:2,img:`/Nithiya-Ayurveda/assets/product2-BopmzBhB.png`,tag:`PAIN & MOBILITY`,name:`HEMP Pain Spray`,subtitle:`AYURVEDIC RAPID RELIEF FOR MUSCULAR & JOINT PAIN`,desc:`Powered by Cannabis Sativa Seed Oil — fast relief for body ache, back pain, sports injuries & post-physiotherapy recovery.`,mrp:299,discount:12,badge:`NEW`,rating:4.5,reviewCount:128,category:`Pain & Mobility`},{id:3,img:`/Nithiya-Ayurveda/assets/product3--5oCsFcA.png`,tag:`WOMEN'S WELLNESS`,name:`OVUCARE Tablets`,subtitle:`AYURVEDIC SUPPORT FOR WOMEN'S REPRODUCTIVE HEALTH`,desc:`Sootikabharan Rasa & Latakaranja — supportive management of PCOD/PCOS, hormonal balance & regular cycles.`,mrp:340,discount:12,badge:null,rating:4.7,reviewCount:214,pack:`30 Tablets`,category:`Women's Wellness`},{id:4,img:`/Nithiya-Ayurveda/assets/product4-mNJLR_WV.png`,tag:`MEN'S VITALITY`,name:`Vajra-X Capsules`,subtitle:`STRENGTH, STAMINA & CONFIDENCE`,desc:`L-Arginine, Mucana Pruriens & Ashwagandha — for stamina, performance, erectile dysfunction & overall male vitality.`,mrp:212,discount:12,badge:`HOT`,rating:4.6,reviewCount:189,pack:`Pack of 3 Recommended`,category:`Men's Vitality`}];function Jh(e,t){return Math.round(e*(1-t/100))}function Yh({rating:e}){return(0,I.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`2px`},children:[1,2,3,4,5].map(t=>(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`12`,height:`12`,style:{color:`#C8873A`,fill:t<=Math.floor(e)?`currentColor`:`none`,stroke:`currentColor`,strokeWidth:`2`},children:(0,I.jsx)(`polygon`,{points:`12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26`})},t))})}function Xh(){let{addToCart:e}=cr(),t=(0,w.useRef)(null),n=(0,w.useRef)([]);(0,w.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`fp-visible`)})},{threshold:.1});return t.current&&e.observe(t.current),n.current.forEach(t=>t&&e.observe(t)),()=>e.disconnect()},[]);let r=t=>{let n=Jh(t.mrp,t.discount);e({id:t.id,name:t.name,price:n,image:t.img,category:t.category,quantity:1})};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --fp-bg: #F9F7F2;
          --fp-deep: #1E3A2F;
          --fp-gold: #C8873A;
          --fp-text: #2C2C2C;
          --fp-muted: #666666;
          --fp-white: #FFFFFF;
        }

        .fp-section {
          padding: 80px 5%;
          background: var(--fp-bg);
          font-family: 'Jost', sans-serif;
        }

        @media (max-width: 768px) {
          .fp-section { padding: 50px 4%; }
        }

        .fp-head {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.8s ease-out forwards;
        }
        .fp-head.fp-visible { opacity: 1; transform: translateY(0); }

        .fp-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--fp-gold);
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 10px;
          display: block;
        }

        .fp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 5vw, 48px);
          color: var(--fp-deep);
          font-weight: 700;
        }

        .fp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1100px) { .fp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 540px) { .fp-grid { grid-template-columns: 1fr; gap: 14px; } }

        .fp-card {
          background: var(--fp-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.2, 0, 0.2, 1);
        }
        .fp-card.fp-visible { opacity: 1; transform: translateY(0); }

        .fp-img-container {
          position: relative;
          background: #fdfdfd;
          aspect-ratio: 1/1;
          padding: 16px;
          overflow: hidden;
        }

        .fp-img-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        .fp-card:hover .fp-img-container img { transform: scale(1.08); }

        .fp-tag-overlay {
          position: absolute; top: 12px; left: 12px;
          background: var(--fp-deep); color: white;
          font-size: 9px; font-weight: 600; padding: 3px 8px;
          border-radius: 4px; letter-spacing: 0.05em;
        }

        .fp-badge-overlay {
          position: absolute; top: 12px; right: 12px;
          background: white; color: var(--fp-text);
          font-size: 9px; font-weight: 700; padding: 3px 8px;
          border-radius: 4px; border: 1px solid #eee;
        }

        .fp-discount-tag {
          position: absolute; bottom: 12px; left: 12px;
          background: #D48E4D; color: white;
          font-size: 10px; font-weight: 700; padding: 2px 7px;
          border-radius: 4px;
        }

        .fp-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .fp-subtitle {
          font-size: 9px;
          color: #D48E4D;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 6px;
        }

        .fp-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          color: var(--fp-deep);
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .fp-name { font-size: 18px; }
        }

        .fp-desc {
          font-size: 12px;
          color: var(--fp-muted);
          line-height: 1.6;
          margin-bottom: 12px;
          flex: 1;
        }

        .fp-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .fp-rating-text { font-size: 11px; color: var(--fp-text); font-weight: 600; }
        .fp-reviews { font-size: 10px; color: #999; }

        .fp-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
          gap: 8px;
        }

        .price-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--fp-deep);
        }
        .price-main span { font-size: 13px; margin-right: 2px; }

        .mrp-line {
          font-size: 11px;
          color: #bbb;
          text-decoration: line-through;
          display: block;
        }

        .add-to-cart {
          background: var(--fp-deep);
          color: white;
          border: none;
          padding: 9px 14px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .add-to-cart:hover { background: #2d5a42; transform: translateY(-2px); }

        .view-all-container {
           text-align: center;
           margin-top: 50px;
        }
        .view-all-btn {
          display: inline-block;
          background: transparent;
          border: 1px solid var(--fp-deep);
          color: var(--fp-deep);
          padding: 13px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          transition: 0.3s;
        }
        .view-all-btn:hover { background: var(--fp-deep); color: white; }
      `}),(0,I.jsxs)(`section`,{className:`fp-section`,children:[(0,I.jsxs)(`div`,{className:`fp-head`,ref:t,children:[(0,I.jsx)(`span`,{className:`fp-eyebrow`,children:`NATURAL FORMULATIONS`}),(0,I.jsx)(`h2`,{className:`fp-title`,children:`Signature Wellness Collection`})]}),(0,I.jsx)(`div`,{className:`fp-grid`,children:qh.map((e,t)=>{let i=Jh(e.mrp,e.discount);return(0,I.jsxs)(`div`,{className:`fp-card`,ref:e=>n.current[t]=e,children:[(0,I.jsxs)(`div`,{className:`fp-img-container`,children:[(0,I.jsx)(`div`,{className:`fp-tag-overlay`,children:e.tag}),e.badge&&(0,I.jsx)(`div`,{className:`fp-badge-overlay`,children:e.badge}),(0,I.jsx)(`img`,{src:e.img,alt:e.name}),(0,I.jsxs)(`div`,{className:`fp-discount-tag`,children:[e.discount,`% OFF`]})]}),(0,I.jsxs)(`div`,{className:`fp-content`,children:[(0,I.jsx)(`span`,{className:`fp-subtitle`,children:e.subtitle}),(0,I.jsx)(`h3`,{className:`fp-name`,children:e.name}),(0,I.jsx)(`p`,{className:`fp-desc`,children:e.desc}),(0,I.jsxs)(`div`,{className:`fp-meta`,children:[(0,I.jsx)(Yh,{rating:e.rating}),(0,I.jsx)(`span`,{className:`fp-rating-text`,children:e.rating}),(0,I.jsxs)(`span`,{className:`fp-reviews`,children:[`(`,e.reviewCount,` reviews)`]})]}),(0,I.jsxs)(`div`,{className:`fp-price-row`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`span`,{className:`mrp-line`,children:[`₹`,e.mrp]}),(0,I.jsxs)(`div`,{className:`price-main`,children:[(0,I.jsx)(`span`,{children:`₹`}),i]})]}),(0,I.jsx)(`button`,{className:`add-to-cart`,onClick:()=>r(e),children:`ADD TO CART`})]})]})]},e.id)})}),(0,I.jsx)(`div`,{className:`view-all-container`,children:(0,I.jsx)(Fi,{to:`/products`,className:`view-all-btn`,children:`VIEW ALL PRODUCTS`})})]})]})}var Zh=[{id:0,name:`Hemp Pain Spray`,tagline:`Fast-acting relief for back, joints & muscles`,desc:`Cold-pressed hemp extract blended with Ashwagandha and Shallaki — a time-tested Ayurvedic formula for deep, lasting comfort.`,img:`/src/assets/products/hemp.png`,badge:`Best Seller`,category:`Pain Relief`,herbs:[`Ashwagandha`,`Shallaki`,`Hemp`],accent:`#355E3B`},{id:1,name:`OvuCare`,tagline:`Hormonal balance & PCOS / PCOD support`,desc:`A gentle Ayurvedic blend of Shatavari, Lodhra and Ashoka that helps support a healthy hormonal rhythm — naturally and holistically.`,img:`/src/assets/products/ovucare.png`,badge:`For Her`,category:`Women's Wellness`,herbs:[`Shatavari`,`Lodhra`,`Ashoka`],accent:`#7A5C8A`},{id:2,name:`Vajra-X`,tagline:`Stamina, vitality & performance support`,desc:`Rooted in classical Vajikarana therapy, Vajra-X harnesses Shilajit, Safed Musli and Ashwagandha to help support energy and vitality.`,img:`/src/assets/products/vajra.png`,badge:`For Him`,category:`Men's Vitality`,herbs:[`Shilajit`,`Safed Musli`,`Ashwagandha`],accent:`#8B5E3C`},{id:3,name:`Kufrida`,tagline:`Respiratory health & cough & cold support`,desc:`A classical respiratory formulation with Tulsi, Vasa and Kantakari — helping the airways stay clear and the breath stay deep.`,img:`/src/assets/products/kufrida.png`,badge:`Respiratory`,category:`Respiratory Care`,herbs:[`Tulsi`,`Vasa`,`Kantakari`],accent:`#2A6B8A`}],Qh=[{icon:`🌿`,title:`100% Ayurvedic`,body:`Every ingredient sourced from nature's finest — no synthetic fillers, no shortcuts.`},{icon:`🧪`,title:`Lab Certified`,body:`Each batch independently tested for purity, potency and safety.`},{icon:`❄️`,title:`Cold-Pressed`,body:`Minimal processing preserves the full spectrum of botanical actives.`},{icon:`👨‍⚕️`,title:`Doctor Trusted`,body:`Formulations developed with certified Ayurvedic physicians.`}],$h=5e3;function eg(){let e=ar(),[t,n]=(0,w.useState)(0),[r,i]=(0,w.useState)(null),[a,o]=(0,w.useState)(`next`),[s,c]=(0,w.useState)(!1),[l,u]=(0,w.useState)(0),d=(0,w.useRef)(null),f=(0,w.useRef)(null),p=(0,w.useRef)(null),[m,h]=(0,w.useState)(!1),[g,_]=(0,w.useState)([]),[v,y]=(0,w.useState)(null),b=(0,w.useCallback)(e=>{_(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}]),y(e.name),setTimeout(()=>y(null),2500)},[]),x=(0,w.useCallback)((e,r=`next`)=>{s||e===t||(o(r),i(t),c(!0),n(e),u(0),f.current=performance.now(),setTimeout(()=>{i(null),c(!1)},1e3))},[t,s]),S=(0,w.useCallback)(()=>{x((t+1)%Zh.length,`next`)},[t,x]),C=(0,w.useCallback)(()=>{x((t-1+Zh.length)%Zh.length,`prev`)},[t,x]);(0,w.useEffect)(()=>{f.current=performance.now();let e=t=>{let n=t-f.current;u(Math.min(n/$h*100,100)),n>=$h?S():d.current=requestAnimationFrame(e)};return d.current=requestAnimationFrame(e),()=>cancelAnimationFrame(d.current)},[t,S]),(0,w.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&h(!0)},{threshold:.15});return p.current&&e.observe(p.current),()=>e.disconnect()},[]);let T=Zh[t],E=r===null?null:Zh[r];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: #FAF7F1; }

        :root {
          --cream: #FAF7F1;
          --green: #2D5344;
          --green-light: #4A7360;
          --gold: #B88E2F;
          --text: #1A2E28;
          --text-muted: #5A5346;
          --nav-h: 80px;
        }

        /* ─── HERO ─── */
        .hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 500px;
          overflow: hidden;
          background: #111;
        }

        .hero-main {
          position: relative; width: 100%; height: 100%;
        }

        .hero-img-layer {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          overflow: hidden;
        }

        .hero-product-image {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          will-change: transform;
        }

        @keyframes zoomOut { from { transform: scale(1.06); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes zoomIn  { from { transform: scale(1);    opacity: 1; } to { transform: scale(1.04); opacity: 0; } }

        .hero-img-layer.active  { animation: zoomOut 1.0s cubic-bezier(0.2,1,0.3,1) forwards; z-index: 2; }
        .hero-img-layer.exiting { animation: zoomIn  1.0s cubic-bezier(0.2,1,0.3,1) forwards; z-index: 1; }

        /* ── Subtle bottom gradient only — keeps text readable, image stays clear ── */
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0,0,0,0.55) 100%
          );
          z-index: 3;
          pointer-events: none;
        }

        /* ── CONTENT ── */
        .hero-content {
          position: absolute; z-index: 10;
          left: 5%; bottom: 120px;
          width: 50%;
        }

        @media (max-width: 1024px) { .hero-content { width: 70%; } }
        @media (max-width: 768px)  { .hero-content { width: 90%; left: 5%; bottom: 100px; } }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content > * { animation: fadeInUp 0.9s cubic-bezier(0.2,1,0.3,1) both; }

        .hero-badge {
          animation-delay: 0.1s;
          display: inline-block;
          padding: 5px 12px;
          background: rgba(255,255,255,0.18);
          color: #fff;
          border-radius: 30px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
        }

        .hero-title {
          animation-delay: 0.2s;
          font-family: 'Playfair Display', serif;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 12px;
          font-size: clamp(2rem, 5vw, 4rem);
          text-shadow: 0 2px 16px rgba(0,0,0,0.4);
        }
        .hero-title strong { color: #f0d080; font-style: italic; }

        .hero-desc {
          animation-delay: 0.3s;
          font-family: 'Cormorant Garamond', serif;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          margin-bottom: 22px;
          font-size: clamp(1rem, 2vw, 1.25rem);
        }

        .hero-btns {
          animation-delay: 0.4s;
          display: flex; gap: 14px; flex-wrap: wrap;
        }

        .btn-premium {
          padding: 13px 28px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        @media (max-width: 480px) { .btn-premium { padding: 11px 20px; font-size: 0.7rem; } }

        .btn-p { background: var(--green); color: white; }
        .btn-p:hover { background: var(--green-light); }
        .btn-s { background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.5); color: #fff; }
        .btn-s:hover { background: rgba(255,255,255,0.25); }

        /* ── CONTROLS ── */
        .hero-controls {
          position: absolute; bottom: 36px; left: 5%;
          display: flex; align-items: center; gap: 30px; z-index: 20;
        }
        @media (max-width: 768px) { .hero-controls { bottom: 20px; gap: 20px; } }

        .progress-container { display: flex; gap: 8px; }
        .progress-bar {
          width: 44px; height: 2px;
          background: rgba(255,255,255,0.25);
          position: relative; cursor: pointer; overflow: hidden; border-radius: 2px;
        }
        @media (max-width: 768px) { .progress-bar { width: 32px; } }
        .progress-fill { position: absolute; height: 100%; background: #f0d080; width: 0; transition: width 0.1s linear; }

        .nav-arrows { display: flex; gap: 10px; }
        .nav-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.1); backdrop-filter: blur(4px);
          cursor: pointer; transition: 0.3s;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 16px;
        }
        @media (max-width: 768px) { .nav-arrow { width: 34px; height: 34px; font-size: 14px; } }
        .nav-arrow:hover { background: var(--green); border-color: var(--green); }

        /* ── CART TOAST ── */
        .cart-toast {
          position: fixed; bottom: 30px; right: 24px; z-index: 9999;
          background: #2D5344; color: #fff;
          padding: 12px 20px; border-radius: 8px;
          font-family: 'Lato', sans-serif; font-size: 13px; font-weight: 600;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          animation: toastIn 0.3s ease forwards;
        }
        @keyframes toastIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }

        /* ── WHY SECTION ── */
        .why { padding: 80px 0; background: #FAF7F1; }
        @media (max-width: 768px) { .why { padding: 56px 0; } }

        .why-header {
          text-align: center; margin-bottom: 50px; padding: 0 5%;
          opacity: 0; transform: translateY(30px);
          transition: 1s cubic-bezier(0.2,1,0.3,1);
        }
        .why-visible .why-header { opacity: 1; transform: translateY(0); }

        .why-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          color: #1A2E28;
        }

        .why-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 24px;
          max-width: 1400px; margin: 0 auto; padding: 0 5%;
        }
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 480px)  { .why-grid { grid-template-columns: 1fr; gap: 14px; } }

        .why-card {
          padding: 32px 24px; background: white; border-radius: 12px; text-align: center;
          opacity: 0; transform: translateY(40px); transition: 0.8s cubic-bezier(0.2,1,0.3,1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.03);
        }
        .why-visible .why-card { opacity: 1; transform: translateY(0); }
        .why-card:nth-child(2) { transition-delay: 0.15s; }
        .why-card:nth-child(3) { transition-delay: 0.3s; }
        .why-card:nth-child(4) { transition-delay: 0.45s; }
        .why-icon  { font-size: 2rem; margin-bottom: 16px; display: block; }
        .why-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #2D5344; margin-bottom: 12px; }
        .why-body  { font-family: 'Lato', sans-serif; color: #5A5346; line-height: 1.6; font-size: 0.9rem; }
      `}),(0,I.jsx)(`section`,{className:`hero-section`,children:(0,I.jsxs)(`div`,{className:`hero-main`,children:[E&&(0,I.jsx)(`div`,{className:`hero-img-layer exiting`,children:(0,I.jsx)(`img`,{src:E.img,alt:``,className:`hero-product-image`,loading:`eager`})}),(0,I.jsx)(`div`,{className:`hero-img-layer active`,children:(0,I.jsx)(`img`,{src:T.img,alt:T.name,className:`hero-product-image`,loading:`eager`})},t),(0,I.jsx)(`div`,{className:`hero-overlay`}),(0,I.jsxs)(`div`,{className:`hero-content`,children:[(0,I.jsx)(`span`,{className:`hero-badge`,children:T.badge}),(0,I.jsxs)(`h1`,{className:`hero-title`,children:[T.name.split(` `).slice(0,-1).join(` `),` `,(0,I.jsx)(`strong`,{children:T.name.split(` `).slice(-1)})]}),(0,I.jsxs)(`p`,{className:`hero-desc`,children:[T.tagline,`. `,T.desc]}),(0,I.jsxs)(`div`,{className:`hero-btns`,children:[(0,I.jsx)(`button`,{className:`btn-premium btn-p`,onClick:()=>e(`/products`),children:`Shop The Blend`}),(0,I.jsx)(`button`,{className:`btn-premium btn-s`,onClick:()=>e(`/about`),children:`Our Science`})]})]},`content-${t}`),(0,I.jsxs)(`div`,{className:`hero-controls`,children:[(0,I.jsx)(`div`,{className:`progress-container`,children:Zh.map((e,n)=>(0,I.jsx)(`div`,{className:`progress-bar`,onClick:()=>x(n,n>t?`next`:`prev`),children:(0,I.jsx)(`div`,{className:`progress-fill`,style:{width:t===n?`${l}%`:t>n?`100%`:`0%`}})},n))}),(0,I.jsxs)(`div`,{className:`nav-arrows`,children:[(0,I.jsx)(`button`,{className:`nav-arrow`,onClick:C,children:`←`}),(0,I.jsx)(`button`,{className:`nav-arrow`,onClick:S,children:`→`})]})]})]})}),(0,I.jsxs)(`section`,{id:`about`,className:`why ${m?`why-visible`:``}`,ref:p,children:[(0,I.jsx)(`div`,{className:`why-header`,children:(0,I.jsxs)(`h2`,{className:`why-heading`,children:[`Rooted in `,(0,I.jsx)(`span`,{style:{color:`#2D5344`,fontStyle:`italic`},children:`Nature`}),`, Backed by Science`]})}),(0,I.jsx)(`div`,{className:`why-grid`,children:Qh.map((e,t)=>(0,I.jsxs)(`div`,{className:`why-card`,children:[(0,I.jsx)(`span`,{className:`why-icon`,children:e.icon}),(0,I.jsx)(`h3`,{className:`why-title`,children:e.title}),(0,I.jsx)(`p`,{className:`why-body`,children:e.body})]},t))})]}),(0,I.jsx)(Xh,{onAddToCart:b}),(0,I.jsx)(`footer`,{style:{background:`#2D5344`,color:`#FAF7F1`,padding:`32px 0`,textAlign:`center`,fontFamily:`Lato, sans-serif`},children:(0,I.jsx)(`p`,{style:{opacity:.8,fontSize:`0.85rem`,letterSpacing:`0.1em`},children:`© 2026 NITHYA AYURVEDA — NASHIK, MH`})}),v&&(0,I.jsxs)(`div`,{className:`cart-toast`,children:[`🛒 `,v,` added to cart!`]})]})}var tg=`/Nithiya-Ayurveda/assets/about-BEbhOqZP.jpg`;function ng(){let e=(0,w.useRef)(null),t=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`ah-visible`)})},{threshold:.12});return e.current&&n.observe(e.current),t.current&&n.observe(t.current),()=>n.disconnect()},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        :root {
          --white: #ffffff;
          --off-white: #fcfdfc;
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-pale: #f2f7f3;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ah-section {
          padding: clamp(60px, 10vw, 120px) 0;
          background: var(--white);
          font-family: 'Nunito Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: var(--text-main);
        }

        .ah-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 24px);
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          align-items: center;
          gap: clamp(40px, 7vw, 80px);
        }

        /* Decorative Leaf */
        .leaf-svg {
          position: absolute;
          width: 120px;
          height: auto;
          opacity: 0.08;
          pointer-events: none;
          fill: var(--soft-green);
        }
        .leaf-tl { top: 40px; left: -30px; transform: rotate(-15deg); }
        .leaf-br { bottom: 40px; right: -30px; transform: rotate(165deg); }

        /* Image Column */
        .ah-img-column {
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: var(--transition);
        }
        .ah-img-column.ah-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ah-img-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          z-index: 2;
        }

        .ah-main-img {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.1;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 30px 60px -20px rgba(31, 61, 43, 0.15);
          display: block;
        }

        .ah-img-blob {
          position: absolute;
          top: -15%;
          left: -15%;
          width: 130%;
          height: 130%;
          background: var(--accent-pale);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: -1;
          animation: morph 12s ease-in-out infinite;
        }

        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 50% 60% 30% 70% / 50% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }

        .ah-experience-badge {
          position: absolute;
          bottom: 30px;
          right: -16px;
          background: var(--dark-green);
          color: var(--white);
          padding: clamp(16px, 2.5vw, 24px);
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(31, 61, 43, 0.2);
          z-index: 3;
        }
        .ah-exp-val { display: block; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; line-height: 1; }
        .ah-exp-lab { display: block; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; opacity: 0.8; margin-top: 4px; white-space: nowrap; }

        /* Content Column */
        .ah-content-column {
          opacity: 0;
          transform: translateY(40px);
          transition: var(--transition);
          transition-delay: 0.2s;
        }
        .ah-content-column.ah-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ah-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--soft-green);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 18px;
        }

        .ah-title {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--dark-green);
          margin-bottom: 20px;
        }
        .ah-title span { color: var(--soft-green); }

        .ah-description {
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .ah-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(12px, 2vw, 20px);
          margin-bottom: 36px;
        }

        .ah-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(0.82rem, 1.3vw, 0.9rem);
          font-weight: 600;
          color: var(--text-main);
        }

        .ah-feature-icon {
          width: 18px; height: 18px;
          color: var(--soft-green);
          flex-shrink: 0;
        }

        .ah-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--dark-green);
          color: var(--white);
          padding: clamp(12px, 2vw, 16px) clamp(24px, 3vw, 36px);
          border-radius: 100px;
          font-weight: 700;
          font-size: clamp(0.8rem, 1.3vw, 0.9rem);
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(31, 61, 43, 0.3);
        }

        .ah-primary-btn:hover {
          background: var(--soft-green);
          transform: translateY(-3px);
          box-shadow: 0 15px 25px -5px rgba(107, 191, 89, 0.4);
        }

        /* ═══════════════════════════════════════
           TABLET (≤ 992px)
        ═══════════════════════════════════════ */
        @media (max-width: 992px) {
          .ah-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ah-eyebrow { display: flex; justify-content: center; }
          .ah-features { justify-items: center; }
          .ah-img-container { max-width: 380px; }
          .ah-experience-badge { right: 0; bottom: 10px; }
          .ah-primary-btn { margin: 0 auto; }
          .ah-img-column { transform: translateY(30px); }
          .ah-content-column { transform: translateY(30px); }
          .leaf-tl, .leaf-br { display: none; }
        }

        /* ═══════════════════════════════════════
           MOBILE (≤ 600px)
        ═══════════════════════════════════════ */
        @media (max-width: 600px) {
          .ah-section { padding: clamp(48px, 8vw, 72px) 0; }
          .ah-img-container { max-width: 300px; }
          .ah-img-blob { display: none; } /* hide blob on small screens for perf */
          .ah-experience-badge {
            position: relative;
            right: auto; bottom: auto;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            border-radius: 50px;
            margin-top: 16px;
          }
          .ah-exp-val { font-size: 1.2rem; }
          .ah-exp-lab { margin-top: 0; font-size: 0.6rem; }
          .ah-features { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ah-feature-item { font-size: 0.8rem; gap: 8px; }
          .ah-title { font-size: 1.75rem; }
        }

        /* ═══════════════════════════════════════
           SMALL PHONES (≤ 380px)
        ═══════════════════════════════════════ */
        @media (max-width: 380px) {
          .ah-features { grid-template-columns: 1fr; justify-items: start; }
          .ah-container { text-align: left; }
          .ah-eyebrow { justify-content: flex-start; }
          .ah-primary-btn { margin: 0; }
        }
      `}),(0,I.jsxs)(`section`,{className:`ah-section`,children:[(0,I.jsx)(`svg`,{className:`leaf-svg leaf-tl`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{d:`M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C8,6.47 7,6.67 6.06,6.88C7.12,5.82 7.33,4.05 7.33,4.05C7.33,4.05 5.33,4.33 3.33,6.33L5,8L21,13C21,13 19,13 17,8Z`})}),(0,I.jsx)(`svg`,{className:`leaf-svg leaf-br`,viewBox:`0 0 24 24`,children:(0,I.jsx)(`path`,{d:`M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C8,6.47 7,6.67 6.06,6.88C7.12,5.82 7.33,4.05 7.33,4.05C7.33,4.05 5.33,4.33 3.33,6.33L5,8L21,13C21,13 19,13 17,8Z`})}),(0,I.jsxs)(`div`,{className:`ah-container`,children:[(0,I.jsx)(`div`,{className:`ah-img-column`,ref:e,children:(0,I.jsxs)(`div`,{className:`ah-img-container`,children:[(0,I.jsx)(`div`,{className:`ah-img-blob`}),(0,I.jsx)(`img`,{src:tg,alt:`Ayurvedic Wellness`,className:`ah-main-img`}),(0,I.jsxs)(`div`,{className:`ah-experience-badge`,children:[(0,I.jsx)(`span`,{className:`ah-exp-val`,children:`25+`}),(0,I.jsx)(`span`,{className:`ah-exp-lab`,children:`Years of Healing`})]})]})}),(0,I.jsxs)(`div`,{className:`ah-content-column`,ref:t,children:[(0,I.jsx)(`span`,{className:`ah-eyebrow`,children:`Pure • Authentic • Potent`}),(0,I.jsxs)(`h2`,{className:`ah-title`,children:[`Ancient Wisdom for `,(0,I.jsx)(`br`,{}),(0,I.jsx)(`span`,{children:`Modern Wellbeing`})]}),(0,I.jsx)(`p`,{className:`ah-description`,children:`At Nithya Ayurveda, we carry forward a legacy of healing that spans generations. By blending classical Kerala traditions with modern scientific precision, we craft treatments that don't just mask symptoms, but restore your body's natural rhythm.`}),(0,I.jsx)(`div`,{className:`ah-features`,children:[`100% Ethical Sourcing`,`Handcrafted Formulations`,`Classical Kerala Lineage`,`Personalized Care`].map(e=>(0,I.jsxs)(`div`,{className:`ah-feature-item`,children:[(0,I.jsx)(`svg`,{className:`ah-feature-icon`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:`3`,children:(0,I.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})}),e]},e))}),(0,I.jsxs)(`a`,{href:`/about`,className:`ah-primary-btn`,children:[`Explore Our Story`,(0,I.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,I.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]})]})]})}function rg(){return(0,I.jsx)(`section`,{style:{padding:`100px 10%`,display:`flex`,alignItems:`center`,gap:`60px`}})}var ig=[{id:1,name:`Priya Sharma`,role:`Yoga Instructor, Mumbai`,initials:`PS`,rating:5,text:`The Kufrida tonic transformed my energy levels completely. After 3 weeks, I noticed a profound shift in my vitality — ancient wisdom truly works.`},{id:2,name:`Arjun Mehta`,role:`Software Engineer, Bengaluru`,initials:`AM`,rating:5,text:`I've been using Vajra-X for two months now. The improvement in my stamina and focus is remarkable. Highly recommend it.`},{id:3,name:`Deepa Nair`,role:`Homemaker, Kochi`,initials:`DN`,rating:5,text:`Ovucare has been a blessing. My hormonal balance has improved significantly. I trust Nithya Ayurveda completely.`},{id:4,name:`Vikram Rajan`,role:`Ayurvedic Doctor, Chennai`,initials:`VR`,rating:5,text:`As a practitioner myself, I recommend Nithya Ayurveda to my patients. Pure, authentic, and effective formulations.`},{id:5,name:`Sunita Krishnan`,role:`Teacher, Pune`,initials:`SK`,rating:5,text:`The Hemp Pain Spray gave me relief within minutes. No side effects, completely natural. Finally found something that works.`},{id:6,name:`Rahul Desai`,role:`Fitness Trainer, Delhi`,initials:`RD`,rating:5,text:`Vajra-X is part of my daily routine now. The recovery after workouts has improved significantly. Genuinely trusted by athletes.`}];function ag(){let[e,t]=(0,w.useState)(ig),[n,r]=(0,w.useState)(!1),[i,a]=(0,w.useState)({name:``,role:``,rating:5,text:``}),[o,s]=(0,w.useState)(0),[c,l]=(0,w.useState)(0),u=(0,w.useRef)(null),d=(0,w.useRef)(null);(0,w.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`ts-vis`)})},{threshold:.1});return u.current&&e.observe(u.current),()=>e.disconnect()},[]),(0,w.useEffect)(()=>(d.current=setInterval(()=>{s(t=>(t+1)%e.length)},5e3),()=>clearInterval(d.current)),[e.length]);let f=e=>{clearInterval(d.current),s(e)},p=n=>{if(n.preventDefault(),!i.name||!i.text)return;let o=i.name.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2);t([{id:Date.now(),...i,initials:o,role:i.role||`Verified Customer`},...e]),a({name:``,role:``,rating:5,text:``}),r(!1),s(0)},m=[];for(let t=0;t<3;t++)m.push(e[(o+t)%e.length]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

        :root {
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-bg: #f8faf9;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --premium-gold: #c5a35d;
        }

        .ts-section {
          padding: clamp(60px, 8vw, 100px) 0;
          background: #ffffff;
          font-family: 'Nunito Sans', sans-serif;
          color: var(--text-main);
          position: relative;
          overflow: hidden;
        }

        .ts-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 24px);
        }

        /* ── HEADER ── */
        .ts-head {
          text-align: center;
          margin-bottom: clamp(36px, 5vw, 60px);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .ts-head.ts-vis { opacity: 1; transform: translateY(0); }

        .ts-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--premium-gold);
          margin-bottom: 10px;
          display: block;
        }

        .ts-title {
          font-size: clamp(1.6rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--dark-green);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .ts-add-btn {
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: transparent;
          color: var(--dark-green);
          border: 1.5px solid var(--dark-green);
          padding: 11px 28px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .ts-add-btn:hover {
          background: var(--dark-green);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(31, 61, 43, 0.1);
        }

        /* ── FORM ── */
        .ts-form-wrap {
          max-width: 520px;
          margin: 0 auto clamp(36px, 5vw, 60px);
          background: var(--accent-bg);
          padding: clamp(24px, 4vw, 40px);
          border-radius: 20px;
          border: 1px solid rgba(31, 61, 43, 0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          animation: tsFadeUp 0.5s ease-out;
        }

        @keyframes tsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ts-form input, .ts-form textarea {
          width: 100%;
          margin-bottom: 14px;
          padding: 12px 16px;
          border: 1px solid #e2e8e4;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.88rem;
          outline: none;
          background: #fff;
          transition: all 0.3s;
        }
        .ts-form input:focus, .ts-form textarea:focus {
          border-color: var(--soft-green);
          box-shadow: 0 0 0 3px rgba(107, 191, 89, 0.1);
        }

        .ts-star-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          display: block;
          margin-bottom: 8px;
        }

        .ts-star-row {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }
        .ts-star {
          font-size: 22px;
          cursor: pointer;
          transition: transform 0.2s;
          color: #e2e8e4;
        }
        .ts-star.filled { color: #facc15; }
        .ts-star:hover { transform: scale(1.2); }

        .ts-form-submit {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          background: var(--dark-green);
          color: #fff;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: background 0.3s;
          font-family: inherit;
          font-size: 0.82rem;
        }
        .ts-form-submit:hover { background: var(--soft-green); }

        /* ── CARDS GRID ──
           Desktop: 3 columns
           Tablet:  2 columns
           Mobile:  2 columns (compact)
        ── */
        .ts-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.5vw, 30px);
          margin-bottom: clamp(32px, 5vw, 50px);
        }

        .ts-card {
          background: #fff;
          padding: clamp(20px, 3vw, 40px);
          border-radius: 20px;
          border: 1px solid var(--accent-bg);
          box-shadow: 0 8px 24px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
        }
        .ts-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(31, 61, 43, 0.08);
          border-color: rgba(107, 191, 89, 0.2);
        }

        .ts-card-stars {
          color: #facc15;
          margin-bottom: clamp(12px, 2vw, 20px);
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        .ts-card-text {
          font-size: clamp(0.8rem, 1.5vw, 1rem);
          line-height: 1.75;
          color: var(--text-main);
          margin-bottom: clamp(16px, 2.5vw, 30px);
          flex: 1;
          font-style: italic;
          opacity: 0.9;
        }

        .ts-card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: clamp(14px, 2vw, 24px);
          border-top: 1px solid var(--accent-bg);
        }

        .ts-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: var(--accent-bg);
          color: var(--dark-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .ts-card-name { font-weight: 700; font-size: clamp(0.8rem, 1.5vw, 0.95rem); margin: 0; color: var(--dark-green); }
        .ts-card-role { font-size: clamp(0.68rem, 1.2vw, 0.8rem); color: var(--text-muted); margin: 0; }

        /* ── PAGINATION ── */
        .ts-pagination { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .ts-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e2e8e4;
          cursor: pointer;
          transition: all 0.3s;
          border: none; padding: 0;
        }
        .ts-dot.active {
          width: 24px;
          border-radius: 10px;
          background: var(--soft-green);
        }

        /* ═══════════════════════════════════════
           TABLET (≤ 1024px) — 2 cards
        ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .ts-cards-grid { grid-template-columns: repeat(2, 1fr); }
          /* Hide 3rd card on tablet */
          .ts-card:nth-child(3) { display: none; }
        }

        /* ═══════════════════════════════════════
           MOBILE (≤ 768px) — 2 compact cards
        ═══════════════════════════════════════ */
        @media (max-width: 768px) {
          .ts-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          /* Show all 3 again but hide 3rd — 2 per row is the target */
          .ts-card:nth-child(3) { display: none; }

          .ts-card {
            padding: 16px;
            border-radius: 14px;
          }

          .ts-card-stars { font-size: 0.75rem; margin-bottom: 8px; }

          .ts-card-text {
            font-size: 0.76rem;
            line-height: 1.6;
            margin-bottom: 12px;
            /* Limit height on mobile for visual consistency */
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .ts-card-footer {
            gap: 8px;
            padding-top: 10px;
          }

          .ts-avatar {
            width: 32px; height: 32px; min-width: 32px;
            font-size: 0.7rem;
          }

          .ts-card-name { font-size: 0.76rem; }
          .ts-card-role { font-size: 0.64rem; }

          /* Form full-width */
          .ts-form-wrap { margin-left: 0; margin-right: 0; border-radius: 16px; }
        }

        /* ═══════════════════════════════════════
           SMALL PHONES (≤ 420px)
        ═══════════════════════════════════════ */
        @media (max-width: 420px) {
          .ts-cards-grid { gap: 10px; }
          .ts-card { padding: 14px 12px; border-radius: 12px; }
          .ts-card-text { -webkit-line-clamp: 4; font-size: 0.72rem; }
          .ts-title { font-size: 1.5rem; }
        }
      `}),(0,I.jsx)(`section`,{className:`ts-section`,children:(0,I.jsxs)(`div`,{className:`ts-container`,children:[(0,I.jsxs)(`div`,{className:`ts-head`,ref:u,children:[(0,I.jsx)(`span`,{className:`ts-eyebrow`,children:`User Stories`}),(0,I.jsx)(`h2`,{className:`ts-title`,children:`Trusted by our Community`}),(0,I.jsx)(`button`,{className:`ts-add-btn`,onClick:()=>r(!n),children:n?`Cancel Review`:`Share Your Experience`})]}),n&&(0,I.jsx)(`div`,{className:`ts-form-wrap`,children:(0,I.jsxs)(`form`,{className:`ts-form`,onSubmit:p,children:[(0,I.jsx)(`input`,{placeholder:`Your Full Name`,value:i.name,onChange:e=>a({...i,name:e.target.value}),required:!0}),(0,I.jsx)(`input`,{placeholder:`Role / Location (e.g. Yoga Instructor, Delhi)`,value:i.role,onChange:e=>a({...i,role:e.target.value})}),(0,I.jsx)(`span`,{className:`ts-star-label`,children:`Rating`}),(0,I.jsx)(`div`,{className:`ts-star-row`,children:[1,2,3,4,5].map(e=>(0,I.jsx)(`span`,{className:`ts-star ${e<=(c||i.rating)?`filled`:``}`,onClick:()=>a({...i,rating:e}),onMouseEnter:()=>l(e),onMouseLeave:()=>l(0),children:`★`},e))}),(0,I.jsx)(`textarea`,{placeholder:`How has Nithya Ayurveda helped your wellness journey?`,rows:`4`,value:i.text,onChange:e=>a({...i,text:e.target.value}),required:!0}),(0,I.jsx)(`button`,{type:`submit`,className:`ts-form-submit`,children:`Submit Review`})]})}),(0,I.jsx)(`div`,{className:`ts-cards-grid`,children:m.map((e,t)=>(0,I.jsxs)(`div`,{className:`ts-card`,children:[(0,I.jsxs)(`div`,{className:`ts-card-stars`,children:[`★`.repeat(e.rating),`☆`.repeat(5-e.rating)]}),(0,I.jsxs)(`p`,{className:`ts-card-text`,children:[`"`,e.text,`"`]}),(0,I.jsxs)(`div`,{className:`ts-card-footer`,children:[(0,I.jsx)(`div`,{className:`ts-avatar`,children:e.initials}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{className:`ts-card-name`,children:e.name}),(0,I.jsx)(`p`,{className:`ts-card-role`,children:e.role})]})]})]},`${e.id}-${t}`))}),(0,I.jsx)(`div`,{className:`ts-pagination`,children:e.map((e,t)=>(0,I.jsx)(`div`,{className:`ts-dot ${o===t?`active`:``}`,onClick:()=>f(t)},t))})]})})]})}var og=`/Nithiya-Ayurveda/assets/ingredients-D3Yld7wR.jpg`,sg=[{id:1,name:`Ashwagandha`,latin:`Withania somnifera`,benefit:`A revered Ayurvedic adaptogen that helps relieve muscle fatigue, reduce cortisol, and restore physical & mental endurance.`,products:`HEMP Pain Spray · Vajra-X`},{id:2,name:`Yasthimadhu`,latin:`Glycyrrhiza glabra`,benefit:`The 'sweet root' of Ayurveda — soothes throat irritation and supports healthy respiratory mucosa.`,products:`Kufrida Cough Syrup`},{id:3,name:`Latakaranja`,latin:`Caesalpinia bonduc`,benefit:`Traditionally used to support hormonal balance and healthy ovarian function in the management of PCOD/PCOS.`,products:`OVUCARE Tablets`},{id:4,name:`Gokshura`,latin:`Tribulus terrestris`,benefit:`Supports sexual vigour, reproductive strength, and healthy testosterone levels for male vitality.`,products:`Vajra-X Capsules`},{id:5,name:`Tulsi`,latin:`Ocimum sanctum`,benefit:`An immune enhancer that supports respiratory immunity and helps the body adapt to seasonal changes.`,products:`Kufrida Cough Syrup`},{id:6,name:`Mucana Pruriens`,latin:`Kapikacchu`,benefit:`Known for supporting healthy libido and testosterone balance—a natural aphrodisiac rooted in classical texts.`,products:`Vajra-X Capsules`}];function cg(){let e=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`ing-animate`)})},{threshold:.1});return e.current&&t.observe(e.current),()=>t.disconnect()},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@300;400;500;600&display=swap');

        .ing-section {
          padding: 100px 0;
          background: #FDFCFB;
          font-family: 'Jost', sans-serif;
          color: #1E3A2F;
          overflow: hidden;
        }

        .ing-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .ing-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .ing-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C8873A;
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }

        .ing-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 48px);
          font-weight: 600;
          color: #1E3A2F;
        }

        /* ── THE GRID ── */
        .ing-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: stretch; /* FIX: Makes both columns equal height */
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }
        .ing-animate .ing-layout { opacity: 1; transform: translateY(0); }

        /* ── IMAGE SIDE ── */
        .ing-image-side {
          height: 100%; /* FIX: Ensures container fills grid height */
        }

        .ing-img-wrapper {
          position: sticky;
          top: 120px;
          height: 100%; /* FIX: Stretches to match the right side list */
          min-height: 600px; /* Ensures a good presence on smaller vertical screens */
          width: 100%;
          border-radius: 12px; /* Added slightly rounded border */
          overflow: hidden;
          box-shadow: 30px 30px 0px -5px rgba(30, 58, 47, 0.04);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ing-animate .ing-img-wrapper:hover {
          transform: scale(1.02); /* Subtle hover animation */
        }

        .ing-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures image fills the now-taller container properly */
          filter: brightness(0.95) contrast(1.05);
        }

        .ing-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1E3A2F;
          padding: 20px 30px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ing-img-caption strong {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          color: #C8873A;
        }

        .ing-img-caption span {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.8;
        }

        /* ── LIST SIDE ── */
        .ing-list-side {
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centers list vertically if image is slightly taller */
          gap: 15px;
        }

        .ing-herb-item {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(30, 58, 47, 0.08);
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.6s ease-out;
        }

        /* Staggered entry animation for items */
        .ing-animate .ing-herb-item { opacity: 1; transform: translateX(0); }
        .ing-animate .ing-herb-item:nth-child(1) { transition-delay: 0.2s; }
        .ing-animate .ing-herb-item:nth-child(2) { transition-delay: 0.3s; }
        .ing-animate .ing-herb-item:nth-child(3) { transition-delay: 0.4s; }
        .ing-animate .ing-herb-item:nth-child(4) { transition-delay: 0.5s; }
        .ing-animate .ing-herb-item:nth-child(5) { transition-delay: 0.6s; }
        .ing-animate .ing-herb-item:nth-child(6) { transition-delay: 0.7s; }

        .ing-herb-item:last-child {
          border-bottom: none;
        }

        .ing-herb-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 6px;
        }

        .ing-herb-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 700;
          color: #1E3A2F;
        }

        .ing-herb-latin {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-style: italic;
          color: #C8873A;
        }

        .ing-herb-benefit {
          font-size: 14px;
          line-height: 1.6;
          color: #556B5F;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .ing-herb-tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          color: #C8873A;
          letter-spacing: 0.08em;
          background: rgba(200, 135, 58, 0.08);
          padding: 4px 12px;
          border-radius: 4px; /* Slightly rounded tag */
          display: inline-block;
        }

        @media (max-width: 1024px) {
          .ing-layout { grid-template-columns: 1fr; gap: 50px; }
          .ing-img-wrapper { height: 500px; min-height: auto; position: relative; top: 0; }
        }
      `}),(0,I.jsx)(`section`,{className:`ing-section`,ref:e,children:(0,I.jsxs)(`div`,{className:`ing-container`,children:[(0,I.jsxs)(`header`,{className:`ing-header`,children:[(0,I.jsx)(`span`,{className:`ing-eyebrow`,children:`The Botanical Source`}),(0,I.jsx)(`h2`,{className:`ing-title`,children:`Sacred Herbs, Exceptional Results`})]}),(0,I.jsxs)(`div`,{className:`ing-layout`,children:[(0,I.jsx)(`div`,{className:`ing-image-side`,children:(0,I.jsxs)(`div`,{className:`ing-img-wrapper`,children:[(0,I.jsx)(`img`,{src:og,alt:`Sacred Ayurvedic Herbs`}),(0,I.jsxs)(`div`,{className:`ing-img-caption`,children:[(0,I.jsx)(`strong`,{children:`100%`}),(0,I.jsx)(`span`,{children:`Pure Botanical Extracts`})]})]})}),(0,I.jsx)(`div`,{className:`ing-list-side`,children:sg.map(e=>(0,I.jsxs)(`div`,{className:`ing-herb-item`,children:[(0,I.jsxs)(`div`,{className:`ing-herb-header`,children:[(0,I.jsx)(`span`,{className:`ing-herb-name`,children:e.name}),(0,I.jsx)(`span`,{className:`ing-herb-latin`,children:e.latin})]}),(0,I.jsx)(`p`,{className:`ing-herb-benefit`,children:e.benefit}),(0,I.jsxs)(`div`,{className:`ing-herb-tag`,children:[`Formulated In: `,e.products]})]},e.id))})]})]})})]})}function lg(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(eg,{}),(0,I.jsx)(ng,{}),(0,I.jsx)(rg,{}),(0,I.jsx)(Xh,{}),(0,I.jsx)(ag,{}),(0,I.jsx)(cg,{})]})}var ug=`/Nithiya-Ayurveda/assets/all-BwO16_Fo.png`;function dg(e,t=.15){let[n,r]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:t});return e.current&&n.observe(e.current),()=>n.disconnect()},[e,t]),n}function fg(){let e=(0,w.useRef)(),t=dg(e,.08);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        :root {
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-bg: #f8faf9;
          --white: #ffffff;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --transition-about: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-about {
          font-family: 'Nunito Sans', sans-serif;
          background-color: var(--white);
          color: var(--text-main);
          padding: 56px 0;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .premium-about { padding: 100px 0; }
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (min-width: 768px) {
          .about-container { padding: 0 32px; }
        }

        /* Mobile-first: stack vertically */
        .about-wrapper {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: stretch;
        }

        /* Desktop: side by side */
        @media (min-width: 1024px) {
          .about-wrapper {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 80px;
            align-items: center;
          }
        }

        /* Image Column */
        .image-side {
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition-about);
        }

        @media (min-width: 1024px) {
          .image-side {
            transform: translateX(-30px);
          }
        }

        .image-side.visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .main-img-container {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: visible;
        }

        .main-img-container img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          max-height: 380px;
          object-fit: cover;
        }

        @media (min-width: 1024px) {
          .main-img-container img {
            max-height: none;
          }
        }

        .years-badge {
          position: absolute;
          bottom: 24px;
          right: -10px;
          width: 76px;
          height: 76px;
          background: var(--white);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          z-index: 10;
          animation: float-badge 4s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .years-badge { right: -14px; width: 86px; height: 86px; }
        }

        .years-n { font-size: 1.3rem; font-weight: 800; color: var(--dark-green); line-height: 1; }
        .years-t { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; color: var(--soft-green); letter-spacing: 1px; }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Content Column */
        .content-side {
          display: flex;
          flex-direction: column;
          gap: 22px;
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition-about);
          transition-delay: 0.15s;
        }

        @media (min-width: 1024px) {
          .content-side {
            transform: translateX(30px);
          }
        }

        .content-side.visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .content-header {
          border-left: 3px solid var(--soft-green);
          padding-left: 16px;
        }

        .content-header h2 {
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: 400;
          color: var(--dark-green);
          line-height: 1.4;
          font-style: italic;
        }

        .main-text {
          font-size: 0.92rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .main-text strong { color: var(--dark-green); font-weight: 700; }

        /* Feature Cards */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 400px) {
          .feature-grid { grid-template-columns: 1fr; gap: 10px; }
        }

        .f-card {
          background: var(--accent-bg);
          padding: 18px 12px;
          border-radius: 10px;
          text-align: center;
          transition: var(--transition-about);
          border: 1px solid transparent;
        }

        .f-card:hover {
          background: var(--white);
          border-color: var(--soft-green);
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(31, 61, 43, 0.06);
        }

        .f-icon { font-size: 1.3rem; margin-bottom: 10px; display: block; }
        .f-title {
          font-size: 0.7rem; font-weight: 800;
          text-transform: uppercase; color: var(--dark-green);
          letter-spacing: 1.5px; margin-bottom: 6px; display: block;
        }
        .f-desc { font-size: 0.75rem; color: var(--text-muted); line-height: 1.5; }
      `}),(0,I.jsx)(`section`,{className:`premium-about`,ref:e,children:(0,I.jsx)(`div`,{className:`about-container`,children:(0,I.jsxs)(`div`,{className:`about-wrapper`,children:[(0,I.jsx)(`div`,{className:`image-side ${t?`visible`:``}`,children:(0,I.jsxs)(`div`,{className:`main-img-container`,children:[(0,I.jsx)(`img`,{src:ug,alt:`Nithya Ayurveda Heritage`}),(0,I.jsxs)(`div`,{className:`years-badge`,children:[(0,I.jsx)(`span`,{className:`years-n`,children:`6+`}),(0,I.jsx)(`span`,{className:`years-t`,children:`Years`})]})]})}),(0,I.jsxs)(`div`,{className:`content-side ${t?`visible`:``}`,children:[(0,I.jsx)(`div`,{className:`content-header`,children:(0,I.jsx)(`h2`,{children:`Where the science of life meets the art of living well`})}),(0,I.jsxs)(`div`,{className:`main-text`,children:[(0,I.jsxs)(`p`,{children:[`At `,(0,I.jsx)(`strong`,{children:`Nithya Ayurveda`}),`, we carry forward a lineage of healing that stretches back thousands of years. Founded on the sacred principles of Ayurveda — the world's oldest living wellness system — we bring authentic, personalised care to each soul who walks through our doors.`]}),(0,I.jsx)(`br`,{}),(0,I.jsxs)(`p`,{children:[`Our physicians are trained in `,(0,I.jsx)(`strong`,{children:`classical Kerala traditions`}),`, blending time-honoured treatments with a deep understanding of modern health challenges. Every herb we use is ethically sourced.`]})]}),(0,I.jsxs)(`div`,{className:`feature-grid`,children:[(0,I.jsxs)(`div`,{className:`f-card`,children:[(0,I.jsx)(`span`,{className:`f-icon`,children:`🌿`}),(0,I.jsx)(`span`,{className:`f-title`,children:`Authentic`}),(0,I.jsx)(`p`,{className:`f-desc`,children:`Classical Kerala Panchakarma traditions`})]}),(0,I.jsxs)(`div`,{className:`f-card`,children:[(0,I.jsx)(`span`,{className:`f-icon`,children:`🌱`}),(0,I.jsx)(`span`,{className:`f-title`,children:`Natural`}),(0,I.jsx)(`p`,{className:`f-desc`,children:`Pure herbs, ethically sourced`})]}),(0,I.jsxs)(`div`,{className:`f-card`,children:[(0,I.jsx)(`span`,{className:`f-icon`,children:`🌸`}),(0,I.jsx)(`span`,{className:`f-title`,children:`Holistic`}),(0,I.jsx)(`p`,{className:`f-desc`,children:`Mind, body & spirit as one`})]})]})]})]})})})]})}var pg=[{id:1,name:`HEMP Pain Relief Spray`,tagline:`Ayurvedic Rapid Relief for Muscular & Joint Pain`,description:`Powered by Cannabis Sativa Seed Oil — a potent Ayurvedic formulation for fast-acting relief from body ache, back pain, neck & cervical pain, muscle sprain, sports-related injuries, and joint stiffness. Ideal for use after physiotherapy sessions.`,usp:`Cannabis Sativa Seed Oil`,uspHighlight:`Cannabis Sativa (Hemp) Seed Oil — clinically valued for its anti-inflammatory and analgesic properties. Helps soothe inflamed muscles, supports joint comfort, and enables deeper penetration of co-actives for rapid muscular relief.`,benefits:[`Hemp Seed Oil soothes inflamed muscles & supports joint tissue comfort`,`Ashwagandha provides anti-inflammatory action & relieves muscle fatigue`,`Wintergreen Oil delivers rapid cooling sensation & eases pain perception`,`Castor Oil supports deeper tissue relaxation`,`Ajwain improves local circulation & relieves muscular tension`,`Sesame Oil enhances penetration of actives & nourishes joints`],useCases:`Body Ache · Back Pain · Neck & Cervical Pain · Headache (External Application) · Muscle Sprain & Strain · Sports Injuries · Joint Stiffness · Post-Physiotherapy Recovery`,ingredients:`Cannabis Sativa Seed Oil 1 ml, Ashwagandha (Withania Somnifera) 50 mg, Castor Oil (Ricinus Communis) 50 mg, Wintergreen Oil (Gaultheria Fragrantissima) 0.5 ml, Ajwain (Trachyspermum Ammi) 50 mg, Sesame Oil (Sesamum Indicum) q.s.`,mrp:299,discount:12,icon:`spray`,category:`Pain & Mobility`,rating:4.5,reviewCount:128},{id:2,name:`OVUCARE Tablets`,tagline:`Ayurvedic Support for Women's Reproductive Health`,description:`A classical Ayurvedic formulation with Sootikabharan Rasa and Latakaranja to support hormonal balance, healthy ovarian function, and regular menstrual cycles. A trusted supportive element in PCOD/PCOS management.`,usp:`Sootikabharan Rasa (Suvarnayukta)`,uspHighlight:`Sootikabharan Rasa (Suvarnayukta) — a classical Ayurvedic formulation traditionally indicated in gynecological disorders, supporting reproductive tissue nourishment and hormonal equilibrium.`,benefits:[`Latakaranja helps maintain hormonal balance & supports ovarian function`,`Sootikabharan Rasa traditionally used in gynecological disorders`,`Karpasa supports healthy menstrual physiology & reproductive function`,`Shatahva supports uterine health & hormonal rhythms`,`Shunthi improves digestion & enhances absorption of herbs`,`Maricha & Pippali support bioavailability & metabolic balance`],useCases:`Anovulatory Cycles · Irregular Menstrual Cycles · Oligomenorrhea · Hormonal Imbalance · PCOD / PCOS Management · Female Infertility (Supportive Therapy)`,ingredients:`Sootikabharan Rasa (Suvarnayukta) 10 mg, Latakaranja (Caesalpinia bonduc) Sd. Ghana 180 mg, Shatahva (Anethum sowa) Fr. 60 mg, Karpasa (Gossypium herbaceum) Rt. 50 mg, Shunthi (Zingiber officinale) Rz. 16.666 mg, Maricha (Piper nigrum) Fr. 16.666 mg, Pippali (Piper longum) Fr. 16.666 mg`,mrp:340,discount:12,pack:`30 Tablets`,icon:`flower`,category:`Women's Wellness`,rating:4.7,reviewCount:214},{id:3,name:`Vajra-X Capsules`,tagline:`Ayurvedic Support for Strength, Stamina & Confidence`,description:`Formulated with L-Arginine and potent Ayurvedic herbs, Vajra-X supports stamina, sexual performance, and overall male vitality. Helps with erectile dysfunction and premature ejaculation. Available as a single pack or the recommended pack of 3 for best results.`,usp:`L-Arginine for Nitric Oxide Support`,uspHighlight:`L-Arginine — a key amino acid that boosts nitric oxide production, supporting healthy penile blood circulation, stamina, and sustained performance.`,benefits:[`L-Arginine supports nitric oxide production & penile blood circulation`,`Mucana Pruriens helps maintain libido, testosterone & sperm quality`,`Gokshura supports sexual vigour & reproductive strength`,`Musli — traditional aphrodisiac supporting stamina & endurance`,`Shatavari supports reproductive tissue health & hormonal balance`,`Ashwagandha — adaptogenic herb for stress-related sexual support`],useCases:`Erectile Dysfunction · Premature Ejaculation · Reduced Libido · Male Sexual Weakness · Performance Anxiety · Stress-related Sexual Dysfunction · General Male Vitality`,ingredients:`L-Arginine 10 mg, Mucana Pruriens 50 mg, Gokshura 100 mg, Pruiens 50 mg, Musli 50 mg, Shatavari 100 mg, Ashwagandha 50 mg`,mrp:212,discount:12,pack:`Pack of 3 Recommended`,icon:`bolt`,category:`Men's Vitality`,rating:4.6,reviewCount:189},{id:4,name:`Kufrida Cough Syrup`,tagline:`Natural Support for Clear Breathing`,description:`A classical Ayurvedic cough syrup blending Yasthimadhu, Tulsi, Vasaka, and Menthol for multi-action respiratory relief. Helps with dry cough, throat irritation, chest congestion, and supports overall lung wellness and clear breathing.`,usp:`Yasthimadhu + Tulsi + Vasaka Triple Action`,uspHighlight:`Yasthimadhu soothes throat irritation, Vasaka clears the airways, and Tulsi strengthens respiratory immunity — a classical triple-action combination for lasting lung wellness.`,benefits:[`Yasthimadhu soothes throat irritation & provides relief in dry cough`,`Vasaka traditionally used for respiratory wellness & clear airways`,`Tulsi supports respiratory immunity & seasonal adaptation`,`Kantakari helps balance cough tendencies & supports breathing`,`Navsagar helps loosen mucus & aids chest comfort`,`Menthol & Nilgiri Oil provide cooling sensation & instant freshness`],useCases:`Dry Cough · Productive Cough · Throat Irritation · Common Cold · Chest Congestion · Seasonal Respiratory Discomfort · Lung Wellness`,ingredients:`Yasthimadhu 450 mg, Vasaka 450 mg, Tulsi 450 mg, Navsagar 200 mg, Kantakari 150 mg, Trikatu 150 mg, Menthol 6 mg, Nilgiri Oil 0.06 ml`,mrp:89,discount:12,icon:`leaf`,category:`Respiratory Care`,rating:4.4,reviewCount:97}],mg={spray:`/Nithiya-Ayurveda/assets/hemp-BXCP6J8z.png`,flower:`/Nithiya-Ayurveda/assets/ovucare-Ba_UKMdh.png`,bolt:`/Nithiya-Ayurveda/assets/vajra-CM-B_HSJ.png`,leaf:`/Nithiya-Ayurveda/assets/kufrida-Ba58riCN.png`};function hg(e,t=.15){let[n,r]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:t});return e.current&&n.observe(e.current),()=>n.disconnect()},[e,t]),n}var gg=[`All`,...Array.from(new Set(pg.map(e=>e.category)))];function _g({rating:e,size:t=13}){let n=Math.floor(e),r=e%1>=.5;return(0,I.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:2},children:[1,2,3,4,5].map(e=>(0,I.jsxs)(`svg`,{viewBox:`0 0 24 24`,style:{width:t,height:t,color:`#6bbf59`,flexShrink:0},children:[(0,I.jsx)(`defs`,{children:e===n+1&&r&&(0,I.jsxs)(`linearGradient`,{id:`hg-${e}-${t}`,x1:`0`,x2:`1`,y1:`0`,y2:`0`,children:[(0,I.jsx)(`stop`,{offset:`50%`,stopColor:`currentColor`}),(0,I.jsx)(`stop`,{offset:`50%`,stopColor:`transparent`})]})}),(0,I.jsx)(`polygon`,{points:`12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26`,fill:e<=n?`currentColor`:e===n+1&&r?`url(#hg-${e}-${t})`:`none`,stroke:`currentColor`,strokeWidth:`1.5`})]},e))})}function vg({productId:e}){let t=`nithya_rating_${e}`,[n,r]=(0,w.useState)(()=>{try{return parseInt(localStorage.getItem(t))||0}catch{return 0}}),[i,a]=(0,w.useState)(0),[o,s]=(0,w.useState)(()=>{try{return!!localStorage.getItem(t)}catch{return!1}}),[c,l]=(0,w.useState)(()=>{try{return JSON.parse(localStorage.getItem(`nithya_all_ratings_${e}`))||[]}catch{return[]}}),[u,d]=(0,w.useState)(!1),[f,p]=(0,w.useState)(``),[m,h]=(0,w.useState)(0),g=c.length>0?(c.reduce((e,t)=>e+t.stars,0)/c.length).toFixed(1):null,_=[5,4,3,2,1].map(e=>({star:e,count:c.filter(t=>t.stars===e).length}));return(0,I.jsxs)(`div`,{className:`rw-wrap`,children:[(0,I.jsxs)(`div`,{className:`rw-header`,children:[(0,I.jsxs)(`div`,{className:`rw-title-block`,children:[(0,I.jsx)(`span`,{className:`rw-label`,children:`Customer Reviews`}),g&&(0,I.jsxs)(`div`,{className:`rw-avg-row`,children:[(0,I.jsx)(`span`,{className:`rw-avg-num`,children:g}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(_g,{rating:parseFloat(g),size:11}),(0,I.jsxs)(`span`,{className:`rw-total`,children:[c.length,` rating`,c.length===1?``:`s`]})]})]})]}),o?(0,I.jsxs)(`div`,{className:`rw-your-rating`,children:[(0,I.jsx)(`span`,{className:`rw-yr-label`,children:`Your Rating`}),(0,I.jsx)(_g,{rating:n,size:12})]}):(0,I.jsx)(`button`,{className:`rw-rate-btn`,onClick:()=>d(!0),children:`Rate Product`})]}),c.length>0&&(0,I.jsx)(`div`,{className:`rw-dist`,children:_.map(({star:e,count:t})=>(0,I.jsxs)(`div`,{className:`rw-dist-row`,children:[(0,I.jsxs)(`span`,{className:`rw-dist-star`,children:[e,`★`]}),(0,I.jsx)(`div`,{className:`rw-dist-bar-bg`,children:(0,I.jsx)(`div`,{className:`rw-dist-bar-fill`,style:{width:`${c.length?t/c.length*100:0}%`}})}),(0,I.jsx)(`span`,{className:`rw-dist-count`,children:t})]},e))}),u&&(0,I.jsxs)(`div`,{className:`rw-form`,children:[(0,I.jsx)(`div`,{className:`rw-form-title`,children:`Share Your Experience`}),(0,I.jsxs)(`div`,{className:`rw-star-picker`,children:[[1,2,3,4,5].map(e=>(0,I.jsx)(`button`,{className:`rw-sp-btn ${(i||m)>=e?`active`:``}`,onMouseEnter:()=>a(e),onMouseLeave:()=>a(0),onClick:()=>h(e),children:`★`},e)),m>0&&(0,I.jsx)(`span`,{className:`rw-star-label`,children:[``,`Poor`,`Fair`,`Good`,`Very Good`,`Excellent`][m]})]}),(0,I.jsx)(`textarea`,{className:`rw-textarea`,placeholder:`Write a short review (optional)...`,value:f,onChange:e=>p(e.target.value),rows:3}),(0,I.jsxs)(`div`,{className:`rw-form-actions`,children:[(0,I.jsx)(`button`,{className:`rw-cancel-btn`,onClick:()=>d(!1),children:`Cancel`}),(0,I.jsx)(`button`,{className:`rw-submit-btn ${m?`active`:``}`,onClick:()=>{if(!m)return;let n={stars:m,review:f.trim(),date:new Date().toLocaleDateString(`en-IN`)},i=[...c,n];l(i),r(m),s(!0),d(!1);try{localStorage.setItem(t,String(m)),localStorage.setItem(`nithya_all_ratings_${e}`,JSON.stringify(i))}catch{}},disabled:!m,children:`Submit`})]})]}),c.length>0&&!u&&(0,I.jsx)(`div`,{className:`rw-reviews`,children:c.slice(-3).reverse().map((e,t)=>(0,I.jsxs)(`div`,{className:`rw-review-card`,children:[(0,I.jsxs)(`div`,{className:`rw-review-top`,children:[(0,I.jsx)(_g,{rating:e.stars,size:10}),(0,I.jsx)(`span`,{className:`rw-review-date`,children:e.date})]}),e.review&&(0,I.jsx)(`p`,{className:`rw-review-text`,children:e.review})]},t))})]})}var yg=`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

  :root {
    --gd: #1f3d2b;
    --gf: #2a5239;
    --gm: #3a7a50;
    --gs: #6bbf59;
    --gsl: #92d47f;
    --gm2: #d4edcc;
    --gp: #eaf5e5;
    --gt: #f2faf0;
    --white: #ffffff;
    --off: #f7fbf6;
    --card: #ffffff;
    --text: #152217;
    --tbody: #2c3e2f;
    --tmuted: #5c7063;
    --tlight: #8fa896;
    --border: rgba(107,191,89,0.16);
    --borderc: rgba(31,61,43,0.08);
    --sh-sm: 0 2px 12px rgba(31,61,43,0.07);
    --sh-md: 0 6px 24px rgba(31,61,43,0.10);
    --sh-lg: 0 16px 48px rgba(31,61,43,0.13);
    --gold: #b8923a;
    --gold-l: #d4b06a;
  }

  * { box-sizing: border-box; }

  .prd-section {
    background: var(--off);
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    font-family: 'Nunito Sans', system-ui, sans-serif;
    color: var(--tbody);
  }

  .prd-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
  .prd-bg-grad {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 0% 0%, rgba(107,191,89,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 100% 100%, rgba(31,61,43,0.03) 0%, transparent 55%);
  }

  .prd-inner {
    position: relative; z-index: 1;
    max-width: 1160px; margin: 0 auto;
    padding: 0 28px 72px;
  }

  /* ── HERO ── */
  .prd-hero { text-align: center; padding: 48px 0 32px; }

  .prd-eyebrow {
    display: inline-flex; align-items: center; gap: 9px;
    font-size: 0.6rem; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gm); margin-bottom: 10px;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .prd-eyebrow::before, .prd-eyebrow::after {
    content: ''; display: block; width: 18px; height: 1.5px;
    background: var(--gs); border-radius: 2px;
  }
  .prd-hero.vis .prd-eyebrow { opacity: 1; transform: translateY(0); }

  .prd-title {
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(26px, 3.5vw, 44px);
    font-weight: 700; color: var(--gd);
    line-height: 1.1; margin: 0 0 10px;
    letter-spacing: -0.025em;
    opacity: 0; transform: translateY(16px);
    transition: opacity .7s ease .08s, transform .7s ease .08s;
  }
  .prd-title .accent { color: var(--gs); }
  .prd-hero.vis .prd-title { opacity: 1; transform: translateY(0); }

  .prd-subtitle {
    font-size: 0.84rem; font-weight: 400; color: var(--tmuted);
    max-width: 420px; margin: 0 auto 24px; line-height: 1.8;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease .18s, transform .6s ease .18s;
  }
  .prd-hero.vis .prd-subtitle { opacity: 1; transform: translateY(0); }

  .filter-bar {
    display: flex; align-items: center; justify-content: center; gap: 7px; flex-wrap: wrap;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease .28s, transform .6s ease .28s;
  }
  .prd-hero.vis .filter-bar { opacity: 1; transform: translateY(0); }

  .filter-tab {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
    color: var(--tmuted); background: var(--white);
    border: 1.5px solid var(--borderc); padding: 7px 18px;
    cursor: pointer; border-radius: 100px;
    transition: all .22s ease;
    box-shadow: var(--sh-sm);
  }
  .filter-tab:hover { color: var(--gd); border-color: var(--gs); background: var(--gp); }
  .filter-tab.active {
    background: var(--gd); border-color: var(--gd); color: #fff;
    box-shadow: 0 4px 14px rgba(31,61,43,0.22);
  }

  .prd-orn {
    display: flex; align-items: center; justify-content: center; gap: 9px;
    margin-bottom: 22px;
    opacity: 0; transition: opacity .6s ease .22s;
  }
  .prd-hero.vis .prd-orn { opacity: 1; }
  .prd-orn-line { width: 40px; height: 1.5px; background: linear-gradient(90deg, transparent, var(--gs)); border-radius: 2px; }
  .prd-orn-line.r { background: linear-gradient(90deg, var(--gs), transparent); }
  .prd-orn-icon { font-size: 0.8rem; color: var(--gs); letter-spacing: 5px; }

  /* ── PRODUCT LIST ── */
  .prd-list { display: flex; flex-direction: column; gap: 20px; }

  /* ── PRODUCT CARD ── */
  .pc-card-outer {
    background: var(--white);
    border: 1px solid var(--borderc);
    border-radius: 18px;
    box-shadow: var(--sh-sm);
    overflow: hidden;
    opacity: 0; transform: translateY(18px);
    transition: opacity .55s ease, transform .55s ease, box-shadow .3s ease, border-color .3s ease;
    /* overflow guard */
    min-width: 0;
    max-width: 100%;
  }
  .pc-card-outer.pc-vis { opacity: 1; transform: translateY(0); }
  .pc-card-outer:hover { box-shadow: var(--sh-md); border-color: var(--border); }

  /* TWO-COLUMN GRID */
  .pc-card {
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: 0;
    min-width: 0;
  }

  /* ── LEFT: IMAGE PANEL ── */
  .pc-img-panel {
    position: relative;
    background: linear-gradient(145deg, var(--gt) 0%, var(--gm2) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 36px 24px;
    border-right: 1px solid var(--borderc);
    gap: 16px;
    min-height: 420px;
    min-width: 0;
  }

  /* ── BIGGER IMAGE WRAP ── */
  .pc-img-wrap {
    position: relative;
    width: 256px;
    height: 256px;
    flex-shrink: 0;
  }

  .pc-img-circle {
    position: absolute; inset: 0; border-radius: 50%;
    background: radial-gradient(circle at 36% 28%, rgba(255,255,255,0.92) 0%, rgba(212,237,204,0.65) 55%, rgba(184,222,168,0.45) 100%);
    box-shadow:
      0 18px 52px rgba(31,61,43,0.18),
      0 4px 16px rgba(31,61,43,0.10),
      inset 0 1px 0 rgba(255,255,255,0.95);
    transition: box-shadow .4s ease, transform .4s ease;
  }
  .pc-card-outer:hover .pc-img-circle {
    box-shadow: 0 24px 64px rgba(31,61,43,0.24), 0 6px 20px rgba(31,61,43,0.12), inset 0 1px 0 rgba(255,255,255,0.95);
    transform: scale(1.03);
  }

  .pc-img-ring {
    position: absolute; inset: -10px; border-radius: 50%;
    border: 1px dashed rgba(107,191,89,0.3);
    animation: ringRotate 50s linear infinite;
  }
  .pc-img-ring2 {
    position: absolute; inset: -20px; border-radius: 50%;
    border: 1px solid rgba(107,191,89,0.1);
    animation: ringRotate 80s linear infinite reverse;
  }
  @keyframes ringRotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }

  .pc-img-frame {
    position: absolute; inset: 0; border-radius: 50%; overflow: hidden;
  }
  .pc-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s cubic-bezier(.22,1,.36,1);
  }
  .pc-card-outer:hover .pc-img { transform: scale(1.06); }

  .pc-emoji { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 68px; }

  /* Standard USP badge */
  .pc-img-badge {
    background: var(--gd); color: #fff;
    font-size: 0.54rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
    padding: 6px 16px; border-radius: 100px; white-space: nowrap;
    box-shadow: 0 4px 14px rgba(31,61,43,0.28);
    text-align: center; max-width: 260px; line-height: 1.5;
  }
  .pc-img-badge span { color: var(--gsl); }

  /* Hemp special bombarded USP badge */
  .pc-img-badge.usp-hemp {
    background: linear-gradient(135deg, #0f2418 0%, #1f4d2e 100%);
    border: 1.5px solid rgba(107,191,89,0.45);
    font-size: 0.58rem;
    padding: 8px 20px;
    letter-spacing: 0.12em;
  }

  .pc-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 64px; font-weight: 400; line-height: 1;
    color: rgba(31,61,43,0.06); user-select: none;
    position: absolute; bottom: 12px; right: 16px;
  }

  /* ── RIGHT: CONTENT PANEL ── */
  .pc-content {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    min-width: 0;
  }

  .pc-top-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }

  .pc-category {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.58rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--tmuted); border: 1.5px solid rgba(107,191,89,0.22);
    padding: 3px 11px; border-radius: 100px;
    background: var(--gp);
  }
  .pc-category::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--gs); }

  .pc-name {
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 700; color: var(--gd);
    line-height: 1.15; margin: 0; letter-spacing: -0.02em;
    word-break: break-word;
  }
  .pc-name .accent { color: var(--gs); }

  .pc-tagline {
    font-size: 0.76rem; font-weight: 500; color: var(--gm);
    letter-spacing: 0.03em; font-style: italic; margin: -4px 0 0;
    word-break: break-word;
  }

  .pc-rating-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
  .pc-rating-val { font-weight: 700; font-size: 0.85rem; color: var(--text); }
  .pc-rating-count { font-size: 0.68rem; color: var(--tmuted); font-weight: 400; }

  .pc-sep { height: 1px; background: var(--borderc); margin: 0; }

  .pc-desc {
    font-size: 0.8rem; font-weight: 400; color: var(--tmuted);
    line-height: 1.75; margin: 0;
    word-break: break-word; overflow-wrap: break-word;
  }

  /* Hemp bombarded feature badges */
  .pc-hemp-usp-strip { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
  .pc-hemp-badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.57rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
    color: var(--gd); background: linear-gradient(135deg, #cdf2be, #aae594);
    border: 1.5px solid rgba(107,191,89,0.45);
    padding: 4px 12px; border-radius: 100px;
    box-shadow: 0 2px 8px rgba(107,191,89,0.18);
  }
  .pc-hemp-badge::before { content: '🌿'; font-size: 0.65rem; }

  /* USP highlight block */
  .pc-usp-highlight {
    background: linear-gradient(135deg, var(--gd) 0%, var(--gf) 100%);
    border-radius: 8px; padding: 10px 14px;
  }
  .pc-usp-hl-label {
    font-size: 0.54rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--gsl); display: block; margin-bottom: 4px;
  }
  .pc-usp-hl-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.88rem; font-weight: 400; color: rgba(255,255,255,0.85);
    line-height: 1.6; font-style: italic;
    word-break: break-word; overflow-wrap: break-word;
  }

  /* Hemp USP highlight */
  .pc-usp-highlight.usp-hemp-hl {
    background: linear-gradient(135deg, #0c1f12 0%, #1a4228 50%, #2a6040 100%);
    border: 1.5px solid rgba(107,191,89,0.32);
    padding: 14px 18px;
    position: relative; overflow: hidden;
  }
  .pc-usp-highlight.usp-hemp-hl::after {
    content: '';
    position: absolute; top: -40px; right: -40px;
    width: 120px; height: 120px; border-radius: 50%;
    background: radial-gradient(circle, rgba(107,191,89,0.14) 0%, transparent 70%);
    pointer-events: none;
  }
  .pc-usp-highlight.usp-hemp-hl .pc-usp-hl-label {
    color: #a8e890; font-size: 0.6rem; letter-spacing: 0.22em;
  }
  .pc-usp-highlight.usp-hemp-hl .pc-usp-hl-text {
    font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 500;
  }

  .pc-use-cases {
    font-size: 0.74rem; font-weight: 400; color: var(--tmuted); line-height: 1.7;
    padding: 8px 12px;
    background: var(--gt); border-left: 2.5px solid var(--gs); border-radius: 0 7px 7px 0;
    word-break: break-word; overflow-wrap: break-word;
  }
  .pc-use-label {
    font-weight: 700; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gm); display: block; margin-bottom: 3px;
  }

  .pc-benefits { display: flex; flex-direction: column; gap: 4px; }
  .pc-benefit-row {
    display: flex; align-items: flex-start; gap: 8px;
    font-size: 0.76rem; font-weight: 400; color: var(--tbody); line-height: 1.5;
    word-break: break-word; overflow-wrap: break-word;
  }
  .pc-benefit-mark {
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--gp); border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px;
  }
  .pc-benefit-mark svg { width: 8px; height: 8px; color: var(--gm); }

  .pc-composition {
    background: var(--off); border: 1px solid var(--borderc);
    border-radius: 7px; padding: 10px 12px;
  }
  .pc-comp-label {
    font-size: 0.56rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase;
    color: var(--gm); display: block; margin-bottom: 4px;
  }
  .pc-comp-text {
    font-size: 0.7rem; font-weight: 400; color: var(--tmuted); line-height: 1.7;
    word-break: break-word; overflow-wrap: break-word;
  }

  .pc-footer {
    display: flex; align-items: center; justify-content: space-between; gap: 14px;
    flex-wrap: wrap;
    padding-top: 10px;
    border-top: 1px solid var(--borderc);
    margin-top: 2px;
  }
  .pc-price-group { display: flex; flex-direction: column; gap: 2px; }
  .pc-price-label { font-size: 0.54rem; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; color: var(--tmuted); }
  .pc-price-row { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; }
  .pc-price {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 26px; font-weight: 700; color: var(--gd); line-height: 1;
  }
  .pc-price sup { font-size: 13px; font-weight: 500; vertical-align: super; color: var(--gd); }
  .pc-mrp { font-size: 0.72rem; font-weight: 400; color: var(--tmuted); text-decoration: line-through; }
  .pc-off-badge {
    font-size: 0.55rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
    color: #fff; background: var(--gs); padding: 2px 7px; border-radius: 100px;
  }
  .pc-pack-info { font-size: 0.62rem; color: var(--tmuted); margin-top: 1px; }

  .pc-btn-group { display: flex; align-items: center; gap: 10px; }

  .pc-add-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: #fff; background: var(--gd); border: none;
    padding: 11px 22px; cursor: pointer; border-radius: 100px;
    transition: background .25s, transform .22s, box-shadow .25s;
    box-shadow: 0 4px 14px rgba(31,61,43,0.22); white-space: nowrap;
    display: flex; align-items: center; gap: 6px;
  }
  .pc-add-btn:hover { background: var(--gf); transform: translateY(-2px); box-shadow: 0 7px 20px rgba(31,61,43,0.28); }
  .pc-add-btn.added { background: var(--gm); }
  .pc-add-btn svg { width: 13px; height: 13px; }

  /* ── RATING WIDGET ── */
  .rw-wrap {
    background: var(--off); border: 1px solid var(--borderc);
    border-radius: 9px; padding: 13px 16px; margin-top: 2px;
  }
  .rw-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
  .rw-title-block { display: flex; flex-direction: column; gap: 5px; }
  .rw-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gm); }
  .rw-avg-row { display: flex; align-items: center; gap: 7px; }
  .rw-avg-num { font-family: 'Nunito Sans', sans-serif; font-size: 20px; font-weight: 700; color: var(--gd); line-height: 1; }
  .rw-total { font-size: 0.6rem; font-weight: 400; color: var(--tmuted); display: block; margin-top: 2px; }
  .rw-rate-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--gm); background: var(--white); border: 1.5px solid var(--border);
    padding: 5px 12px; border-radius: 100px; cursor: pointer; white-space: nowrap;
    transition: all .22s; flex-shrink: 0;
  }
  .rw-rate-btn:hover { background: var(--gd); border-color: var(--gd); color: #fff; }
  .rw-your-rating { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0; }
  .rw-yr-label { font-size: 0.56rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gm); }
  .rw-dist { display: flex; flex-direction: column; gap: 3px; margin-bottom: 8px; }
  .rw-dist-row { display: flex; align-items: center; gap: 6px; }
  .rw-dist-star { font-size: 0.6rem; font-weight: 600; color: var(--gs); width: 16px; text-align: right; flex-shrink: 0; }
  .rw-dist-bar-bg { flex: 1; height: 3px; background: rgba(107,191,89,0.12); border-radius: 100px; overflow: hidden; }
  .rw-dist-bar-fill { height: 100%; background: linear-gradient(90deg, var(--gsl), var(--gs)); border-radius: 100px; transition: width .5s ease; }
  .rw-dist-count { font-size: 0.6rem; font-weight: 400; color: var(--tmuted); width: 13px; text-align: right; flex-shrink: 0; }
  .rw-form {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 8px; padding: 12px; margin-top: 7px;
  }
  .rw-form-title { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; font-weight: 500; color: var(--gd); margin-bottom: 8px; font-style: italic; }
  .rw-star-picker { display: flex; align-items: center; gap: 3px; margin-bottom: 8px; flex-wrap: wrap; }
  .rw-sp-btn { font-size: 20px; background: none; border: none; cursor: pointer; color: rgba(107,191,89,0.25); transition: color .15s, transform .15s; padding: 0; line-height: 1; }
  .rw-sp-btn.active { color: var(--gs); transform: scale(1.15); }
  .rw-star-label { font-size: 0.68rem; font-weight: 600; color: var(--gs); margin-left: 4px; }
  .rw-textarea {
    width: 100%; background: var(--off); border: 1px solid var(--borderc);
    border-radius: 6px; padding: 8px 10px;
    font-family: 'Nunito Sans', sans-serif; font-size: 0.78rem; font-weight: 400; color: var(--text);
    resize: none; outline: none; transition: border-color .22s; margin-bottom: 8px; line-height: 1.6;
  }
  .rw-textarea:focus { border-color: var(--gs); }
  .rw-textarea::placeholder { color: var(--tmuted); }
  .rw-form-actions { display: flex; gap: 7px; justify-content: flex-end; flex-wrap: wrap; }
  .rw-cancel-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--tmuted); background: transparent; border: 1px solid var(--borderc);
    padding: 6px 13px; border-radius: 100px; cursor: pointer; transition: all .22s;
  }
  .rw-cancel-btn:hover { border-color: var(--tmuted); color: var(--text); }
  .rw-submit-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: #fff; background: rgba(31,61,43,0.28); border: none;
    padding: 6px 16px; border-radius: 100px; cursor: pointer; transition: all .22s; opacity: .5;
  }
  .rw-submit-btn.active { background: var(--gd); opacity: 1; }
  .rw-submit-btn.active:hover { background: var(--gf); }
  .rw-reviews { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; border-top: 1px solid var(--borderc); padding-top: 8px; }
  .rw-review-card { background: var(--white); border-radius: 6px; padding: 8px 10px; border: 1px solid var(--borderc); }
  .rw-review-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px; flex-wrap: wrap; gap: 4px; }
  .rw-review-date { font-size: 0.56rem; font-weight: 400; color: var(--tmuted); }
  .rw-review-text { font-size: 0.72rem; font-weight: 400; color: var(--tbody); line-height: 1.55; margin: 0; word-break: break-word; overflow-wrap: break-word; }

  .prd-empty { text-align: center; padding: 56px 0; font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; color: var(--tmuted); }

  /* BOTTOM BANNER */
  .prd-banner {
    margin-top: 48px; padding: 40px 52px;
    background: linear-gradient(135deg, var(--gd) 0%, var(--gf) 60%, #1a4230 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between; gap: 28px;
    border-radius: 18px;
    box-shadow: 0 16px 48px rgba(31,61,43,0.18);
  }
  .prd-banner::before {
    content: ''; position: absolute; inset: 0; border-radius: 18px;
    background: radial-gradient(ellipse 45% 80% at 0% 50%, rgba(107,191,89,0.08) 0%, transparent 60%);
  }
  .prd-banner-text { position: relative; z-index: 1; }
  .prd-banner-text h3 {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 5px; line-height: 1.25;
  }
  .prd-banner-text h3 span { color: var(--gsl); }
  .prd-banner-text p { font-size: 0.8rem; font-weight: 400; color: rgba(255,255,255,0.5); margin: 0; }
  .prd-banner-btn {
    position: relative; z-index: 1;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--gd); background: #fff; border: none;
    padding: 12px 30px; cursor: pointer; border-radius: 100px;
    transition: box-shadow .25s, transform .22s;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12); white-space: nowrap; flex-shrink: 0;
  }
  .prd-banner-btn:hover { box-shadow: 0 7px 24px rgba(0,0,0,0.18); transform: translateY(-2px); }

  /* ══════════════════════════════════════════
     RESPONSIVE — MOBILE FIRST FIX
  ══════════════════════════════════════════ */

  @media (max-width: 1060px) {
    .pc-card { grid-template-columns: 280px 1fr; }
    .pc-img-panel { min-height: 380px; padding: 28px 18px; }
    .pc-img-wrap { width: 224px; height: 224px; }
    .pc-content { padding: 22px 24px; }
  }

  @media (max-width: 800px) {
    .prd-inner { padding: 0 16px 56px; }
    .pc-card { grid-template-columns: 220px 1fr; }
    .pc-img-panel { min-height: 320px; padding: 20px 14px; }
    .pc-img-wrap { width: 175px; height: 175px; }
    .pc-content { padding: 18px 16px; gap: 8px; }
  }

  /* Stack card at 640px — well before typical 360px mobile */
  @media (max-width: 640px) {
    .prd-inner { padding: 0 12px 48px; }
    .prd-list { gap: 14px; }

    /* Single column */
    .pc-card { grid-template-columns: 1fr; }

    /* Image panel — compact horizontal strip */
    .pc-img-panel {
      border-right: none;
      border-bottom: 1px solid var(--borderc);
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 14px;
      min-height: unset;
      padding: 20px 16px;
    }
    .pc-img-wrap { width: 110px; height: 110px; flex-shrink: 0; }
    .pc-img-ring  { inset: -6px; }
    .pc-img-ring2 { inset: -12px; }
    .pc-img-badge {
      font-size: 0.48rem; padding: 5px 10px;
      max-width: 140px; white-space: normal; text-align: center;
    }
    .pc-num { display: none; }

    /* Content */
    .pc-content { padding: 16px 14px; gap: 8px; }
    .pc-name { font-size: 17px; }
    .pc-tagline { font-size: 0.72rem; }
    .pc-desc { font-size: 0.74rem; }

    /* Hemp badges */
    .pc-hemp-usp-strip { gap: 5px; }
    .pc-hemp-badge { font-size: 0.5rem; padding: 3px 8px; }

    /* USP highlight */
    .pc-usp-highlight { padding: 10px 12px; }
    .pc-usp-hl-text { font-size: 0.82rem; }

    /* Footer — stack vertically */
    .pc-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
    .pc-btn-group { width: 100%; }
    .pc-add-btn { width: 100%; justify-content: center; padding: 12px 18px; }
    .pc-price { font-size: 22px; }

    /* Banner */
    .prd-banner { flex-direction: column; padding: 28px 20px; text-align: center; border-radius: 14px; gap: 18px; }
    .prd-banner-btn { width: 100%; }

    /* Hero */
    .prd-hero { padding: 32px 0 20px; }
    .filter-tab { padding: 6px 14px; font-size: 0.63rem; }

    /* Rating widget */
    .rw-wrap { padding: 10px 12px; }
  }

  @media (max-width: 400px) {
    .prd-inner { padding: 0 8px 40px; }
    .pc-img-panel { padding: 14px 10px; gap: 10px; }
    .pc-img-wrap { width: 88px; height: 88px; }
    .pc-img-ring  { inset: -5px; }
    .pc-img-ring2 { inset: -10px; }
    .pc-content { padding: 12px 10px; gap: 7px; }
    .pc-name { font-size: 15px; }
    .filter-tab { padding: 5px 10px; font-size: 0.58rem; }
    .pc-price { font-size: 20px; }
    .pc-hemp-badge { font-size: 0.46rem; padding: 3px 7px; }
  }
`;function bg(e,t){return Math.round(e*(1-t/100))}var xg=()=>(0,I.jsx)(`svg`,{viewBox:`0 0 10 10`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`10`,height:`10`,children:(0,I.jsx)(`path`,{d:`M1.5 5.5L3.5 7.5L8.5 2.5`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Sg=()=>(0,I.jsxs)(`svg`,{viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,I.jsx)(`path`,{d:`M3 3h2l2.5 9h7l2-6H6`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`circle`,{cx:`9`,cy:`16`,r:`1`,fill:`currentColor`}),(0,I.jsx)(`circle`,{cx:`14`,cy:`16`,r:`1`,fill:`currentColor`})]});function Cg({product:e,index:t,addToCart:n}){let r=(0,w.useRef)(),[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)(!1);(0,w.useEffect)(()=>{let e=new IntersectionObserver(([t])=>{t.isIntersecting&&(a(!0),e.disconnect())},{threshold:.04});return r.current&&e.observe(r.current),()=>e.disconnect()},[]);let c=()=>{let t=bg(e.mrp,e.discount);n({...e,price:t}),s(!0),setTimeout(()=>s(!1),1800)},l=mg[e.icon]||null,u=bg(e.mrp,e.discount),d=e.name.split(` `),f=d[d.length-1],p=d.slice(0,-1).join(` `),m=e.icon===`spray`;return(0,I.jsx)(`div`,{ref:r,className:`pc-card-outer${i?` pc-vis`:``}`,style:{transitionDelay:`${Math.min(t*.06,.18)}s`},children:(0,I.jsxs)(`div`,{className:`pc-card`,children:[(0,I.jsxs)(`div`,{className:`pc-img-panel`,children:[(0,I.jsxs)(`div`,{className:`pc-img-wrap`,children:[(0,I.jsx)(`div`,{className:`pc-img-ring2`}),(0,I.jsx)(`div`,{className:`pc-img-ring`}),(0,I.jsx)(`div`,{className:`pc-img-circle`}),(0,I.jsx)(`div`,{className:`pc-img-frame`,children:l?(0,I.jsx)(`img`,{src:l,alt:e.name,className:`pc-img`}):(0,I.jsx)(`div`,{className:`pc-emoji`,children:e.icon===`spray`?`💆`:e.icon===`flower`?`🌸`:e.icon===`bolt`?`⚡`:`🌿`})})]}),m?(0,I.jsxs)(`div`,{className:`pc-img-badge usp-hemp`,children:[`🌿 USP: `,(0,I.jsx)(`span`,{children:`Cannabis Sativa Seed Oil`})]}):e.usp&&(0,I.jsxs)(`div`,{className:`pc-img-badge`,children:[`USP: `,(0,I.jsx)(`span`,{children:e.usp})]}),(0,I.jsxs)(`div`,{className:`pc-num`,children:[`0`,t+1]})]}),(0,I.jsxs)(`div`,{className:`pc-content`,children:[(0,I.jsx)(`div`,{className:`pc-top-row`,children:e.category&&(0,I.jsx)(`span`,{className:`pc-category`,children:e.category})}),(0,I.jsxs)(`h3`,{className:`pc-name`,children:[p&&(0,I.jsxs)(I.Fragment,{children:[p,` `]}),(0,I.jsx)(`span`,{className:`accent`,children:f})]}),e.tagline&&(0,I.jsx)(`p`,{className:`pc-tagline`,children:e.tagline}),(0,I.jsxs)(`div`,{className:`pc-rating-row`,children:[(0,I.jsx)(_g,{rating:e.rating,size:12}),(0,I.jsx)(`span`,{className:`pc-rating-val`,children:e.rating?.toFixed(1)}),(0,I.jsxs)(`span`,{className:`pc-rating-count`,children:[`(`,e.reviewCount,` reviews)`]})]}),(0,I.jsx)(`div`,{className:`pc-sep`}),(0,I.jsx)(`p`,{className:`pc-desc`,children:e.description}),m&&(0,I.jsxs)(`div`,{className:`pc-hemp-usp-strip`,children:[(0,I.jsx)(`span`,{className:`pc-hemp-badge`,children:`Anti-Inflammatory`}),(0,I.jsx)(`span`,{className:`pc-hemp-badge`,children:`Rapid Pain Relief`}),(0,I.jsx)(`span`,{className:`pc-hemp-badge`,children:`Deep Tissue Action`}),(0,I.jsx)(`span`,{className:`pc-hemp-badge`,children:`Cannabis Sativa Oil`})]}),e.uspHighlight&&(0,I.jsxs)(`div`,{className:`pc-usp-highlight${m?` usp-hemp-hl`:``}`,children:[(0,I.jsx)(`span`,{className:`pc-usp-hl-label`,children:`✦ Key Active Ingredient`}),(0,I.jsx)(`div`,{className:`pc-usp-hl-text`,children:e.uspHighlight})]}),e.useCases&&(0,I.jsxs)(`div`,{className:`pc-use-cases`,children:[(0,I.jsx)(`span`,{className:`pc-use-label`,children:`Indicated For`}),e.useCases]}),e.benefits?.length>0&&(0,I.jsx)(`div`,{className:`pc-benefits`,children:e.benefits.map((e,t)=>(0,I.jsxs)(`div`,{className:`pc-benefit-row`,children:[(0,I.jsx)(`span`,{className:`pc-benefit-mark`,children:(0,I.jsx)(xg,{})}),(0,I.jsx)(`span`,{children:e})]},t))}),e.ingredients&&(0,I.jsxs)(`div`,{className:`pc-composition`,children:[(0,I.jsx)(`span`,{className:`pc-comp-label`,children:`Composition`}),(0,I.jsx)(`p`,{className:`pc-comp-text`,children:e.ingredients})]}),(0,I.jsxs)(`div`,{className:`pc-footer`,children:[(0,I.jsxs)(`div`,{className:`pc-price-group`,children:[(0,I.jsx)(`span`,{className:`pc-price-label`,children:`Offer Price`}),(0,I.jsxs)(`div`,{className:`pc-price-row`,children:[(0,I.jsxs)(`div`,{className:`pc-price`,children:[(0,I.jsx)(`sup`,{children:`₹`}),u]}),(0,I.jsxs)(`span`,{className:`pc-mrp`,children:[`₹`,e.mrp]}),(0,I.jsxs)(`span`,{className:`pc-off-badge`,children:[e.discount,`% OFF`]})]}),e.pack&&(0,I.jsx)(`span`,{className:`pc-pack-info`,children:e.pack})]}),(0,I.jsx)(`div`,{className:`pc-btn-group`,children:(0,I.jsx)(`button`,{className:`pc-add-btn${o?` added`:``}`,onClick:c,children:o?(0,I.jsx)(I.Fragment,{children:`✓ Added`}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Sg,{}),` Add to Cart`]})})})]}),(0,I.jsx)(vg,{productId:e.id})]})]})})}function wg(){let{addToCart:e}=cr(),t=(0,w.useRef)(),n=hg(t,.1),[r,i]=(0,w.useState)(`All`),a=r===`All`?pg:pg.filter(e=>e.category===r);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:yg}),(0,I.jsxs)(`section`,{className:`prd-section`,children:[(0,I.jsx)(`div`,{className:`prd-bg`,children:(0,I.jsx)(`div`,{className:`prd-bg-grad`})}),(0,I.jsxs)(`div`,{className:`prd-inner`,children:[(0,I.jsxs)(`div`,{ref:t,className:`prd-hero${n?` vis`:``}`,children:[(0,I.jsx)(`span`,{className:`prd-eyebrow`,children:`Nithya Ayurveda · Sacred Formulations`}),(0,I.jsxs)(`h1`,{className:`prd-title`,children:[`Our `,(0,I.jsx)(`span`,{className:`accent`,children:`Sacred`}),` Formulations`]}),(0,I.jsx)(`p`,{className:`prd-subtitle`,children:`Each product blends ancient Ayurvedic wisdom with modern science — crafted from ethically sourced herbs and time-honoured traditions.`}),(0,I.jsxs)(`div`,{className:`prd-orn`,children:[(0,I.jsx)(`div`,{className:`prd-orn-line`}),(0,I.jsx)(`span`,{className:`prd-orn-icon`,children:`🌿`}),(0,I.jsx)(`div`,{className:`prd-orn-line r`})]}),(0,I.jsx)(`div`,{className:`filter-bar`,children:gg.map(e=>(0,I.jsx)(`button`,{className:`filter-tab${r===e?` active`:``}`,onClick:()=>i(e),children:e},e))})]}),(0,I.jsx)(`div`,{className:`prd-list`,children:a.length===0?(0,I.jsx)(`div`,{className:`prd-empty`,children:`No products found in this category.`}):a.map((t,n)=>(0,I.jsx)(Cg,{product:t,index:n,addToCart:e},t.id))}),(0,I.jsxs)(`div`,{className:`prd-banner`,children:[(0,I.jsxs)(`div`,{className:`prd-banner-text`,children:[(0,I.jsxs)(`h3`,{children:[`Need personalised `,(0,I.jsx)(`span`,{children:`guidance?`})]}),(0,I.jsx)(`p`,{children:`Consult our Ayurvedic physicians for a tailored wellness plan crafted just for you.`})]}),(0,I.jsx)(`button`,{className:`prd-banner-btn`,onClick:()=>window.open(`https://wa.me/917972643129?text=Hello%2C%20I%20need%20personalised%20Ayurvedic%20guidance.`,`_blank`),children:`Consult Now →`})]})]})]})]})}var Tg=`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

  :root {
    --white: #FFFFFF;
    --bg-light: #F9FBFA;
    --green-dark: #1A2E28;
    --green-primary: #2D5344;
    --green-accent: #4A7360;
    --gold-muted: #B8964E;
    --text-main: #1A2E28;
    --text-body: #4A5551;
    --wa-green: #25D366;
    --call-blue: #1A73E8;
    --mail-red: #EA4335;
  }

  @keyframes ctFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ct-section {
    background: var(--white);
    position: relative;
    overflow: hidden;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
  }

  .ct-top-rule {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(45,83,68,0.1), transparent);
  }

  .ct-leaf { position: absolute; pointer-events: none; opacity: 0.04; }
  .ct-leaf.tl { top: 0; left: 0; width: 220px; transform: rotate(-10deg) translate(-20px,-20px); }
  .ct-leaf.br { bottom: 0; right: 0; width: 220px; transform: rotate(170deg) translate(-20px,-20px); }

  .ct-inner {
    position: relative; z-index: 1;
    max-width: 1100px; margin: 0 auto;
    padding: clamp(56px, 8vw, 100px) clamp(16px, 4vw, 40px);
  }

  /* HEADER */
  .ct-eyebrow {
    display: flex; align-items: center; justify-content: center;
    gap: 12px; margin-bottom: 16px;
    opacity: 0; transform: translateY(10px);
    transition: opacity .8s, transform .8s;
  }
  .ct-eyebrow.cv { opacity: 1; transform: translateY(0); }
  .ct-eyebrow-line { height: 1px; width: 40px; background: var(--gold-muted); opacity: 0.4; }
  .ct-eyebrow-text {
    font-size: 0.7rem; letter-spacing: 0.3em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
  }

  .ct-title {
    font-size: clamp(26px, 5vw, 56px); font-weight: 800;
    color: var(--green-dark); line-height: 1.15;
    text-align: center; margin: 0 0 16px;
    opacity: 0; transform: translateY(20px);
    transition: opacity .9s ease .1s, transform .9s ease .1s;
    letter-spacing: -0.02em;
  }
  .ct-title.cv { opacity: 1; transform: translateY(0); }
  .ct-title span { color: var(--green-primary); font-weight: 600; }

  .ct-title-deco {
    display: flex; align-items: center; justify-content: center;
    gap: 10px; margin-bottom: 20px;
    opacity: 0; transition: opacity .8s ease .2s;
  }
  .ct-title-deco.cv { opacity: 1; }
  .ct-deco-line { height: 1px; width: 40px; background: rgba(45,83,68,0.15); }
  .ct-deco-diamond { width: 5px; height: 5px; background: var(--gold-muted); transform: rotate(45deg); opacity: 0.6; }

  .ct-subtitle {
    font-size: clamp(0.88rem, 2vw, 1rem); font-weight: 400;
    color: var(--text-body); max-width: 500px;
    margin: 0 auto clamp(40px, 6vw, 64px); line-height: 1.7; text-align: center;
    opacity: 0; transition: opacity .9s ease .3s;
    padding: 0 8px;
  }
  .ct-subtitle.cv { opacity: 1; }

  /* GRID */
  .ct-grid {
    display: grid; grid-template-columns: 1fr 1.1fr;
    gap: clamp(24px, 4vw, 50px); align-items: start;
  }

  /* INFO CARDS */
  .ct-info-col {
    display: flex; flex-direction: column; gap: 10px;
    opacity: 0; transform: translateX(-20px);
    transition: opacity .9s ease .4s, transform .9s ease .4s;
  }
  .ct-info-col.cv { opacity: 1; transform: translateX(0); }

  .ct-info-card {
    display: flex; align-items: flex-start; gap: 16px;
    padding: clamp(16px, 2.5vw, 24px);
    border: 1px solid rgba(45,83,68,0.08);
    background: var(--white);
    border-radius: 12px;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .ct-info-card:hover {
    transform: translateY(-4px);
    border-color: var(--green-primary);
    box-shadow: 0 10px 30px rgba(26,46,40,0.06);
  }

  .ct-icon-wrap {
    width: 42px; height: 42px; min-width: 42px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; transition: all .35s;
    background: var(--bg-light); color: var(--green-primary);
  }
  .ct-info-card:hover .ct-icon-wrap { background: var(--green-primary); color: #fff; }

  .ct-info-label {
    font-size: 0.62rem; letter-spacing: 0.15em;
    color: var(--gold-muted); text-transform: uppercase; display: block; margin-bottom: 3px; font-weight: 800;
  }
  .ct-info-value {
    font-size: clamp(0.95rem, 2vw, 1.15rem); font-weight: 700;
    color: var(--green-dark); display: block; line-height: 1.3; margin-bottom: 2px;
    word-break: break-word;
  }
  .ct-info-sub {
    font-size: 0.82rem; font-weight: 400;
    color: var(--text-body); display: block;
  }

  .ct-hours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
  .ct-hours-item {
    padding: 10px;
    background: var(--bg-light);
    border-radius: 8px;
  }
  .ct-hours-day {
    font-size: 0.58rem; letter-spacing: 0.1em;
    color: var(--gold-muted); text-transform: uppercase; display: block; margin-bottom: 2px; font-weight: 800;
  }
  .ct-hours-time {
    font-size: 0.85rem; color: var(--green-dark); font-weight: 700;
  }

  /* ACTION PANEL */
  .ct-action-col {
    opacity: 0; transform: translateX(20px);
    transition: opacity .9s ease .5s, transform .9s ease .5s;
  }
  .ct-action-col.cv { opacity: 1; transform: translateX(0); }

  .ct-panel {
    background: var(--bg-light); padding: clamp(24px, 4vw, 40px);
    border-radius: 20px;
    position: relative;
    border: 1px solid rgba(45,83,68,0.05);
  }

  .ct-panel-label {
    font-size: 0.62rem; letter-spacing: 0.25em;
    color: var(--gold-muted); text-transform: uppercase;
    display: flex; align-items: center; gap: 12px; margin-bottom: 14px; font-weight: 800;
  }
  .ct-panel-label::after { content: ''; flex: 1; height: 1px; background: rgba(184,150,78,0.2); }

  .ct-panel-title {
    font-size: clamp(22px, 3.5vw, 32px); font-weight: 800;
    color: var(--green-dark); margin: 0 0 10px; line-height: 1.2;
  }

  .ct-panel-desc {
    font-size: 0.88rem; font-weight: 400;
    color: var(--text-body); line-height: 1.75; margin-bottom: clamp(20px, 3vw, 30px);
  }

  .ct-divider { height: 1px; background: rgba(45,83,68,0.1); margin-bottom: clamp(16px, 3vw, 24px); }

  .ct-action-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 14px; }

  .ct-action-btn {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    padding: clamp(14px, 2.5vw, 20px) 8px;
    border: 1px solid rgba(45,83,68,0.1);
    background: var(--white); cursor: pointer;
    border-radius: 12px;
    transition: all .3s ease;
  }
  .ct-action-btn:hover { transform: translateY(-5px); border-color: var(--green-primary); box-shadow: 0 8px 20px rgba(0,0,0,0.05); }

  .ct-action-icon {
    width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: all .3s;
  }
  .ct-action-icon.call { background: rgba(26,115,232,0.06); color: var(--call-blue); }
  .ct-action-icon.wa { background: rgba(37,211,102,0.06); color: #1aab55; }
  .ct-action-icon.mail { background: rgba(234,67,53,0.06); color: var(--mail-red); }
  .ct-action-btn:hover .ct-action-icon { transform: scale(1.1); }

  .ct-action-label {
    font-size: 0.62rem; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 800; color: var(--text-main);
  }

  .ct-book-btn {
    width: 100%; display: flex; align-items: center;
    justify-content: space-between; gap: 14px;
    padding: clamp(14px, 2vw, 18px) clamp(16px, 3vw, 24px);
    background: var(--green-primary);
    border: none; color: #fff; cursor: pointer;
    border-radius: 12px; margin-bottom: 18px;
    transition: all .3s ease;
    box-shadow: 0 6px 20px rgba(45,83,68,0.25);
  }
  .ct-book-btn:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 10px 25px rgba(45,83,68,0.35); }

  .ct-book-inner { display: flex; align-items: center; gap: 12px; }
  .ct-book-label {
    font-size: 0.78rem; letter-spacing: 0.05em;
    text-transform: uppercase; display: block; margin-bottom: 2px; font-weight: 800;
  }
  .ct-book-sub {
    font-size: 0.72rem; font-weight: 400; opacity: 0.9;
  }

  .ct-promise-strip {
    display: flex; align-items: center; justify-content: center;
    gap: clamp(12px, 2vw, 20px); padding-top: 18px;
    border-top: 1px solid rgba(45,83,68,0.08);
    flex-wrap: wrap;
  }
  .ct-promise-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.72rem; font-weight: 600; color: var(--text-body);
  }
  .ct-promise-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green-primary); flex-shrink: 0; }

  /* ── MAP SECTION ── */
  .ct-map-section {
    margin: clamp(48px, 7vw, 80px) 0 0;
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;
  }
  .ct-map-section.cv { opacity: 1; transform: translateY(0); }

  .ct-map-header {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 20px;
  }
  .ct-map-eyebrow {
    font-size: 0.62rem; letter-spacing: 0.25em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
    white-space: nowrap;
  }
  .ct-map-line { flex: 1; height: 1px; background: rgba(45,83,68,0.1); }

  .ct-map-wrapper {
    position: relative;
    border-radius: 20px; overflow: hidden;
    border: 1px solid rgba(45,83,68,0.1);
    box-shadow: 0 20px 60px rgba(26,46,40,0.1);
  }
  .ct-map-wrapper::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, var(--green-primary), rgba(45,83,68,0.5), transparent);
    z-index: 2;
  }
  .ct-map-frame {
    display: block; width: 100%; height: clamp(300px, 45vw, 460px);
    border: none; filter: saturate(0.9) contrast(0.95);
    transition: filter 0.4s;
  }
  .ct-map-frame:hover { filter: saturate(1.05) contrast(1); }

  /* Map overlay info */
  .ct-map-overlay {
    position: absolute; bottom: 20px; left: 20px;
    background: rgba(255,255,255,0.97);
    border: 1px solid rgba(45,83,68,0.12);
    border-radius: 12px; padding: 14px 18px;
    box-shadow: 0 8px 24px rgba(26,46,40,0.1);
    max-width: 280px; z-index: 3;
    backdrop-filter: blur(12px);
  }
  .ct-map-overlay-title {
    font-size: 0.8rem; font-weight: 800;
    color: var(--green-dark); margin-bottom: 4px;
    display: flex; align-items: center; gap: 8px;
  }
  .ct-map-overlay-title::before {
    content: '';
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--green-primary); flex-shrink: 0;
  }
  .ct-map-overlay-addr {
    font-size: 0.72rem; color: var(--text-body);
    line-height: 1.5; margin-bottom: 10px;
  }
  .ct-map-directions-btn {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 0.65rem; font-weight: 800;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--green-primary); text-decoration: none;
    padding: 7px 14px; border-radius: 8px;
    background: rgba(45,83,68,0.07);
    border: 1px solid rgba(45,83,68,0.15);
    transition: all 0.3s;
  }
  .ct-map-directions-btn:hover {
    background: var(--green-primary); color: #fff;
  }
  .ct-map-directions-btn svg { width: 12px; height: 12px; }

  /* QUOTE */
  .ct-quote {
    text-align: center; padding: clamp(40px, 6vw, 70px) 0 0;
    opacity: 0; transition: opacity .9s ease .4s;
  }
  .ct-quote.cv { opacity: 1; }
  .ct-quote-text {
    font-size: clamp(15px, 2.5vw, 24px); font-weight: 400; font-style: italic;
    color: var(--green-dark); max-width: 650px; margin: 0 auto 16px; line-height: 1.6;
  }
  .ct-quote-attr {
    font-size: 0.68rem; letter-spacing: 0.3em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
  }

  .ct-bot-rule {
    height: 1px; width: 100%; margin-top: 40px;
    background: linear-gradient(90deg, transparent, rgba(45,83,68,0.05), transparent);
  }

  /* ═══════════════════════════════════════
     TABLET (≤ 900px)
  ═══════════════════════════════════════ */
  @media (max-width: 900px) {
    .ct-grid { grid-template-columns: 1fr; gap: 28px; }
    .ct-info-col { transform: translateX(0); transition: opacity .9s ease .4s; }
    .ct-action-col { transform: translateX(0); transition: opacity .9s ease .5s; }
    .ct-leaf.tl { width: 150px; }
    .ct-leaf.br { width: 150px; }
    .ct-map-overlay { max-width: 220px; }
  }

  /* ═══════════════════════════════════════
     MOBILE (≤ 640px)
  ═══════════════════════════════════════ */
  @media (max-width: 640px) {
    .ct-info-card { gap: 12px; }
    .ct-icon-wrap { width: 36px; height: 36px; min-width: 36px; border-radius: 8px; }
    .ct-icon-wrap svg { width: 16px; height: 16px; }
    .ct-hours-grid { gap: 6px; }
    .ct-hours-item { padding: 8px; }
    .ct-hours-time { font-size: 0.8rem; }
    .ct-panel { border-radius: 16px; }
    .ct-action-row { gap: 8px; }
    .ct-action-btn { padding: 12px 6px; border-radius: 10px; }
    .ct-action-icon { width: 36px; height: 36px; }
    .ct-action-icon svg { width: 17px; height: 17px; }
    .ct-action-label { font-size: 0.58rem; }
    .ct-promise-strip { gap: 10px; }
    .ct-promise-item { font-size: 0.68rem; }
    .ct-leaf { display: none; }
    .ct-map-overlay { display: none; }
    .ct-map-frame { height: 260px; }
    .ct-map-wrapper { border-radius: 14px; }
  }

  /* ═══════════════════════════════════════
     SMALL PHONES (≤ 380px)
  ═══════════════════════════════════════ */
  @media (max-width: 380px) {
    .ct-hours-grid { grid-template-columns: 1fr 1fr; }
    .ct-book-label { font-size: 0.72rem; }
    .ct-book-sub { font-size: 0.66rem; }
  }
`;function Eg(e,t=.15){let[n,r]=(0,w.useState)(!1);return(0,w.useEffect)(()=>{let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(r(!0),n.disconnect())},{threshold:t});return e.current&&n.observe(e.current),()=>n.disconnect()},[e,t]),n}var Dg=({s:e=18})=>(0,I.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,I.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z`})}),Og=({s:e=18})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),kg=({s:e=18})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,I.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]}),Ag=({s:e=18})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,I.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),jg=({s:e=18})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`currentColor`,children:[(0,I.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z`}),(0,I.jsx)(`path`,{d:`M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.532 5.852L.057 23.504a.5.5 0 0 0 .612.632l5.796-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.373l-.359-.214-3.724.976.994-3.634-.234-.374A9.818 9.818 0 1 1 12 21.818z`})]}),Mg=({s:e=18})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`}),(0,I.jsx)(`line`,{x1:`16`,y1:`2`,x2:`16`,y2:`6`}),(0,I.jsx)(`line`,{x1:`8`,y1:`2`,x2:`8`,y2:`6`}),(0,I.jsx)(`line`,{x1:`3`,y1:`10`,x2:`21`,y2:`10`})]}),Ng=({s:e=14})=>(0,I.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`polygon`,{points:`3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21`}),(0,I.jsx)(`line`,{x1:`9`,y1:`3`,x2:`9`,y2:`18`}),(0,I.jsx)(`line`,{x1:`15`,y1:`6`,x2:`15`,y2:`21`})]}),Pg=({s:e=12})=>(0,I.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,I.jsx)(`polygon`,{points:`3 11 22 2 13 21 11 13 3 11`})});function Fg(){let e=(0,w.useRef)(),t=(0,w.useRef)(),n=(0,w.useRef)(),r=Eg(e,.08),i=Eg(t,.2),a=Eg(n,.1),o=()=>{window.open(`https://wa.me/918956658209?text=Namaste!%20I'd%20like%20to%20enquire%20about%20Nithya%20Ayurveda's%20products%20and%20treatments.`,`_blank`)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:Tg}),(0,I.jsxs)(`section`,{id:`contact`,className:`ct-section`,ref:e,children:[(0,I.jsx)(`div`,{className:`ct-top-rule`}),(0,I.jsxs)(`svg`,{className:`ct-leaf tl`,viewBox:`0 0 200 200`,fill:`none`,children:[(0,I.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`26`,ry:`84`,fill:`#2D5344`,transform:`rotate(-15 100 100)`}),(0,I.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`17`,ry:`70`,fill:`#2D5344`,transform:`rotate(12 100 100)`})]}),(0,I.jsxs)(`svg`,{className:`ct-leaf br`,viewBox:`0 0 200 200`,fill:`none`,children:[(0,I.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`26`,ry:`84`,fill:`#2D5344`,transform:`rotate(-15 100 100)`}),(0,I.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`17`,ry:`70`,fill:`#2D5344`,transform:`rotate(12 100 100)`})]}),(0,I.jsxs)(`div`,{className:`ct-inner`,children:[(0,I.jsxs)(`div`,{className:`ct-eyebrow${r?` cv`:``}`,children:[(0,I.jsx)(`div`,{className:`ct-eyebrow-line`}),(0,I.jsx)(`span`,{className:`ct-eyebrow-text`,children:`Reach Out`}),(0,I.jsx)(`div`,{className:`ct-eyebrow-line`})]}),(0,I.jsxs)(`h2`,{className:`ct-title${r?` cv`:``}`,children:[`Begin Your`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`span`,{children:`Healing Journey`})]}),(0,I.jsxs)(`div`,{className:`ct-title-deco${r?` cv`:``}`,children:[(0,I.jsx)(`div`,{className:`ct-deco-line`}),(0,I.jsx)(`div`,{className:`ct-deco-diamond`}),(0,I.jsx)(`div`,{className:`ct-deco-line`})]}),(0,I.jsx)(`p`,{className:`ct-subtitle${r?` cv`:``}`,children:`Our Vaidyas are ready to guide you — whether you seek a remedy, a consultation, or simply a conversation about your wellbeing.`}),(0,I.jsxs)(`div`,{className:`ct-grid`,children:[(0,I.jsxs)(`div`,{className:`ct-info-col${r?` cv`:``}`,children:[(0,I.jsxs)(`div`,{className:`ct-info-card`,children:[(0,I.jsx)(`div`,{className:`ct-icon-wrap`,children:(0,I.jsx)(Dg,{})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{className:`ct-info-label`,children:`Phone & WhatsApp`}),(0,I.jsx)(`span`,{className:`ct-info-value`,children:`+91 8956658209`}),(0,I.jsx)(`span`,{className:`ct-info-sub`,children:`Available 9 AM – 8 PM daily`})]})]}),(0,I.jsxs)(`div`,{className:`ct-info-card`,children:[(0,I.jsx)(`div`,{className:`ct-icon-wrap`,children:(0,I.jsx)(Ag,{})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{className:`ct-info-label`,children:`Email`}),(0,I.jsx)(`span`,{className:`ct-info-value`,children:`nithyaayurveda09@gmail.com`}),(0,I.jsx)(`span`,{className:`ct-info-sub`,children:`Response within 24 hours`})]})]}),(0,I.jsxs)(`div`,{className:`ct-info-card`,children:[(0,I.jsx)(`div`,{className:`ct-icon-wrap`,children:(0,I.jsx)(Og,{})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`span`,{className:`ct-info-label`,children:`Clinic Address`}),(0,I.jsx)(`span`,{className:`ct-info-value`,children:`Shop no 2, Chatrapati Shivaji Maharaj Chowk`}),(0,I.jsx)(`span`,{className:`ct-info-sub`,children:`Walhekarwadi, Pune, Maharashtra 411033`})]})]}),(0,I.jsxs)(`div`,{className:`ct-info-card`,children:[(0,I.jsx)(`div`,{className:`ct-icon-wrap`,children:(0,I.jsx)(kg,{})}),(0,I.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,I.jsx)(`span`,{className:`ct-info-label`,children:`Consultation Hours`}),(0,I.jsx)(`div`,{className:`ct-hours-grid`,children:[{day:`Mon – Fri`,time:`9 AM – 7 PM`},{day:`Saturday`,time:`9 AM – 5 PM`},{day:`Sunday`,time:`10 AM – 2 PM`},{day:`Emergency`,time:`On Call`}].map(e=>(0,I.jsxs)(`div`,{className:`ct-hours-item`,children:[(0,I.jsx)(`span`,{className:`ct-hours-day`,children:e.day}),(0,I.jsx)(`span`,{className:`ct-hours-time`,children:e.time})]},e.day))})]})]})]}),(0,I.jsx)(`div`,{className:`ct-action-col${r?` cv`:``}`,children:(0,I.jsxs)(`div`,{className:`ct-panel`,children:[(0,I.jsx)(`div`,{className:`ct-panel-label`,children:`Connect With Us`}),(0,I.jsx)(`h3`,{className:`ct-panel-title`,children:`Speak with a Vaidya Today`}),(0,I.jsx)(`p`,{className:`ct-panel-desc`,children:`A single conversation can illuminate the path to lasting wellness. Reach us on your preferred channel for instant guidance.`}),(0,I.jsx)(`div`,{className:`ct-divider`}),(0,I.jsxs)(`div`,{className:`ct-action-row`,children:[(0,I.jsxs)(`button`,{className:`ct-action-btn`,onClick:()=>window.open(`tel:+918956658209`,`_self`),children:[(0,I.jsx)(`div`,{className:`ct-action-icon call`,children:(0,I.jsx)(Dg,{})}),(0,I.jsx)(`span`,{className:`ct-action-label`,children:`Call`})]}),(0,I.jsxs)(`button`,{className:`ct-action-btn`,onClick:o,children:[(0,I.jsx)(`div`,{className:`ct-action-icon wa`,children:(0,I.jsx)(jg,{})}),(0,I.jsx)(`span`,{className:`ct-action-label`,children:`WhatsApp`})]}),(0,I.jsxs)(`button`,{className:`ct-action-btn`,onClick:()=>window.open(`mailto:nithyaayurveda09@gmail.com`,`_self`),children:[(0,I.jsx)(`div`,{className:`ct-action-icon mail`,children:(0,I.jsx)(Ag,{})}),(0,I.jsx)(`span`,{className:`ct-action-label`,children:`Email`})]})]}),(0,I.jsxs)(`button`,{className:`ct-book-btn`,onClick:o,children:[(0,I.jsxs)(`div`,{className:`ct-book-inner`,children:[(0,I.jsx)(Mg,{}),(0,I.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,I.jsx)(`span`,{className:`ct-book-label`,children:`Book Appointment`}),(0,I.jsx)(`span`,{className:`ct-book-sub`,children:`In-clinic or online · Free first consult`})]})]}),(0,I.jsx)(`span`,{children:`→`})]}),(0,I.jsx)(`div`,{className:`ct-promise-strip`,children:[`Free consultation`,`Personalised care`,`Confidential`].map(e=>(0,I.jsxs)(`div`,{className:`ct-promise-item`,children:[(0,I.jsx)(`div`,{className:`ct-promise-dot`}),e]},e))})]})})]}),(0,I.jsxs)(`div`,{ref:n,className:`ct-map-section${a?` cv`:``}`,children:[(0,I.jsxs)(`div`,{className:`ct-map-header`,children:[(0,I.jsx)(Ng,{s:14}),(0,I.jsx)(`span`,{className:`ct-map-eyebrow`,children:`Find Us`}),(0,I.jsx)(`div`,{className:`ct-map-line`})]}),(0,I.jsxs)(`div`,{className:`ct-map-wrapper`,children:[(0,I.jsx)(`iframe`,{className:`ct-map-frame`,title:`Nithya Ayurveda — Walhekarwadi, Pune`,src:`https://maps.google.com/maps?q=chatrapati+shivaji+maharaj+chowk+walhekarwadi+pune+Maharashtra+411033&output=embed&hl=en&z=16`,allowFullScreen:!0,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`}),(0,I.jsxs)(`div`,{className:`ct-map-overlay`,children:[(0,I.jsx)(`div`,{className:`ct-map-overlay-title`,children:`Nithya Ayurveda`}),(0,I.jsxs)(`div`,{className:`ct-map-overlay-addr`,children:[`Shop No. 2, Chatrapati Shivaji Maharaj Chowk,`,(0,I.jsx)(`br`,{}),`Walhekarwadi, Pune — 411033`]}),(0,I.jsxs)(`a`,{href:`https://www.google.com/maps/dir/?api=1&destination=chatrapati+shivaji+maharaj+chowk+walhekarwadi+pune+Maharashtra+411033`,target:`_blank`,rel:`noopener noreferrer`,className:`ct-map-directions-btn`,children:[(0,I.jsx)(Pg,{}),`Get Directions`]})]})]})]}),(0,I.jsxs)(`div`,{ref:t,className:`ct-quote${i?` cv`:``}`,children:[(0,I.jsx)(`p`,{className:`ct-quote-text`,children:`"The physician who knows the science of life treats not merely the ailment, but the whole person — body, mind, and consciousness."`}),(0,I.jsx)(`span`,{className:`ct-quote-attr`,children:`— Ashtanga Hridayam`})]})]}),(0,I.jsx)(`div`,{className:`ct-bot-rule`})]})]})}var Ig=[{initials:`SP`,name:`Sangram Pawar`,role:`Founder`,company:`Nithya Ayurveda`,quals:`Entrepreneur · Wellness Visionary`,bio:`Sangram Pawar is the visionary force behind Nithya Ayurveda. Rooted in a deep reverence for India's ancient healing traditions, he built this brand with a singular mission — to make authentic, pure Ayurvedic wellness accessible to every household. His unwavering commitment to quality, ethical sourcing, and transparent formulation defines the soul of every product that carries the Nithya name.`,tags:[`Ayurvedic Heritage`,`Brand Vision`,`Ethical Sourcing`],quote:`Nature has provided every remedy we will ever need. Our work is simply to listen, and to preserve.`,stat:{num:`25+`,label:`Years Experience`},theme:`dark`},{initials:`DS`,name:`Dr. Shivani Pawar`,role:`Physiotherapist`,company:`Nithya Ayurveda`,quals:`B.P.T. · Certified Ayurvedic Wellness Practitioner`,bio:`Dr. Shivani Pawar merges the precision of modern physiotherapy with the holistic wisdom of Ayurvedic principles. With a compassionate, patient-first philosophy, she designs evidence-based recovery programmes that address pain, mobility, and long-term vitality — ensuring every Nithya remedy is grounded in clinical integrity and genuine care.`,tags:[`Physiotherapy`,`Pain Management`,`Holistic Recovery`],quote:`True healing restores not just the body, but the natural harmony within.`,stat:{num:`500+`,label:`Patients Guided`},theme:`light`}],Lg=[{glyph:`॥`,title:`Ancient Texts, Modern Validation`,desc:`Every formula begins with classical Charaka Samhita references, then passes through clinical biomarker studies before reaching production.`},{glyph:`✦`,title:`Seed-to-Shelf Integrity`,desc:`We partner directly with organic farmers across India — traceable, pesticide-free, and harvested at peak potency.`},{glyph:`◉`,title:`No Compromise on Purity`,desc:`Triple-tested at NABL-accredited labs for heavy metals and standardised active compounds before any batch is approved.`}],Rg=`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500&family=Jost:wght@200;300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --tm-beige:      #F2F1EB;
    --tm-ivory:      #FAF9F6;
    --tm-dark:       #1C2E25;
    --tm-green:      #2D5A43;
    --tm-green-mid:  #3A7057;
    --tm-gold:       #C9A84C;
    --tm-gold-l:     #E8C96A;
    --tm-bronze:     #967259;
    --tm-bronze-lt:  rgba(150,114,89,0.18);
    --tm-text:       #1B3628;
    --tm-muted:      #6B6257;
    --tm-pale:       rgba(245,235,221,0.88);
  }

  /* ROOT */
  .tm-root {
    background: var(--tm-beige);
    font-family: 'Jost', sans-serif;
    color: var(--tm-text);
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .tm-hero {
    position: relative;
    background: var(--tm-ivory);
    padding: clamp(80px, 12vw, 140px) clamp(20px, 5%, 5%) clamp(60px, 8vw, 100px);
    text-align: center;
    border-bottom: 1px solid var(--tm-bronze-lt);
    overflow: hidden;
  }

  .tm-hero-bg {
    position: absolute; inset: 0; pointer-events: none; opacity: 0.35;
    display: flex; align-items: center; justify-content: center;
  }

  .tm-ring {
    position: absolute; border-radius: 50%;
    border: 0.5px solid var(--tm-bronze);
  }

  .tm-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.5vw, 10px);
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--tm-bronze);
    margin-bottom: 20px;
    display: flex; align-items: center; justify-content: center; gap: 14px;
  }
  .tm-eyebrow-line {
    height: 1px; width: 40px;
    background: linear-gradient(90deg, transparent, rgba(150,114,89,0.5));
  }
  .tm-eyebrow-line.r {
    background: linear-gradient(90deg, rgba(150,114,89,0.5), transparent);
  }

  .tm-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 6vw, 70px);
    font-weight: 400;
    line-height: 1.12;
    margin-bottom: 16px;
    color: var(--tm-text);
  }
  .tm-hero h1 em {
    color: var(--tm-bronze);
    font-style: italic;
  }

  .tm-hero-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(14px, 2vw, 18px);
    font-style: italic; font-weight: 300;
    color: var(--tm-muted);
    max-width: 480px; margin: 0 auto 44px;
    line-height: 1.7;
  }

  .tm-stats {
    display: flex;
    justify-content: center;
    gap: clamp(32px, 6vw, 72px);
    flex-wrap: wrap;
  }
  .tm-stat-item { text-align: center; }
  .tm-stat-num {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 4vw, 36px);
    color: var(--tm-green); line-height: 1;
    margin-bottom: 6px;
  }
  .tm-stat-label {
    font-size: clamp(8px, 1.2vw, 10px);
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--tm-muted);
  }

  /* ── TEAM CARDS SECTION ── */
  .tm-cards-section {
    max-width: 1280px;
    margin: 0 auto;
    padding: clamp(64px, 9vw, 110px) clamp(20px, 5%, 5%);
  }

  .tm-section-label {
    text-align: center;
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.2vw, 10px);
    letter-spacing: 4px; text-transform: uppercase;
    color: var(--tm-gold);
    margin-bottom: 56px;
    display: flex; align-items: center; justify-content: center; gap: 16px;
  }
  .tm-section-label::before,
  .tm-section-label::after {
    content: '';
    flex: 1; max-width: 80px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4));
  }
  .tm-section-label::after {
    background: linear-gradient(90deg, rgba(201,168,76,0.4), transparent);
  }

  /* Two-card grid */
  .tm-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(20px, 3vw, 36px);
    align-items: stretch;
  }

  /* Individual card */
  .tm-card {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s;
  }
  .tm-card:hover {
    transform: translateY(-6px);
  }

  /* DARK card (Founder) */
  .tm-card-dark {
    background: var(--tm-dark);
    box-shadow: 0 20px 60px rgba(28,46,37,0.25);
  }
  .tm-card-dark:hover {
    box-shadow: 0 32px 80px rgba(28,46,37,0.38);
  }

  /* LIGHT card (Doctor) */
  .tm-card-light {
    background: var(--tm-ivory);
    border: 1px solid var(--tm-bronze-lt);
    box-shadow: 0 20px 60px rgba(150,114,89,0.1);
  }
  .tm-card-light:hover {
    box-shadow: 0 32px 80px rgba(150,114,89,0.2);
    border-color: rgba(150,114,89,0.35);
  }

  /* Top accent line */
  .tm-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, var(--tm-gold), var(--tm-gold-l), var(--tm-gold), transparent);
    z-index: 2;
  }

  /* Card content padding */
  .tm-card-inner {
    padding: clamp(36px, 5vw, 56px);
    display: flex; flex-direction: column;
    height: 100%;
  }

  /* Avatar */
  .tm-avatar-wrap {
    display: flex; align-items: center; gap: 22px;
    margin-bottom: 28px;
  }
  .tm-avatar {
    width: clamp(72px, 9vw, 96px);
    height: clamp(72px, 9vw, 96px);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 500;
    flex-shrink: 0;
    position: relative;
  }
  .tm-card-dark .tm-avatar {
    background: rgba(201,168,76,0.12);
    color: var(--tm-gold-l);
    border: 1px solid rgba(201,168,76,0.35);
  }
  .tm-card-light .tm-avatar {
    background: rgba(45,90,67,0.07);
    color: var(--tm-green);
    border: 1px solid rgba(45,90,67,0.2);
  }
  .tm-avatar::after {
    content: '';
    position: absolute; inset: -6px; border-radius: 50%;
    border: 1px dashed;
    opacity: 0.3;
  }
  .tm-card-dark .tm-avatar::after { border-color: var(--tm-gold); }
  .tm-card-light .tm-avatar::after { border-color: var(--tm-bronze); }

  .tm-avatar-meta { flex: 1; }

  .tm-role {
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.2vw, 10px);
    letter-spacing: 2.5px; text-transform: uppercase;
    display: block; margin-bottom: 8px;
  }
  .tm-card-dark .tm-role { color: var(--tm-gold); }
  .tm-card-light .tm-role { color: var(--tm-bronze); }

  .tm-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 500; line-height: 1.1; margin: 0 0 8px;
  }
  .tm-card-dark .tm-name { color: var(--tm-pale); }
  .tm-card-light .tm-name { color: var(--tm-text); }

  .tm-quals {
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem; font-weight: 300; font-style: normal;
    letter-spacing: 0.02em;
  }
  .tm-card-dark .tm-quals { color: rgba(245,235,221,0.38); }
  .tm-card-light .tm-quals { color: var(--tm-muted); }

  /* Divider */
  .tm-card-divider {
    height: 1px; margin: 24px 0;
  }
  .tm-card-dark .tm-card-divider {
    background: linear-gradient(90deg, rgba(201,168,76,0.25), transparent);
  }
  .tm-card-light .tm-card-divider {
    background: linear-gradient(90deg, rgba(150,114,89,0.2), transparent);
  }

  /* Bio */
  .tm-bio {
    font-size: clamp(13px, 1.5vw, 15px);
    line-height: 1.82; font-weight: 300;
    margin-bottom: 24px; flex: 1;
  }
  .tm-card-dark .tm-bio { color: rgba(245,235,221,0.65); }
  .tm-card-light .tm-bio { color: var(--tm-muted); }

  /* Quote */
  .tm-quote-wrap {
    position: relative; padding: 18px 20px;
    margin-bottom: 24px; border-radius: 4px;
  }
  .tm-card-dark .tm-quote-wrap {
    background: rgba(201,168,76,0.05);
    border-left: 2px solid rgba(201,168,76,0.35);
  }
  .tm-card-light .tm-quote-wrap {
    background: rgba(45,90,67,0.04);
    border-left: 2px solid rgba(45,90,67,0.25);
  }
  .tm-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(13px, 1.8vw, 16px); font-style: italic; font-weight: 300;
    line-height: 1.65; margin: 0;
  }
  .tm-card-dark .tm-quote { color: rgba(245,235,221,0.55); }
  .tm-card-light .tm-quote { color: var(--tm-muted); }

  /* Tags */
  .tm-tags {
    display: flex; gap: 8px; flex-wrap: wrap;
    margin-top: auto;
  }
  .tm-tag {
    font-size: 0.6rem; padding: 5px 12px;
    text-transform: uppercase; letter-spacing: 1.5px;
    border-radius: 2px; font-weight: 500;
    transition: all 0.3s;
  }
  .tm-card-dark .tm-tag {
    border: 1px solid rgba(201,168,76,0.2);
    color: rgba(201,168,76,0.6);
    background: rgba(201,168,76,0.04);
  }
  .tm-card-dark .tm-tag:hover {
    border-color: rgba(201,168,76,0.5);
    color: var(--tm-gold-l);
    background: rgba(201,168,76,0.1);
  }
  .tm-card-light .tm-tag {
    border: 1px solid var(--tm-bronze-lt);
    color: var(--tm-bronze);
    background: transparent;
  }
  .tm-card-light .tm-tag:hover {
    border-color: var(--tm-bronze);
    background: rgba(150,114,89,0.07);
  }

  /* Stat badge */
  .tm-stat-badge {
    display: inline-flex; align-items: baseline; gap: 6px;
    padding: 10px 18px;
    margin-bottom: 20px; border-radius: 4px;
  }
  .tm-card-dark .tm-stat-badge {
    background: rgba(201,168,76,0.08);
    border: 1px solid rgba(201,168,76,0.18);
  }
  .tm-card-light .tm-stat-badge {
    background: rgba(45,90,67,0.06);
    border: 1px solid rgba(45,90,67,0.15);
  }
  .tm-stat-badge-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 600; line-height: 1;
  }
  .tm-card-dark .tm-stat-badge-num { color: var(--tm-gold-l); }
  .tm-card-light .tm-stat-badge-num { color: var(--tm-green); }
  .tm-stat-badge-label {
    font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1.5px;
  }
  .tm-card-dark .tm-stat-badge-label { color: rgba(245,235,221,0.4); }
  .tm-card-light .tm-stat-badge-label { color: var(--tm-muted); }

  /* ── PHILOSOPHY STRIP ── */
  .tm-phil-section {
    background: var(--tm-dark);
    padding: clamp(56px, 8vw, 88px) clamp(20px, 5%, 5%);
    position: relative; overflow: hidden;
  }
  .tm-phil-section::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
  }

  .tm-phil-inner {
    max-width: 1280px; margin: 0 auto;
  }

  .tm-phil-header {
    text-align: center; margin-bottom: clamp(44px, 6vw, 64px);
  }
  .tm-phil-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3.5vw, 38px);
    font-weight: 400; color: var(--tm-pale);
    margin: 0 0 12px;
  }
  .tm-phil-header h3 em {
    color: var(--tm-gold); font-style: italic;
  }
  .tm-phil-header p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-style: italic;
    color: rgba(245,235,221,0.35); max-width: 400px; margin: 0 auto;
  }

  .tm-phil-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: rgba(201,168,76,0.1);
    border-radius: 8px; overflow: hidden;
  }
  .tm-phil-item {
    text-align: center;
    padding: clamp(36px, 5vw, 52px) clamp(24px, 3vw, 40px);
    background: rgba(12, 32, 24, 0.95);
    transition: background 0.4s;
  }
  .tm-phil-item:hover { background: rgba(18, 40, 30, 0.98); }

  .tm-glyph {
    font-size: clamp(22px, 4vw, 32px);
    color: var(--tm-gold);
    display: block; margin-bottom: 18px;
  }
  .tm-phil-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(15px, 2vw, 20px);
    font-weight: 500; margin-bottom: 12px;
    color: var(--tm-pale);
  }
  .tm-phil-desc {
    font-size: clamp(12px, 1.4vw, 13.5px);
    color: rgba(245,235,221,0.38);
    line-height: 1.75; font-weight: 300;
  }

  /* ═══════════════
     TABLET (≤ 860px)
  ═══════════════ */
  @media (max-width: 860px) {
    .tm-cards-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; }
    .tm-phil-grid { grid-template-columns: 1fr; }
    .tm-phil-item + .tm-phil-item {
      border-top: 1px solid rgba(201,168,76,0.08);
    }
    .tm-hero-bg { display: none; }
  }

  /* ═══════════════
     MOBILE (≤ 540px)
  ═══════════════ */
  @media (max-width: 540px) {
    .tm-card-inner { padding: 28px 22px; }
    .tm-avatar-wrap { gap: 16px; }
    .tm-avatar { width: 64px; height: 64px; font-size: 20px; }
    .tm-tag { font-size: 0.55rem; padding: 4px 9px; }
    .tm-quote-wrap { padding: 14px 16px; }
    .tm-cards-section { padding-left: 16px; padding-right: 16px; }
    .tm-stats { gap: 20px; }
  }
`,zg={initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.85,ease:[.22,1,.36,1]}};function Bg(){return(0,I.jsxs)(`div`,{className:`tm-root`,children:[(0,I.jsx)(`style`,{children:Rg}),(0,I.jsxs)(`section`,{className:`tm-hero`,children:[(0,I.jsx)(`div`,{className:`tm-hero-bg`,children:[380,640,900].map(e=>(0,I.jsx)(`div`,{className:`tm-ring`,style:{width:e,height:e}},e))}),(0,I.jsx)(Vh.div,{...zg,children:(0,I.jsxs)(`div`,{className:`tm-eyebrow`,children:[(0,I.jsx)(`div`,{className:`tm-eyebrow-line`}),`The Lineage of Care`,(0,I.jsx)(`div`,{className:`tm-eyebrow-line r`})]})}),(0,I.jsxs)(Vh.h1,{...zg,transition:{delay:.15,duration:.85,ease:[.22,1,.36,1]},children:[`The `,(0,I.jsx)(`em`,{children:`Minds`}),` Behind`,(0,I.jsx)(`br`,{}),`Nithya Ayurveda`]}),(0,I.jsx)(Vh.p,{className:`tm-hero-sub`,...zg,transition:{delay:.25,duration:.85,ease:[.22,1,.36,1]},children:`Built on passion, grounded in science, and guided by the oldest healing tradition on earth.`}),(0,I.jsx)(`div`,{className:`tm-stats`,children:[{n:`Est. 2025`,l:`Year Founded`},{n:`100%`,l:`Natural Ingredients`},{n:`500+`,l:`Healing Stories`}].map((e,t)=>(0,I.jsxs)(Vh.div,{className:`tm-stat-item`,...zg,transition:{delay:.32+t*.1,duration:.8,ease:[.22,1,.36,1]},children:[(0,I.jsx)(`span`,{className:`tm-stat-num`,children:e.n}),(0,I.jsx)(`span`,{className:`tm-stat-label`,children:e.l})]},t))})]}),(0,I.jsxs)(`div`,{className:`tm-cards-section`,children:[(0,I.jsx)(`div`,{className:`tm-section-label`,children:`Our Team`}),(0,I.jsx)(`div`,{className:`tm-cards-grid`,children:Ig.map((e,t)=>(0,I.jsx)(Vh.div,{className:`tm-card ${e.theme===`dark`?`tm-card-dark`:`tm-card-light`}`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.9,delay:t*.18,ease:[.22,1,.36,1]},children:(0,I.jsxs)(`div`,{className:`tm-card-inner`,children:[(0,I.jsxs)(`div`,{className:`tm-avatar-wrap`,children:[(0,I.jsx)(`div`,{className:`tm-avatar`,children:e.initials}),(0,I.jsxs)(`div`,{className:`tm-avatar-meta`,children:[(0,I.jsx)(`span`,{className:`tm-role`,children:e.role}),(0,I.jsx)(`h2`,{className:`tm-name`,children:e.name}),(0,I.jsx)(`p`,{className:`tm-quals`,children:e.quals})]})]}),(0,I.jsx)(`div`,{className:`tm-card-divider`}),(0,I.jsx)(`p`,{className:`tm-bio`,children:e.bio}),(0,I.jsx)(`div`,{className:`tm-quote-wrap`,children:(0,I.jsxs)(`p`,{className:`tm-quote`,children:[`"`,e.quote,`"`]})}),(0,I.jsx)(`div`,{className:`tm-tags`,children:e.tags.map(e=>(0,I.jsx)(`span`,{className:`tm-tag`,children:e},e))})]})},t))})]}),(0,I.jsx)(`section`,{className:`tm-phil-section`,children:(0,I.jsxs)(`div`,{className:`tm-phil-inner`,children:[(0,I.jsxs)(`div`,{className:`tm-phil-header`,children:[(0,I.jsxs)(Vh.h3,{...zg,children:[`Our `,(0,I.jsx)(`em`,{children:`Philosophy`})]}),(0,I.jsx)(Vh.p,{...zg,transition:{delay:.1},children:`The principles that guide every decision we make.`})]}),(0,I.jsx)(`div`,{className:`tm-phil-grid`,children:Lg.map((e,t)=>(0,I.jsxs)(Vh.div,{className:`tm-phil-item`,...zg,transition:{delay:.1*t},children:[(0,I.jsx)(`span`,{className:`tm-glyph`,children:e.glyph}),(0,I.jsx)(`h3`,{className:`tm-phil-title`,children:e.title}),(0,I.jsx)(`p`,{className:`tm-phil-desc`,children:e.desc})]},t))})]})})]})}function Vg(){return(0,I.jsx)(`div`,{className:`h-screen flex items-center justify-center`,children:(0,I.jsx)(`h1`,{className:`text-3xl font-semibold`,children:`404 - Page Not Found`})})}var Hg=Ai([{path:`/`,element:(0,I.jsx)(Kh,{}),children:[{index:!0,element:(0,I.jsx)(lg,{})},{path:`about`,element:(0,I.jsx)(fg,{})},{path:`products`,element:(0,I.jsx)(wg,{})},{path:`team`,element:(0,I.jsx)(Bg,{})},{path:`contact`,element:(0,I.jsx)(Fg,{})}]},{path:`*`,element:(0,I.jsx)(Vg,{})}]),Ug=s(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),Wg=s(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),Gg=s(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}}));Ug(),Wg(),Gg();var Kg=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(Kg||{}),qg={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}};Object.values(Kg);var Jg={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`};Object.entries(Jg).reduce((e,[t,n])=>(e[n]=t,e),{});var Yg=`data-rh`,Xg=e=>Array.isArray(e)?e.join(``):e,Zg=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Qg=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(Zg(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},$g=[`noscript`,`script`,`style`],e_=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),t_=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),n_=(e,t,n,r)=>{let i=t_(n),a=Xg(t);return i?`<${e} ${Yg}="true" ${i}>${e_(a,r)}</${e}>`:`<${e} ${Yg}="true">${e_(a,r)}</${e}>`},r_=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>!(e===`innerHTML`||e===`cssText`)).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${e_(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${Yg}="true" ${a}${$g.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),i_=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=Jg[n];return t[r||n]=e[n],t},t),a_=(e,t,n)=>{let r=i_(n,{key:t,[Yg]:!0});return[w.createElement(`title`,r,t)]},o_=(e,t)=>t.map((t,n)=>{let r={key:n,[Yg]:!0};return Object.keys(t).forEach(e=>{let n=Jg[e]||e;n===`innerHTML`||n===`cssText`?r.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:r[n]=t[e]}),w.createElement(e,r)}),s_=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>a_(e,t.title,t.titleAttributes),toString:()=>n_(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>i_(t),toString:()=>t_(t)};default:return{toComponent:()=>o_(e,t),toString:()=>r_(e,t,n)}}},c_=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=Qg(e,qg.meta),a=Qg(t,qg.link),o=Qg(n,qg.script);return{priorityMethods:{toComponent:()=>[...o_(`meta`,i.priority),...o_(`link`,a.priority),...o_(`script`,o.priority)],toString:()=>`${s_(`meta`,i.priority,r)} ${s_(`link`,a.priority,r)} ${s_(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},l_=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>[],toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=c_(e)),{priority:p,base:s_(`base`,t,r),bodyAttributes:s_(`bodyAttributes`,n,r),htmlAttributes:s_(`htmlAttributes`,i,r),link:s_(`link`,u,r),meta:s_(`meta`,d,r),noscript:s_(`noscript`,a,r),script:s_(`script`,f,r),style:s_(`style`,o,r),title:s_(`title`,{title:s,titleAttributes:c},r)}},u_=[],d_=!!(typeof window<`u`&&window.document&&window.document.createElement),f_=class{instances=[];canUseDOM=d_;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?u_:this.instances,add:e=>{(this.canUseDOM?u_:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?u_:this.instances).indexOf(e);(this.canUseDOM?u_:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=l_({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},p_=parseInt(`19.2.5`.split(`.`)[0],10)>=19,m_=w.createContext({}),h_=class e extends w.Component{static canUseDOM=d_;helmetData;constructor(t){super(t),p_?this.helmetData=null:this.helmetData=new f_(this.props.context||{},e.canUseDOM)}render(){return p_?w.createElement(w.Fragment,null,this.props.children):w.createElement(m_.Provider,{value:this.helmetData.value},this.props.children)}};$i.createRoot(document.getElementById(`root`)).render((0,I.jsxs)(w.StrictMode,{children:[` `,(0,I.jsxs)(h_,{children:[` `,(0,I.jsx)(Qi,{router:Hg}),` `]})]}));