(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VRlk:function(e,t,a){"use strict";a.r(t);var r=a("FdF9"),n=a("Wbzz"),l=a("Bl7J"),i=a("LbRr"),o=a("vrv3"),u=a("eTKx");function c(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var m=function(e){for(var t=e.article,a=Object(n.c)("2203825502"),l=t.frontmatter.tags||[],i=new Set,o=3;o>=0&&!(i.size>=3);o--)for(var s,m=c(a.posts.nodes);!(s=m()).done;){var d=s.value;if(d.id!==t.id){if(i.size>=3)break;for(var f,p=0,h=c(d.frontmatter.tags);!(f=h()).done;){var E=f.value;l.includes(E)&&p++}p>=o&&!i.has(d)&&i.add(d)}}return r.default.createElement(r.default.Fragment,null,Array.from(i.values()).map((function(e){return r.default.createElement(u.a,{key:e.id,article:e})})))},d=a("vrFN"),f=a("lYb1"),p=a("aFnX"),h=function(e){var t=e.url,a=void 0===t?"":t,r=e.title,n=void 0===r?"":r,l=e.image,i=void 0===l?"":l,o=e.description,u=void 0===o?"":o,c=e.dateModified,s=void 0===c?new Date:c,m=e.datePublished,d=void 0===m?new Date:m;return{"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":a},url:a,headline:n,dateModified:s.toISOString(),datePublished:d.toISOString(),publisher:Object(f.a)(),author:Object(p.a)(),image:i,description:u}},E=a("HaE+"),v=a("dI71"),g=a("o0o1"),b=a.n(g),w=(a("E9XD"),a("LpSC")),y=a.n(w),_=a("IGbE"),k=function(e){return function(t){return t["wm-property"]===e}},x=function(e){return e.filter(k("like-of"))},S=function(e){return e.filter(k("mention-of"))},N=function(e){return e.filter(k("repost-of"))},P=function(e){return e.filter(k("reply-of"))};function A(e){var t=e.webmention;return r.default.createElement("a",{href:t.author.url,title:t.author.name},r.default.createElement(_.a,{src:t.author.photo,width:64,height:64,quality:"lossless",format:"png"}))}function F(e){var t=e.webmentions;return r.default.createElement("ul",null,t.map((function(e){return r.default.createElement("li",{key:e["wm-id"]},r.default.createElement(A,{webmention:e}))})))}var j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={error:null,isLoaded:!1,mentions:[],reposts:[],replies:[],likes:[]},a}Object(v.a)(t,e);var a=t.prototype;return a.fetchWebmentions=function(){var e=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return y()("https://webmention.io/api/mentions.jf2?target="+e).then((function(e){return e.json()})).then((function(e){return e.children}))}))).then((function(e){return e.reduce((function(e,t){return e.concat(t)}),[])})).catch(console.error);case 2:a=e.sent,this.setState({reposts:N(a),mentions:S(a),likes:x(a),replies:P(a)});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=this.props.urls||[];this.props.url&&e.push(this.props.url),e.length>0&&this.fetchWebmentions(e)},a.render=function(){var e=this.state,t=e.likes,a=e.replies,n=e.reposts,l=e.mentions,i=t.length>0,o=(a.length,n.length>0);l.length;return!1===this.isLoaded?null:r.default.createElement("div",{className:"alex-webmentions"},i?r.default.createElement("div",{className:"alex-webmentions__likes"},r.default.createElement("h3",null,"Likes"),r.default.createElement(F,{webmentions:t})):null,o?r.default.createElement("div",{className:"alex-webmentions__reposts"},r.default.createElement("h3",null,"Reposts"),r.default.createElement(F,{webmentions:n})):null)},t}(r.Component);t.default=function(e){var t=e.data,a=e.location,u=t.markdownRemark,c=new URL(a.pathname,t.site.siteMetadata.siteUrl),s=new URL(u.fields._legacy_slug,t.site.siteMetadata.siteUrl),f=new Date(u.frontmatter.date),p=new Date(u.frontmatter.last_modified_at||f);return r.default.createElement(l.a,{location:a},r.default.createElement(i.a,{location:a,image:u.fields.image}),r.default.createElement("div",{className:"alex-article"},r.default.createElement("div",{className:"alex-article__main"},r.default.createElement("h1",{itemProp:"name headline"},u.frontmatter.title),r.default.createElement("div",{className:"alex-article__main__byline"},"Posted",u.frontmatter.author?r.default.createElement(r.default.Fragment,null," by ",r.default.createElement("span",{itemProp:"author",itemType:"http://schema.org/Person"},r.default.createElement("a",{href:"/"},r.default.createElement("span",{itemProp:"name"},"Alex")))):null,f?r.default.createElement(r.default.Fragment,null," on ",r.default.createElement("time",{className:"alex-article__main__date",dateTime:f,itemProp:"datePublished"},u.fields.formattedDate),"."):null,u.frontmatter.image_credit?r.default.createElement(r.default.Fragment,null," "+u.frontmatter.image_credit):null),r.default.createElement("article",{dangerouslySetInnerHTML:{__html:u.html},className:"alex-article__body article-description",itemProp:"articleBody"}),r.default.createElement("hr",null),r.default.createElement("h3",{className:"share"},"Share"),r.default.createElement(o.a,{title:u.frontmatter.title,url:c}),r.default.createElement(j,{urls:[c,s]})),r.default.createElement("div",{className:"alex-article__aside"},u.frontmatter.tags?r.default.createElement("div",{className:"alex-article__topics"},r.default.createElement("strong",null,"Topics: "),r.default.createElement("ul",null,u.frontmatter.tags.map((function(e){return r.default.createElement("li",{key:e},r.default.createElement(n.a,{to:"/topic/"+e},e))})))):null,r.default.createElement("div",{className:"alex-article__recommended"},r.default.createElement("h2",null,"Read Next"),r.default.createElement(m,{article:u})))),r.default.createElement(d.a,{title:u.frontmatter.title,description:u.excerpt},r.default.createElement("script",{type:"application/ld+json"},JSON.stringify(h({url:c,title:u.frontmatter.title,image:u.fields.image,description:u.frontmatter.excerpt,dateModified:p,datePublished:f})))))}},vrv3:function(e,t,a){"use strict";var r=a("FdF9");t.a=function(e){var t=e.url,a=e.title;return r.default.createElement("div",{className:"alex-share"},r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("a",{href:"https://twitter.com/intent/tweet?url="+t+"&amp;text="+a+"&amp;related=AlexWilsonV1&amp;via=AlexWilsonV1"},r.default.createElement("img",{src:"/svg/twitter.svg",alt:"Twitter",title:"Share on Twitter"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://www.facebook.com/sharer.php?u="+t+"&amp;t="+a},r.default.createElement("img",{src:"/svg/facebook.svg",alt:"Facebook",title:"Share on Facebook"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&amp;url="+t+"&amp;title="+a},r.default.createElement("img",{src:"/svg/linkedin.svg",alt:"LinkedIn",title:"Share on LinkedIn"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://reddit.com/submit?url="+t+"&amp;title="+a},r.default.createElement("img",{src:"/svg/reddit.svg",alt:"Reddit",title:"Share on Reddit"})))))}}}]);
//# sourceMappingURL=component---src-templates-article-js-df9aa7fd97ca137b0719.js.map