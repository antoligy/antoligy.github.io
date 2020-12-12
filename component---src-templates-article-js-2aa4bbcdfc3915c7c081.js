/*! For license information please see component---src-templates-article-js-2aa4bbcdfc3915c7c081.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?l:i[e.$$typeof]||a}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=l;var u=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var a=m(r);a&&a!==p&&e(t,a,n)}var l=s(r);f&&(l=l.concat(f(r)));for(var i=c(t),h=c(r),y=0;y<l.length;++y){var v=l[y];if(!(o[v]||n&&n[v]||h&&h[v]||i&&i[v])){var b=d(r,v);try{u(t,v,b)}catch(g){}}}}return t}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},VRlk:function(e,t,r){"use strict";r.r(t);var n=r("FdF9"),a=r("Wbzz");function o(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=r("dI71"),u=r("TOwV"),s=r("2mql"),f=r.n(s);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var m=n.default.createContext();var p={initialChunks:{}};var h=function(e){return e};function y(e){var t=e.defaultResolveComponent,r=void 0===t?h:t,a=e.render,s=e.onLoad;function y(e,t){void 0===t&&(t={});var h=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),y={};function v(e){return t.cacheKey?t.cacheKey(e):h.resolve?h.resolve(e):"static"}function b(e,n,a){var o=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(u.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return f()(a,o,{preload:!0}),o}var g,E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},d(!r.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(h.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(h.chunkName(r))),i(n)):(!1!==t.ssr&&(h.isReady&&h.isReady(r)||h.chunkName&&p.initialChunks[h.chunkName(r)])&&n.loadSync(),n)}Object(c.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return l({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return v(this.props)},n.getCache=function(){return y[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),y[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;s&&setTimeout((function(){s(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=b(h.requireSync(this.props),this.props,S);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=b(t,e.props,{Loadable:S});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,o(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=h.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(e.props),chunkName:h.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,i=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,u=c.error,s=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(u)throw u;var d=n||t.fallback||null;return s?d:a({fallback:d,result:f,options:t,props:l({},i,{ref:r})})},r}(n.default.Component),w=(g=E,function(e){return n.default.createElement(m.Consumer,null,(function(t){return n.default.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),S=n.default.forwardRef((function(e,t){return n.default.createElement(w,Object.assign({forwardedRef:t},e))}));return S.preload=function(e){h.requireAsync(e)},S.load=function(e){return h.requireAsync(e)},S}return{loadable:y,lazy:function(e,t){return y(e,l({},t,{suspense:!0}))}}}var v=y({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.default.createElement(t,r)}}),b=v.loadable,g=v.lazy,E=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),w=E.loadable,S=E.lazy;var _=b;_.lib=w,g.lib=S;var k=r("Bl7J"),x=r("LbRr"),O=r("vrv3"),C=r("eTKx");function P(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=function(e){for(var t=e.article,r=Object(a.c)("2203825502"),o=t.frontmatter.tags||[],l=new Set,i=3;i>=0&&!(l.size>=3);i--)for(var c,u=P(r.posts.nodes);!(c=u()).done;){var s=c.value;if(s.id!==t.id){if(l.size>=3)break;for(var f,d=0,m=P(s.frontmatter.tags);!(f=m()).done;){var p=f.value;o.includes(p)&&d++}d>=i&&!l.has(s)&&l.add(s)}}return n.default.createElement(n.default.Fragment,null,Array.from(l.values()).map((function(e){return n.default.createElement(C.a,{key:e.id,article:e})})))},$=r("vrFN"),j=r("lYb1"),A=r("aFnX"),T=function(e){var t=e.url,r=void 0===t?"":t,n=e.title,a=void 0===n?"":n,o=e.image,l=void 0===o?"":o,i=e.description,c=void 0===i?"":i,u=e.dateModified,s=void 0===u?new Date:u,f=e.datePublished,d=void 0===f?new Date:f;return{"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":r},url:r,headline:a,dateModified:s.toISOString(),datePublished:d.toISOString(),publisher:Object(j.a)(),author:Object(A.a)(),image:l,description:c}},F=(r("E9XD"),r("o0o1")),M=r.n(F),D=(r("ls82"),r("HaE+")),L=r("LpSC"),q=r.n(L),I=r("IGbE"),K=function(e){return function(t){return t["wm-property"]===e}},z=function(e){return e.filter(K("like-of"))},V=function(e){return e.filter(K("mention-of"))},U=function(e){return e.filter(K("repost-of"))},W=function(e){return e.filter(K("reply-of"))};function J(e){var t=e.webmention;return n.default.createElement("a",{href:t.author.url,title:t.author.name},n.default.createElement(I.a,{src:t.author.photo,width:64,height:64,quality:"lossless",format:"png"}))}function G(e){var t=e.webmentions;return n.default.createElement("ul",null,t.map((function(e){return n.default.createElement("li",{key:e["wm-id"]},n.default.createElement(J,{webmention:e}))})))}var B=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={error:null,isLoaded:!1,mentions:[],reposts:[],replies:[],likes:[]},r}Object(c.a)(t,e);var r=t.prototype;return r.fetchWebmentions=function(){var e=Object(D.a)(M.a.mark((function e(t){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return q()("https://webmention.io/api/mentions.jf2?target="+e).then((function(e){return e.json()})).then((function(e){return e.children}))}))).then((function(e){return e.reduce((function(e,t){return e.concat(t)}),[])})).catch(console.error);case 2:r=e.sent,console.log(r),this.setState({reposts:U(r),mentions:V(r),likes:z(r),replies:W(r)});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r.componentDidMount=function(){var e=this.props.urls||[];this.props.url&&e.push(this.props.url),e.length>0&&this.fetchWebmentions(e)},r.render=function(){var e=this.state,t=e.likes,r=e.replies,a=e.reposts,o=e.mentions,l=t.length>0,i=(r.length,a.length>0);o.length;return!1===this.isLoaded?null:n.default.createElement("div",{className:"alex-webmentions"},l?n.default.createElement("div",{className:"alex-webmentions__likes"},n.default.createElement("h3",null,"Likes"),n.default.createElement(G,{webmentions:t})):null,i?n.default.createElement("div",{className:"alex-webmentions__reposts"},n.default.createElement("h3",null,"Reposts"),n.default.createElement(G,{webmentions:a})):null)},t}(n.Component);t.default=function(e){var t=e.data,r=e.location,o=t.markdownRemark,l=new URL(r.pathname,t.site.siteMetadata.siteUrl),i=new URL(o.fields.legacyslug,t.site.siteMetadata.siteUrl),c=new Date(o.frontmatter.date),u=new Date(o.frontmatter.last_modified_at||c);return n.default.createElement(k.a,{location:r},n.default.createElement(x.a,{location:r,image:o.fields.image}),n.default.createElement("div",{className:"alex-article"},n.default.createElement("div",{className:"alex-article__main"},n.default.createElement("h1",{itemProp:"name headline"},o.frontmatter.title),n.default.createElement("div",{className:"alex-article__main__byline"},"Posted",o.frontmatter.author?n.default.createElement(n.default.Fragment,null," by ",n.default.createElement("span",{itemProp:"author",itemType:"http://schema.org/Person"},n.default.createElement("a",{href:"/"},n.default.createElement("span",{itemProp:"name"},"Alex")))):null,c?n.default.createElement(n.default.Fragment,null," on ",n.default.createElement("time",{className:"alex-article__main__date",dateTime:c,itemProp:"datePublished"},o.fields.formattedDate),"."):null,o.frontmatter.image_credit?n.default.createElement(n.default.Fragment,null," "+o.frontmatter.image_credit):null),n.default.createElement("article",{dangerouslySetInnerHTML:{__html:o.html},className:"alex-article__body article-description",itemProp:"articleBody"}),n.default.createElement("hr",null),n.default.createElement("h3",{className:"share"},"Share"),n.default.createElement(O.a,{title:o.frontmatter.title,url:l}),n.default.createElement(B,{urls:[l,i]})),n.default.createElement("div",{className:"alex-article__aside"},o.frontmatter.tags?n.default.createElement("div",{className:"alex-article__topics"},n.default.createElement("strong",null,"Topics: "),n.default.createElement("ul",null,o.frontmatter.tags.map((function(e){return n.default.createElement("li",{key:e},n.default.createElement(a.a,{to:"/topic/"+e},e))})))):null,n.default.createElement("div",{className:"alex-article__recommended"},n.default.createElement("h2",null,"Read Next"),n.default.createElement(R,{article:o})))),n.default.createElement($.a,{title:o.frontmatter.title,description:o.excerpt},n.default.createElement("script",{type:"application/ld+json"},JSON.stringify(T({url:l,title:o.frontmatter.title,image:o.fields.image,description:o.frontmatter.excerpt,dateModified:u,datePublished:c})))))}},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,E=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case d:case l:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case s:case m:case v:case y:case u:return e;default:return t}}case o:return t}}}function _(e){return S(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=u,t.Element=a,t.ForwardRef=m,t.Fragment=l,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||S(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===l},t.isLazy=function(e){return S(e)===v},t.isMemo=function(e){return S(e)===y},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===d||e===c||e===i||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===u||e.$$typeof===s||e.$$typeof===m||e.$$typeof===g||e.$$typeof===E||e.$$typeof===w||e.$$typeof===b)},t.typeOf=S},vrv3:function(e,t,r){"use strict";var n=r("FdF9");t.a=function(e){var t=e.url,r=e.title;return n.default.createElement("div",{className:"alex-share"},n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("a",{href:"https://twitter.com/intent/tweet?url="+t+"&amp;text="+r+"&amp;related=AlexWilsonV1&amp;via=AlexWilsonV1"},n.default.createElement("img",{src:"/svg/twitter.svg",alt:"Twitter",title:"Share on Twitter"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://www.facebook.com/sharer.php?u="+t+"&amp;t="+r},n.default.createElement("img",{src:"/svg/facebook.svg",alt:"Facebook",title:"Share on Facebook"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&amp;url="+t+"&amp;title="+r},n.default.createElement("img",{src:"/svg/linkedin.svg",alt:"LinkedIn",title:"Share on LinkedIn"}))),n.default.createElement("li",null,n.default.createElement("a",{href:"http://reddit.com/submit?url="+t+"&amp;title="+r},n.default.createElement("img",{src:"/svg/reddit.svg",alt:"Reddit",title:"Share on Reddit"})))))}}}]);
//# sourceMappingURL=component---src-templates-article-js-2aa4bbcdfc3915c7c081.js.map