(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,o,n){},13:function(t,o,n){"use strict";n.r(o);var e=n(0),i=n.n(e),a=n(2),s=n.n(a),r=n(3),c=n(4),u=n(6),d=n(5),l=(n(12),function(){return fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-goods","/goods.json")).then((function(t){return t.json()}))}),f=function(t){var o=t.goodsItem,n=o.color,e=o.name;return i.a.createElement("li",{style:{color:n}},e)},h=function(t){var o=t.goodsList;return i.a.createElement("ul",null,o.map((function(t){return i.a.createElement(f,{key:t.id,goodsItem:t})})))},g=function(t){Object(u.a)(n,t);var o=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return(t=o.call.apply(o,[this].concat(i))).state={goodsList:[],isLoading:!1},t.handleShowAllGoods=function(){t.setState({isLoading:!0}),setTimeout((function(){l().then((function(o){t.setState({goodsList:o,isLoading:!1})}))}),500)},t.handleShowFirstGoods=function(o){t.setState({isLoading:!0}),setTimeout((function(){l().then((function(n){t.setState({goodsList:n.slice(0,o-1),isLoading:!1})}))}),500)},t.handleShowColorGoods=function(o){t.setState({isLoading:!0}),setTimeout((function(){l().then((function(n){t.setState({goodsList:n.filter((function(t){return t.color===o})),isLoading:!1})}))}),500)},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;l().then((function(o){t.setState({goodsList:o})}))}},{key:"render",value:function(){var t=this,o=this.state,n=o.goodsList,e=o.isLoading;return i.a.createElement("div",null,!e&&i.a.createElement(h,{goodsList:n}),e&&i.a.createElement("div",null,"Loading..."),i.a.createElement("button",{type:"button",onClick:this.handleShowAllGoods},"Load All Goods"),i.a.createElement("button",{type:"button",onClick:function(){return t.handleShowFirstGoods(5)}},"Load 5 first goods"),i.a.createElement("button",{type:"button",onClick:function(){return t.handleShowColorGoods("red")}},"Load red goods"))}}]),n}(e.Component);s.a.render(i.a.createElement(g,null),document.getElementById("root"))},7:function(t,o,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7a0b7736.chunk.js.map