(self.webpackChunkSnapOdds=self.webpackChunkSnapOdds||[]).push([[505],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7433:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5444),a=r(1442),l=r(6725),c=r(3245);t.default=function(e){var t,r=e.data,s=e.location,u=r.mdx,i=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=r.previous,f=r.next;return n.createElement(c.Ar,{location:s,title:i},n.createElement(c.pQ,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),n.createElement(c.W2,null,n.createElement("article",{className:"article",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("section",{itemProp:"articleBody",className:"prose prose-xl mt-8 mx-auto"},n.createElement(c.F8,{itemProp:"headline",text:u.frontmatter.title}),n.createElement(c.wq,{term:"Published on",definition:u.frontmatter.date}),n.createElement(l.MDXRenderer,null,u.body))),(p||f)&&n.createElement("section",{className:"pageNav"},n.createElement("div",{className:"pageNav__title"},"Continue reading"),n.createElement("nav",{className:"pageNav__nav"},n.createElement("ul",null,n.createElement("li",null,p&&n.createElement(o.Link,{to:p.fields.slug,rel:"prev",className:"pageLink"},n.createElement(a.Y4O,null),n.createElement("span",{className:"pageLink__text"},p.frontmatter.title))),n.createElement("li",null,f&&n.createElement(o.Link,{to:f.fields.slug,rel:"next",className:"pageLink"},n.createElement("span",{className:"pageLink__text"},f.frontmatter.title),n.createElement(a.LZ3,null))))))))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),s=f(t),d=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,u({},a))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-tsx-0bbba071528b6a0732bc.js.map