(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"0i3n":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("7vrA"),c=a("3Z9Z"),o=a("JI6e"),m=a("dLWb"),s=a("/d1K"),u=a("H/BN"),d=a("kUn4"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.breadcrumb_items,a=e.children;return l.a.createElement(m.a,null,l.a.createElement(s.a,null),l.a.createElement(i.a,null,l.a.createElement(c.a,null,l.a.createElement(o.a,{md:10,lg:8,className:"offset-md-1 offset-lg-2"},l.a.createElement(i.a,null,l.a.createElement(u.a,{breadcrumb_items:t}),l.a.createElement(c.a,null,a))))),l.a.createElement(d.a,null))},t}(r.Component)},EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),i=a("Wbzz");t.a=function(e){var t=e.title,a=void 0===t?null:t,n=e.description,c=void 0===n?null:n,o=e.image,m=void 0===o?null:o,s=e.pathname,u=void 0===s?null:s;e.article;return r.a.createElement(i.StaticQuery,{query:"2647592595",render:function(e){var t=e.site.siteMetadata,n=t.defaultTitle,i=t.titleTemplate,o=t.defaultDescription,s=t.siteUrl,d=t.defaultImage,f=t.googleAnalyticsTrackingId,p={title:a||n,description:c||o,image:""+s+(m||d),url:""+s+(u||"/"),googleAnalyticsTrackingId:f};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:p.title,titleTemplate:i},r.a.createElement("meta",{name:"description",content:p.description}),r.a.createElement("meta",{name:"image",content:p.image}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+f}),r.a.createElement("script",null,"\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '"+f+"');\n                ")))}})}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),c=a("0i3n"),o=a("EYWl"),m=a("7vrA"),s=a("idVC"),u=a("7evw"),d=a("LvDl"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.disqusShortname,a={url:this.props.location.origin+e.fields.slug,identifier:e.fields.slug,title:e.frontmatter.title},n=this.props.pageContext,r=n.previous,f=n.next;return l.a.createElement(c.a,{breadcrumb_items:[{link:"/blog",name:"Blog"},{link:e.fields.slug,name:e.frontmatter.title}]},l.a.createElement(o.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt||"nothin’",pathname:e.fields.slug,article:!0}),l.a.createElement(m.a,{fluid:!0},l.a.createElement("main",null,l.a.createElement("p",{className:"time"},"Written on ",l.a.createElement("time",null,e.frontmatter.date)),l.a.createElement("p",{className:"rd-t"},e.fields.readingTime.text),l.a.createElement("h1",null,e.frontmatter.title),l.a.createElement(s.b,null),l.a.createElement("article",{className:"text-body",dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement(m.a,{style:{marginTop:"4rem"},fluid:!0},e.frontmatter.tags.map((function(e){return l.a.createElement(i.Link,{to:"/blog/tags/"+d.kebabCase(e),className:"badge badge-dark"},e)}))),l.a.createElement(s.b,null),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,r&&l.a.createElement(i.Link,{className:"btn btn-link",to:r.fields.slug,rel:"prev"},"« ",r.frontmatter.title.length<25?r.frontmatter.title:r.frontmatter.title.substring(0,25)+" ...")),l.a.createElement("li",null,f&&l.a.createElement(i.Link,{className:"btn btn-link",to:f.fields.slug,rel:"next"},f.frontmatter.title.length<25?f.frontmatter.title:f.frontmatter.title.substring(0,25)+" ..."," »"))),l.a.createElement(s.b,null),l.a.createElement(m.a,{fluid:!0},l.a.createElement(u.DiscussionEmbed,{shortname:t,config:a})))))},t}(l.a.Component);t.default=f;var p="58875755"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f1de43b1fdbdc3885364.js.map