(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(156);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",{className:"page-header"},"Questions"),r.a.createElement("div",{className:"page-content row wrap"},r.a.createElement("section",null,r.a.createElement("ul",{className:"questions"},r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Where is Leesburg, VA?"),r.a.createElement("p",null,r.a.createElement("span",null,"The city of Leesburg is about an hour west of Washington DC and about 30 minutes from Dulles."))),r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Where should I stay?"),r.a.createElement("p",null,r.a.createElement("span",null,"We have two hotel blocks reserved; one in Leesburg (a bit closer to the wedding) and one in Dulles (nearer to DC and the Dulles airport).  Information for these is on the Accommodations page."))),r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"What should I wear?"),r.a.createElement("p",null,r.a.createElement("span",null,"We suggest cocktail attire, but please be comfortable."))),r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Is the ceremony indoors?"),r.a.createElement("p",null,r.a.createElement("span",null,"Yes, the ceremony and reception are indoors so no need to worry about the weather."))))),r.a.createElement("section",null,r.a.createElement("ul",{className:"questions"},r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Where is the reception and how late will it go?"),r.a.createElement("p",null,r.a.createElement("span",null,"The reception is at the same location as the ceremony and will go until 10pm."))),r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Will there be parking at the venue?"),r.a.createElement("p",null,r.a.createElement("span",null,"Yes, there is parking at the venue.  We will also be providing a shuttle from the hotels listed on the Accommodations page."))),r.a.createElement("li",null,r.a.createElement("h2",{className:"breathe"},"Can I take pictures during the ceremony?"),r.a.createElement("p",null,r.a.createElement("span",null,"We ask that you don't take pictures during the ceremony itself; we will have photos available when we get them from our photographer.")))))))}},150:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return h});var n=t(0),r=t.n(n),l=t(4),s=t.n(l),i=t(149),c=t.n(i);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var o=t(151),u=t.n(o);t.d(a,"PageRenderer",function(){return u.a});var m=t(32);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Brian & Katie"}}}}},153:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),l=t(4),s=t.n(l),i=t(51),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},154:function(e,a,t){e.exports={header:"header-module--header--3A712",link:"header-module--link--3nE3Q",gatsbyLink:"header-module--gatsbyLink--qAVsJ",navBar:"header-module--navBar--1bSIH"}},155:function(e,a,t){},156:function(e,a,t){"use strict";var n=t(152),r=t(0),l=t.n(r),s=t(4),i=t.n(s),c=t(150),o=t(157),u=(t(158),t(154)),m=t.n(u),d=function(){return l.a.createElement("header",{className:m.a.header},l.a.createElement("nav",{className:m.a.navBar},l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/"},"Home")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/details"},"Details")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/coming-soon"},"Wedding Party")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/accomodations"},"Accomodations")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/coming-soon"},"RSVP")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/questions"},"Questions")),l.a.createElement("div",{className:m.a.link},l.a.createElement(c.Link,{className:m.a.gatsbyLink,to:"/coming-soon"},"Registry"))))},h=(t(155),function(e){var a=e.children;return l.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement("div",{className:"page"},l.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(o.Helmet,null,l.a.createElement("title",null,"Brian & Katie"),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display",rel:"stylesheet"}),l.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/favicon2.ico"})),l.a.createElement("div",{className:"content"},l.a.createElement("main",null,a),l.a.createElement("footer",{className:"footer"},"October 26, 2019")))},data:n})});h.propTypes={children:i.a.node.isRequired};a.a=h}}]);
//# sourceMappingURL=component---src-pages-questions-js-24bb030f9d29891d9b0e.js.map