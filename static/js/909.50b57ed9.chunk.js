"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[909],{713:function(e,r,t){t.d(r,{Df:function(){return s},TP:function(){return l},tx:function(){return m},z1:function(){return p},zv:function(){return f}});var n=t(861),a=t(757),c=t.n(a),u=t(243),i="0a9cc6518b5399b3bdeab9b4d5bc1cbb";function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i),e.next=4,u.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(c().mark((function e(r){var t,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(r,"&page=").concat(t),e.next=5,u.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),h.apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i),e.next=4,u.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},909:function(e,r,t){t.r(r),t.d(r,{default:function(){return s}});var n=t(439),a=t(791),c=t(713),u={},i=t(184),s=function(e){var r=e.movieId,t=(0,a.useState)([]),s=(0,n.Z)(t,2),o=s[0],p=s[1],h=(0,a.useState)(null),l=(0,n.Z)(h,2),v=l[0],f=l[1];return(0,a.useEffect)((function(){(0,c.tx)(r).then((function(e){p(e)})).catch((function(e){f("Error fetching trending movies: "+e.message)}))}),[r]),(0,i.jsx)("div",{className:u.reviewsContainer,children:o.length>0?(0,i.jsx)("ul",{className:u.reviewList,children:o.map((function(e){return(0,i.jsxs)("li",{className:u.reviewItem,children:[(0,i.jsx)("h2",{className:u.authorName,children:e.author}),(0,i.jsx)("p",{className:u.reviewContent,children:e.content})]},e.id)}))}):(0,i.jsx)("p",{className:u.noReviews,children:v?"Error: ".concat(v):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=909.50b57ed9.chunk.js.map