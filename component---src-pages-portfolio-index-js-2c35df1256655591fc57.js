(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0i3n":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("7vrA"),o=a("3Z9Z"),c=a("JI6e"),s=a("dLWb"),u=a("/d1K"),m=a("H/BN"),p=a("kUn4"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.breadcrumb_items,a=e.children;return l.a.createElement(s.a,null,l.a.createElement(u.a,null),l.a.createElement(i.a,null,l.a.createElement(o.a,null,l.a.createElement(c.a,{md:10,lg:8,className:"offset-md-1 offset-lg-2"},l.a.createElement(i.a,null,l.a.createElement(m.a,{breadcrumb_items:t}),l.a.createElement(o.a,null,a))))),l.a.createElement(p.a,null))},t}(r.Component)},"533F":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Q}));var n=a("o0o1"),r=a.n(n),l=(a("ls82"),a("HaE+")),i=a("dI71"),o=a("q1tI"),c=a.n(o),s=a("0i3n"),u=a("Wbzz"),m=a("JI6e"),p=a("wx14"),d=a("zLVn"),f=a("TSYQ"),g=a.n(f),b=a("vUet"),h=a("YdCC"),v=a("U1MP"),E=c.a.createContext(null);E.displayName="CardContext";var x=E,y=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.variant,l=e.as,i=void 0===l?"img":l,o=Object(d.a)(e,["bsPrefix","className","variant","as"]),s=Object(b.a)(a,"card-img");return c.a.createElement(i,Object(p.a)({ref:t,className:g()(r?s+"-"+r:s,n)},o))}));y.displayName="CardImg",y.defaultProps={variant:null};var j=y,O=Object(v.a)("h5"),w=Object(v.a)("h6"),k=Object(h.a)("card-body"),_=Object(h.a)("card-title",{Component:O}),N=Object(h.a)("card-subtitle",{Component:w}),P=Object(h.a)("card-link",{Component:"a"}),C=Object(h.a)("card-text",{Component:"p"}),I=Object(h.a)("card-header"),L=Object(h.a)("card-footer"),T=Object(h.a)("card-img-overlay"),S=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,l=e.text,i=e.border,s=e.body,u=e.children,m=e.as,f=void 0===m?"div":m,h=Object(d.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(b.a)(a,"card"),E=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return c.a.createElement(x.Provider,{value:E},c.a.createElement(f,Object(p.a)({ref:t},h,{className:g()(n,v,r&&"bg-"+r,l&&"text-"+l,i&&"border-"+i)}),s?c.a.createElement(k,null,u):u))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=j,S.Title=_,S.Subtitle=N,S.Body=k,S.Link=P,S.Text=C,S.Header=I,S.Footer=L,S.ImgOverlay=T;var q=S;function A(e){var t=e.id,a=e.name,n=e.description,r=e.last_update,l=e.thumbnail_url,i=e.limit_desc;return n=null!==n?n:"No description available",c.a.createElement(m.a,{xl:6,lg:6,md:6},c.a.createElement(q,{key:t,style:{marginBottom:"1.75rem"}},c.a.createElement(q.Img,{variant:"top",src:l||"https://via.placeholder.com/640x320"}),c.a.createElement(q.Body,null,c.a.createElement(q.Title,null,a),c.a.createElement(q.Subtitle,{className:"mb-2 text-muted"},"Last commit: ",r),c.a.createElement(q.Text,{style:{minHeight:"7rem"}},n.length<=i?n:n.substring(0,i)+"..."),c.a.createElement(u.Link,{className:"btn btn-outline-primary float-right",to:"/portfolio/r?name="+a},"Open README.md"))))}var W=a("vDqi"),z=a.n(W),B=a("EYWl"),U=a("lqS3"),D=a("idVC"),H=a("7vrA"),M=a("3Z9Z"),R=a("Qyje"),J=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={loading:!1,error:!1,page_number:null,url:"",next:null,prev:null,last:null,items:[]},t.per_page=4,t.user="desenfirman",t.topic="portfolio",t.fetchPortfolioList=function(){var e=Object(l.a)(r.a.mark((function e(n){var l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({page_number:n?n.page_number:t.props.page_number});case 2:return e.next=4,t.setState({url:"https://api.github.com/search/repositories?q=user:"+t.user+"+topic:"+t.topic+"+fork:true&page="+t.state.page_number+"&per_page="+t.per_page,loading:!0});case 4:return l=a("Rpzk"),e.next=7,z.a.get(t.state.url).then((function(e){var a=e.data.items,n=e.headers.link?l.parser(e.headers.link):{next:null,prev:null,last:null},r=n.next,i=n.prev,o=n.last;t.setState({loading:!1,next:r,prev:i,last:o,items:a})})).catch((function(e){t.setState({loading:!1,error:e})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.fetchPortfolioList(null)},n.componentWillUnmount=function(){this.setState({loading:!1,error:!1,page_number:null,url:"",next:null,prev:null,last:null,items:[]})},n.componentWillUpdate=function(e,t){this.props.page_number!==e.page_number&&this.fetchPortfolioList(e)},n.render=function(){var e=this.state.items,t=this.state.loading?c.a.createElement(H.a,null,c.a.createElement("p",{style:{textAlign:"center",marginTop:"28vh",marginBottom:"28vh"}},"Please hold on!")):e.length>0?e.map((function(e){return c.a.createElement(A,{key:e.id,name:e.name,description:e.description,last_update:Object(U.a)(e.pushed_at),thumbnail_url:e.homepage,limit_desc:160})})):c.a.createElement(H.a,null,c.a.createElement("p",{style:{textAlign:"center",marginTop:"28vh",marginBottom:"28vh"}},"Oh noes, something error :("));return c.a.createElement(H.a,null,c.a.createElement(M.a,{className:"d-flex flex-wrap"},t),c.a.createElement(D.b,null),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,c.a.createElement(u.Link,{className:"btn btn-link "+(this.state.prev?"":"disabled"),to:"/portfolio/?p="+this.state.prev,replace:!0},"« Previous")),c.a.createElement("li",null,c.a.createElement(u.Link,{className:"btn btn-link "+(this.state.next?"":"disabled"),to:"/portfolio/?p="+this.state.next,replace:!0},"Next »"))),c.a.createElement(D.b,null))},t}(c.a.Component);function Q(e){var t=e.location.search?R.parse(e.location.search,{ignoreQueryPrefix:!0}).p:1;return c.a.createElement(s.a,{breadcrumb_items:[{link:"/portfolio",name:"Portfolio"}]},c.a.createElement(B.a,{title:"Portfolio"}),c.a.createElement(J,{page_number:t}))}},EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),i=a("Wbzz");t.a=function(e){var t=e.title,a=void 0===t?null:t,n=e.description,o=void 0===n?null:n,c=e.image,s=void 0===c?null:c,u=e.pathname,m=void 0===u?null:u;e.article;return r.a.createElement(i.StaticQuery,{query:"2647592595",render:function(e){var t=e.site.siteMetadata,n=t.defaultTitle,i=t.titleTemplate,c=t.defaultDescription,u=t.siteUrl,p=t.defaultImage,d=t.googleAnalyticsTrackingId,f={title:a||n,description:o||c,image:""+u+(s||p),url:""+u+(m||"/"),googleAnalyticsTrackingId:d};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:f.title,titleTemplate:i},r.a.createElement("meta",{name:"description",content:f.description}),r.a.createElement("meta",{name:"image",content:f.image}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+d}),r.a.createElement("script",null,"\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '"+d+"');\n                ")))}})}},Rpzk:function(e,t,a){var n,r;(r={}).parser=function(e){return e.split(",").map((function(e){return e.split(";").map((function(e,t){return 0===t?/page=(\d+)/.exec(e)[1]:1===t?/rel="(.+)"/.exec(e)[1]:void 0}))})).reduce((function(e,t,a){return e[t[1]]=t[0],e}),{})},e.exports?e.exports=r:void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}}]);
//# sourceMappingURL=component---src-pages-portfolio-index-js-2c35df1256655591fc57.js.map