"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[705,165,909],{713:function(e,t,r){r.d(t,{Df:function(){return o},TP:function(){return h},tx:function(){return m},z1:function(){return l},zv:function(){return p}});var n=r(861),i=r(757),s=r.n(i),a=r(243),c="0a9cc6518b5399b3bdeab9b4d5bc1cbb";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c),e.next=4,a.Z.get(t);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(s().mark((function e(t){var r,n,i,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,n="https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&page=").concat(r),e.next=5,a.Z.get(n);case 5:return i=e.sent,e.abrupt("return",i.data.results);case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),d.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c),e.next=4,a.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:return e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},165:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),i=r(791),s=r(713),a="Cast_castContainer__oFsds",c="Cast_error__A5OsQ",o="Cast_castList__GVdlp",u="Cast_actorItem__hK1Ln",l=r(184),d=function(e){var t=e.movieId,r=(0,i.useState)([]),d=(0,n.Z)(r,2),h=d[0],v=d[1],p=(0,i.useState)(null),f=(0,n.Z)(p,2),m=f[0],_=f[1];return(0,i.useEffect)((function(){(0,s.zv)(t).then((function(e){v(e)})).catch((function(e){_("Error fetching movie credits: "+e.message)}))}),[t]),m?(0,l.jsx)("div",{children:m}):h.length?(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("h2",{children:"Cast"}),m?(0,l.jsxs)("p",{className:c,children:["Error: ",m]}):(0,l.jsx)("div",{className:o,children:h.map((function(e){return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg",alt:e.name,width:250}),(0,l.jsx)("p",{children:e.name})]},e.id)}))})]}):(0,l.jsx)("div",{children:"Loading..."})}},705:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(439),i=r(791),s=r(689),a=r(87),c=r(713),o=r(165),u=r(909),l="MoviesDetails_moviesDetailsContainer__B3Ol3",d="MoviesDetails_wrapper__DE5LN",h="MoviesDetails_movieInfo__ZVcUW",v="MoviesDetails_additionalInfo__X4fnH",p="MoviesDetails_list__NcTHR",f="MoviesDetails_listItem__P0lsy",m="MoviesDetails_btn__2bI47",_=r(184),x=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,n.Z)(t,2),x=r[0],j=r[1],g=(0,i.useState)(null),w=(0,n.Z)(g,2),b=w[0],N=w[1],y=(0,s.TH)(),Z=(0,s.s0)();if((0,i.useEffect)((function(){(0,c.TP)(e).then((function(e){j(e)})).catch((function(e){N("Error fetching movie details: "+e.message)}))}),[e]),!x)return(0,_.jsx)("div",{children:"Loading..."});if(b)return(0,_.jsx)("div",{children:b});var k=x.vote_average,C=k?k/10*100:null;return(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("button",{type:"button",className:m,onClick:function(){y.pathname.includes("/movies")?Z(-1):Z("/")},children:"Go back"}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("img",{src:x.poster_path?"https://image.tmdb.org/t/p/w500/".concat(x.poster_path):"https://pixabay.com/get/gd15a64a0946404c26e64ae5f9341e3c314f3651c4daf118c426cbd529dd7056b94aec049dd059efc3495f8c71bde104c_640.jpg",width:250,alt:"poster"}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("h2",{children:x.title?x.title:x.name}),(0,_.jsxs)("p",{children:["User Score: ",Math.round(C)," %"]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Overview"}),(0,_.jsx)("p",{children:x.overview})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Genres"}),(0,_.jsx)("p",{children:x.genres&&x.genres.map((function(e){return e.name})).join(" ")})]})]})]}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("h2",{children:"Additional information"}),(0,_.jsxs)("ul",{className:p,children:[(0,_.jsx)("li",{children:(0,_.jsx)(a.OL,{className:f,to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(a.OL,{className:f,to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,_.jsxs)(s.Z5,{children:[(0,_.jsx)(s.AW,{path:"cast",element:(0,_.jsx)(o.default,{movieId:e})}),(0,_.jsx)(s.AW,{path:"reviews",element:(0,_.jsx)(u.default,{movieId:e})})]})]})}},909:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(439),i=r(791),s=r(713),a={reviewsContainer:"Reviews_reviewsContainer__P6f0f",reviewList:"Reviews_reviewList__it9Bj",reviewItem:"Reviews_reviewItem__nj+k4",authorName:"Reviews_authorName__04Tj-"},c=r(184),o=function(e){var t=e.movieId,r=(0,i.useState)([]),o=(0,n.Z)(r,2),u=o[0],l=o[1],d=(0,i.useState)(null),h=(0,n.Z)(d,2),v=h[0],p=h[1];return(0,i.useEffect)((function(){(0,s.tx)(t).then((function(e){l(e)})).catch((function(e){p("Error fetching trending movies: "+e.message)}))}),[t]),(0,c.jsx)("div",{className:a.reviewsContainer,children:u.length>0?(0,c.jsx)("ul",{className:a.reviewList,children:u.map((function(e){return(0,c.jsxs)("li",{className:a.reviewItem,children:[(0,c.jsx)("h2",{className:a.authorName,children:e.author}),(0,c.jsx)("p",{className:a.reviewContent,children:e.content})]},e.id)}))}):(0,c.jsx)("p",{className:a.noReviews,children:v?"Error: ".concat(v):"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=705.a8e43092.chunk.js.map