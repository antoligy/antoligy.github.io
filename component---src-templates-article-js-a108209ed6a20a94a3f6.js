(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map(function(e){return e.props})),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return o.createElement(n,this.props)},a}(a.Component);return c(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(d,"canUseDOM",l),d}}},DrhF:function(e,t,r){var n=r("BjK0"),a=r("N+BI").onFreeze;r("939a")("freeze",function(e){return function(t){return e&&n(t)?e(a(t)):t}})},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Alex Wilson","description":"Software Engineer, Technical Architect — Helping build a better, faster internet.","author":"@antoligy"}}}}')},Gytx:function(e,t,r){r("n7j8"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=e[s],f=t[s];if(!1===(a=r?r.call(n,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},Po2f:function(e){e.exports=JSON.parse('{"data":{"posts":{"nodes":[{"id":"0ce99332-c48d-56b6-b8d7-3ea6f41c880e","fields":{"slug":"/blog/2020/01/19/graphql-for-extraction/","date":"2020-01-19T00:00:00.000Z"},"frontmatter":{"title":"How GraphQL can help migrations and extraction projects","tags":["graphql","legacy","migration"]}},{"id":"d2924fe1-a9c5-58bc-be56-dca39e3b6d08","fields":{"slug":"/blog/2020/01/15/deploying-static-sites-with-github-actions/","date":"2020-01-15T00:00:00.000Z"},"frontmatter":{"title":"Deploying static sites with Github Actions","tags":["devops","static-site","github","release-engineering"]}},{"id":"78cd011a-7a73-585b-a3ca-3f5d3f012e44","fields":{"slug":"/blog/2019/08/24/immutable-infratructure/","date":"2019-08-24T00:00:00.000Z"},"frontmatter":{"title":"Explainer: Immutable Infrastructure","tags":["explainer","devops","immutable-infrastructure","infrastructure-as-code"]}},{"id":"743667d0-fdaf-54d5-90cf-6df80cfd9ab8","fields":{"slug":"/blog/2019/04/14/taking-a-look-through-a-johari-window/","date":"2019-04-14T00:00:00.000Z"},"frontmatter":{"title":"Taking a look through a Johari window","tags":["personal-development","career","stoicism","bluetel"]}},{"id":"98cd5dc4-778c-568f-88c3-cc431b44c0e5","fields":{"slug":"/blog/2019/04/13/weeknotes-journalism-raves/","date":"2019-04-13T00:00:00.000Z"},"frontmatter":{"title":"Weeknotes: Journalism Raves — 13th April 2019","tags":["weeknotes","talks","career","financial-times","microservices","personal-development"]}},{"id":"c4abf4d4-012c-5136-b403-979ced7d6390","fields":{"slug":"/blog/2019/03/30/weeknotes-adventures/","date":"2019-03-30T00:00:00.000Z"},"frontmatter":{"title":"Weeknotes: Adventures — 30th March 2019","tags":["weeknotes","career","financial-times","bluetel"]}},{"id":"d874b162-215c-5793-911b-4a4673e75aa5","fields":{"slug":"/blog/2019/02/16/weeknotes/","date":"2019-02-16T00:00:00.000Z"},"frontmatter":{"title":"Weeknotes — 16th February 2019","tags":["weeknotes","podcasting","aws","fosdem"]}},{"id":"cc062d73-95c1-5f86-bef4-726842fbabe1","fields":{"slug":"/blog/2019/01/26/weeknotes-first-of-the-year/","date":"2019-01-26T00:00:00.000Z"},"frontmatter":{"title":"Weeknotes: First Of The Year — 26th January 2019","tags":["weeknotes","bio","imagecdn","kubernetes","reliability","slack","metroid","software-quality"]}},{"id":"4befe300-e22d-56d6-b344-99b18c509aba","fields":{"slug":"/blog/2018/12/08/weeknotes-reinvent/","date":"2018-12-08T23:19:00.000Z"},"frontmatter":{"title":"Weeknotes: ReInvent — 8th December 2018","tags":["weeknotes","aws","reinvent","bio","slack","nar","motivation"]}},{"id":"eea1f3c2-8bad-55f5-b7dc-893cc0c92505","fields":{"slug":"/blog/2018/12/01/weeknotes-jetlag-city/","date":"2018-12-01T23:19:00.000Z"},"frontmatter":{"title":"Weeknotes: Jetlag City — 1st December 2018","tags":["weeknotes","aws","bio","japan","nar"]}},{"id":"debef485-d4bf-5ebb-8618-5580c67ffdd9","fields":{"slug":"/blog/2018/11/24/weeknotes/","date":"2018-11-24T18:36:00.000Z"},"frontmatter":{"title":"Weeknotes — 24th November 2018","tags":["weeknotes","ft-technology","apple","japan","motivation"]}},{"id":"f9a03733-4cca-5d49-b52d-a42cfe067b0b","fields":{"slug":"/blog/2018/11/10/democratising-and-automating-dns/","date":"2018-11-10T23:19:00.000Z"},"frontmatter":{"title":"Democratising and automating DNS","tags":["cloudflare","dns","devops"]}},{"id":"01de6bb5-5084-5871-b96e-33e883642b2e","fields":{"slug":"/blog/2018/11/10/weeknotes/","date":"2018-11-10T23:19:00.000Z"},"frontmatter":{"title":"Weeknotes — 10th November 2018","tags":["weeknotes","dns"]}},{"id":"cba6799a-1278-5cbd-b5ef-650e9298f412","fields":{"slug":"/blog/2018/11/03/weeknotes/","date":"2018-11-03T15:41:00.000Z"},"frontmatter":{"title":"Weeknotes — 3rd November 2018","tags":["weeknotes"]}},{"id":"5dc0781a-3f2e-5638-b359-c2da5b12aec2","fields":{"slug":"/blog/2018/10/27/weeknotes/","date":"2018-10-27T20:30:00.000Z"},"frontmatter":{"title":"Weeknotes — 27th October 2018","tags":["weeknotes"]}},{"id":"9e893bd3-4ab3-5f06-a194-ebb617d6ca4d","fields":{"slug":"/blog/2017/11/30/updating-permissions-in-large-s3-buckets/","date":"2017-11-30T20:44:00.000Z"},"frontmatter":{"title":"Changing object permissions in large S3 buckets","tags":["aws"]}},{"id":"461ec69f-fadd-5d2b-917c-831749854edb","fields":{"slug":"/blog/2017/01/01/using-ipv6-in-aws/","date":"2017-01-01T22:34:00.000Z"},"frontmatter":{"title":"Using IPv6 in Amazon Web Services","tags":["aws"]}},{"id":"9b000a08-3da5-5d16-bb76-8a6134239865","fields":{"slug":"/blog/2016/07/01/ten-deploys-per-day/","date":"2016-07-01T22:30:00.000Z"},"frontmatter":{"title":"“Ten deploys per day”","tags":["devops","release-engineering"]}},{"id":"8d6660ff-451f-521f-a808-d803a8fef350","fields":{"slug":"/blog/2016/01/31/scaling-irc-tech/","date":"2016-01-31T21:17:00.000Z"},"frontmatter":{"title":"Is IRC technology flexible enough to scale?","tags":["irc"]}},{"id":"5adaf9f8-e71c-5c2b-8d26-2b08eef79ee2","fields":{"slug":"/blog/2015/01/17/getting-past-cloudflare/","date":"2015-01-17T15:00:00.000Z"},"frontmatter":{"title":"Getting past CloudFlare","tags":["cloudflare"]}}]}}}')},TJpk:function(e,t,r){r("MIFh"),r("wZFJ"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("JHok"),r("LagC"),r("pS08"),r("sc67"),r("R48M"),r("E5k/"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r("q1tI")),i=f(r("17x9")),c=f(r("8+s/")),l=f(r("bmMU")),s=r("v1p5"),u=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,m,T,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)(function(){return null}),E=(p=h,T=m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=c,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach(function(t){var a;r=n({},r,((a={})[t]=e[t],a))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=p.peek,m.rewind=function(){var e=p.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);E.renderStatic=E.rewind,t.Helmet=E,t.default=E},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},VRlk:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Wbzz");r("sc67"),r("wZFJ"),r("MIFh"),r("n7j8"),r("6kNP"),r("8npG"),r("E5k/"),r("DrhF"),r("pJf4");function i(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=r("xHvr"),u=r.n(s);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var d=a.a.createContext();var p=function(e){return function(t){return a.a.createElement(d.Consumer,null,function(r){return a.a.createElement(e,Object.assign({__chunkExtractor:r},t))})}},m=function(e){return e};function T(e){var t=e.resolve,r=void 0===t?m:t,n=e.render,o=e.onLoad;function s(e,t){void 0===t&&(t={});var s=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),u={};function d(e){return t.cacheKey?t.cacheKey(e):s.resolve?s.resolve(e):null}var m=function(e){var a,p;function m(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:d(r)},n.promise=null,f(!r.__chunkExtractor||s.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?l(n):(s.requireAsync(r).catch(function(){}),n.loadSync(),r.__chunkExtractor.addChunk(s.chunkName(r)),l(n)):(!1!==t.ssr&&s.isReady&&s.isReady(r)&&n.loadSync(),n)}p=e,(a=m).prototype=Object.create(p.prototype),a.prototype.constructor=a,a.__proto__=p,m.getDerivedStateFromProps=function(e,t){var r=d(e);return c({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var T=m.prototype;return T.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},T.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},T.componentWillUnmount=function(){this.mounted=!1},T.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},T.triggerOnLoad=function(){var e=this;o&&setTimeout(function(){o(e.state.result,e.props)})},T.loadSync=function(){if(this.state.loading)try{var e=s.requireSync(this.props),t=r(e,{Loadable:h});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},T.getCacheKey=function(){return d(this.props)||JSON.stringify(this.props)},T.getCache=function(){return u[this.getCacheKey()]},T.setCache=function(e){u[this.getCacheKey()]=e},T.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,a=(n.__chunkExtractor,n.forwardedRef,i(n,["__chunkExtractor","forwardedRef"]));this.promise=s.requireAsync(a).then(function(n){var a=r(n,{Loadable:h});t.suspense&&e.setCache(a),e.safeSetState({result:r(n,{Loadable:h}),loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){e.safeSetState({error:t,loading:!1})})}return this.promise},T.render=function(){var e=this.props,r=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,i(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,s=l.error,u=l.loading,f=l.result;if(t.suspense){var d=this.getCache();if(!d)throw this.loadAsync();return n({loading:!1,fallback:null,result:d,options:t,props:c({},o,{ref:r})})}if(s)throw s;var p=a||t.fallback||null;return u?p:n({loading:u,fallback:p,result:f,options:t,props:c({},o,{ref:r})})},m}(a.a.Component),T=p(m),h=a.a.forwardRef(function(e,t){return a.a.createElement(T,Object.assign({forwardedRef:t},e))});return h.preload=function(e){s.requireAsync(e)},h.load=function(e){return s.requireAsync(e)},h}return{loadable:s,lazy:function(e,t){return s(e,c({},t,{suspense:!0}))}}}var h=T({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return u()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return a.a.createElement(t,r)}}),E=h.loadable,b=h.lazy,y=T({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),g=y.loadable,A=y.lazy;var v=E;v.lib=g,b.lib=A;var S=v,_=r("Bl7J"),w=r("LbRr"),P=r("vrv3"),O=(r("cFtU"),r("gu/5"),r("eoYm"),r("m210"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("YbXK"),r("ToIb"),r("Po2f")),R=r("eTKx"),M=function(e){for(var t=e.article,r=O.data,n=t.frontmatter.tags||[],o=new Set,i=3;i>=0&&!(o.size>=3);i--){var c=r.posts.nodes,l=Array.isArray(c),s=0;for(c=l?c:c[Symbol.iterator]();;){var u;if(l){if(s>=c.length)break;u=c[s++]}else{if((s=c.next()).done)break;u=s.value}var f=u;if(f.id!==t.id){if(o.size>=3)break;var d=0,p=f.frontmatter.tags,m=Array.isArray(p),T=0;for(p=m?p:p[Symbol.iterator]();;){var h;if(m){if(T>=p.length)break;h=p[T++]}else{if((T=p.next()).done)break;h=T.value}var E=h;n.includes(E)&&d++}d>=i&&!o.has(f)&&o.add(f)}}}return a.a.createElement(a.a.Fragment,null,Array.from(o.values()).map(function(e){return a.a.createElement(R.a,{key:e.id,article:e})}))},C=r("vrFN"),k=r("lYb1"),I=r("aFnX"),N=function(e){var t=e.url,r=void 0===t?"":t,n=e.title,a=void 0===n?"":n,o=e.image,i=void 0===o?"":o,c=e.description,l=void 0===c?"":c,s=e.dateModified,u=void 0===s?new Date:s,f=e.datePublished,d=void 0===f?new Date:f;return{"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":r},url:r,headline:a,dateModified:u.toISOString(),datePublished:d.toISOString(),publisher:Object(k.a)(),author:Object(I.a)(),image:i,description:l}};r.d(t,"pageQuery",function(){return x});var L=S(function(){return r.e(13).then(r.bind(null,"JoyC"))}),x=(t.default=function(e){var t=e.data,r=e.location,n=t.markdownRemark,i=new URL(r.pathname,t.site.siteMetadata.siteUrl),c=new Date(n.frontmatter.date),l=new Date(n.frontmatter.last_modified_at||c);return a.a.createElement(_.a,{location:r},a.a.createElement(w.a,{location:r,image:n.fields.image}),a.a.createElement("div",{className:"alex-article"},a.a.createElement("div",{className:"alex-article__main"},a.a.createElement("h1",{itemProp:"name headline"},n.frontmatter.title),a.a.createElement("div",{className:"alex-article__main__byline"},"Posted",n.frontmatter.author?a.a.createElement(a.a.Fragment,null," by ",a.a.createElement("span",{itemProp:"author",itemType:"http://schema.org/Person"},a.a.createElement("a",{href:"/"},a.a.createElement("span",{itemProp:"name"},"Alex")))):null,c?a.a.createElement(a.a.Fragment,null," on ",a.a.createElement("time",{className:"alex-article__main__date",dateTime:c,itemProp:"datePublished"},n.fields.formattedDate),"."):null,n.frontmatter.image_credit?a.a.createElement(a.a.Fragment,null," "+n.frontmatter.image_credit):null),a.a.createElement("article",{dangerouslySetInnerHTML:{__html:n.html},className:"alex-article__body article-description",itemProp:"articleBody"}),a.a.createElement("hr",null),a.a.createElement("h3",{className:"share"},"Share"),a.a.createElement(P.a,{title:n.frontmatter.title,url:i}),a.a.createElement(L,{url:i})),a.a.createElement("div",{className:"alex-article__aside"},n.frontmatter.tags?a.a.createElement("div",{className:"alex-article__topics"},a.a.createElement("strong",null,"Topics: "),a.a.createElement("ul",null,n.frontmatter.tags.map(function(e){return a.a.createElement("li",{key:e},a.a.createElement(o.a,{to:"/topic/"+e},e))}))):null,a.a.createElement("div",{className:"alex-article__recommended"},a.a.createElement("h2",null,"Read Next"),a.a.createElement(M,{article:n})))),a.a.createElement(C.a,{title:n.frontmatter.title,description:n.excerpt},a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(N({url:i,title:n.frontmatter.title,image:n.fields.image,description:n.frontmatter.excerpt,dateModified:l,datePublished:c})))))},"3774702905")},aFnX:function(e,t,r){"use strict";var n=r("lYb1");t.a=function(){return{"@type":"Person",name:"Alex",memberOf:Object(n.a)(),givenName:"Alex",familyName:"Wilson"}}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,l,s,u=n(t),f=n(r);if(u&&f){if((l=t.length)!=r.length)return!1;for(c=l;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=f)return!1;var d=t instanceof Date,p=r instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==r.getTime();var m=t instanceof RegExp,T=r instanceof RegExp;if(m!=T)return!1;if(m&&T)return t.toString()==r.toString();var h=a(t);if((l=h.length)!==a(r).length)return!1;for(c=l;0!=c--;)if(!o.call(r,h[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=l;0!=c--;)if(!("_owner"===(s=h[c])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce(function(e,t){return e[a[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),o=r("rjfK").f,i=r("chL8").f,c=r("mhTz"),l=r("lb9j"),s=n.RegExp,u=s,f=s.prototype,d=/a/g,p=/a/g,m=new s(d)!==d;if(r("QPJK")&&(!m||r("96qb")(function(){return p[r("sOol")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")}))){s=function(e,t){var r=this instanceof s,n=c(e),o=void 0===t;return!r&&n&&e.constructor===s&&o?e:a(m?new u(n&&!o?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&o?l.call(e):t),r?this:f,s)};for(var T=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=i(u),E=0;h.length>E;)T(h[E++]);f.constructor=s,s.prototype=f,r("IYdN")(n,"RegExp",s)}r("to/b")("RegExp")},lYb1:function(e,t,r){"use strict";var n=function(){return{"@type":"ImageObject","@context":"http://schema.org",url:"https://avatars.githubusercontent.com/u/440052",width:460,height:460}};t.a=function(){return{"@type":"Organization","@context":"http://schema.org",name:"Alex Wilson",logo:n(),url:"https://alexwilson.tech",sameAs:["https://www.twitter.com/antoligy","https://www.linkedin.com/in/alex-","https://github.com/alexwilson"]}}},qT12:function(e,t,r){"use strict";r("m210"),r("4DPX"),r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,T=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,E=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case d:case i:case l:case c:case m:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case E:case h:case o:return t}}}function A(e){return g(e)===d}t.typeOf=g,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=p,t.Fragment=i,t.Lazy=E,t.Memo=h,t.Portal=o,t.Profiler=l,t.StrictMode=c,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===l||e===c||e===m||e===T||"object"==typeof e&&null!==e&&(e.$$typeof===E||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===y)},t.isAsyncMode=function(e){return A(e)||g(e)===f},t.isConcurrentMode=A,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===E},t.isMemo=function(e){return g(e)===h},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===l},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===m}},v1p5:function(e,t,r){(function(e){r("wZFJ"),r("HQhv"),r("1dPr"),r("JHok"),r("MIFh"),r("sc67"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("OeI1"),r("AqHK"),r("U6Bt"),r("sC2a"),r("E5k/"),r("m210"),r("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=l(r("q1tI")),i=l(r("MgzW")),c=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,c.TAG_NAMES.TITLE),r=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},m=function(e,t){return t.filter(function(e){return void 0!==e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},T=function(e,t,r){var a={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var n={};r.filter(function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(n),l=0;l<o.length;l++){var s=o[l],u=(0,i.default)({},a[s],n[s]);a[s]=u}return e},[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},E=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout(function(){E(e)},0)}),b=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;P(c.TAG_NAMES.BODY,n),P(c.TAG_NAMES.HTML,a),w(d,p);var m={baseTag:O(c.TAG_NAMES.BASE,r),linkTags:O(c.TAG_NAMES.LINK,o),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,l),scriptTags:O(c.TAG_NAMES.SCRIPT,u),styleTags:O(c.TAG_NAMES.STYLE,f)},T={},h={};Object.keys(m).forEach(function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(h[e]=m[e].oldTags)}),t&&t(),s(e,T,h)},_=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,r.isEqualNode(e)})?a.splice(i,1):o.push(r)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return r.appendChild(e)}),{oldTags:a,newTags:o}},R=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t},t)},C=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(r,n),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=R(r),o=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]}),o.default.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var a=Object.keys(n).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a},""),o=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t},t)},t.handleClientStateChange=function(e){v&&g(v),e.defer?v=y(function(){S(e,function(){v=null})}):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,n),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,a,n),link:C(c.TAG_NAMES.LINK,o,n),meta:C(c.TAG_NAMES.META,i,n),noscript:C(c.TAG_NAMES.NOSCRIPT,l,n),script:C(c.TAG_NAMES.SCRIPT,s,n),style:C(c.TAG_NAMES.STYLE,u,n),title:C(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=A}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),o=r.n(a),i=r("TJpk"),c=r.n(i),l=r("lYb1"),s=r("aFnX");function u(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,u=e.title,f=e.children,d=n.data.site,p=t||d.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s - "+d.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:u},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:p}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)},o.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"Alex Wilson's writing via RSS",href:"/feed.xml"}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@type":"WebPage","@context":"http://schema.org",name:d.siteMetadata.title,description:d.siteMetadata.description,copyrightHolder:Object(s.a)(),publisher:Object(l.a)()})),o.a.createElement("link",{rel:"webmention",href:"https://webmention.io/alexwilson.tech/webmention"}),o.a.createElement("link",{rel:"pingback",href:"https://webmention.io/alexwilson.tech/xmlrpc"}),f)}u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u},vrv3:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.url,r=e.title;return a.a.createElement("div",{className:"alex-share"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/intent/tweet?url="+t+"&amp;text="+r+"&amp;related=antoligy&amp;via=antoligy"},a.a.createElement("img",{src:"/svg/twitter.svg",alt:"Twitter",title:"Share on Twitter"}))),a.a.createElement("li",null,a.a.createElement("a",{href:"http://www.facebook.com/sharer.php?u="+t+"&amp;t="+r},a.a.createElement("img",{src:"/svg/facebook.svg",alt:"Facebook",title:"Share on Facebook"}))),a.a.createElement("li",null,a.a.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&amp;url="+t+"&amp;title="+r},a.a.createElement("img",{src:"/svg/linkedin.svg",alt:"LinkedIn",title:"Share on LinkedIn"}))),a.a.createElement("li",null,a.a.createElement("a",{href:"http://reddit.com/submit?url="+t+"&amp;title="+r},a.a.createElement("img",{src:"/svg/reddit.svg",alt:"Reddit",title:"Share on Reddit"})))))}},xHvr:function(e,t,r){"use strict";r("4DPX"),r("R48M");var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function l(e){return n.isMemo(e)?i:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=p(r);a&&a!==m&&e(t,a,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var c=l(t),T=l(r),h=0;h<i.length;++h){var E=i[h];if(!(o[E]||n&&n[E]||T&&T[E]||c&&c[E])){var b=d(r,E);try{s(t,E,b)}catch(y){}}}}return t}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-templates-article-js-a108209ed6a20a94a3f6.js.map