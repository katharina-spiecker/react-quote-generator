(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{11:function(t,e,r){},14:function(t,e,r){t.exports=r(25)},19:function(t,e,r){},25:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(12),c=r.n(o),l=(r(19),r(2)),u=r(3),i=r(5),s=r(4),h=r(6),p=r(9),d=function(t){Object(i.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(u.a)(r,[{key:"render",value:function(){var t={width:30,height:30,color:this.props.color};return a.a.createElement("div",null,a.a.createElement("a",{href:"https://twitter.com/intent/tweet",class:"button",id:"tweet-quote"},a.a.createElement(h.a,{icon:p.b,style:t})),a.a.createElement("a",{href:"https://www.facebook.com",class:"button"},a.a.createElement(h.a,{icon:p.a,style:t})))}}]),r}(n.Component),f=r(13),m=(r(11),function(t){Object(i.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={currentQuote:"Those who dare to fail miserably can achieve greatly.",currentAuthor:"- John F. Kennedy"},t.getQuote=function(){var e;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(r){e=Math.floor(Math.random()*r.quotes.length),t.setState({currentQuote:r.quotes[e].quote}),t.setState({currentAuthor:"- "+r.quotes[e].author})}))},t.handleClick=function(){t.getQuote(),t.props.onColorUpdate()},t}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{id:"quote-box",style:{color:this.props.currentColor}},a.a.createElement("div",null,a.a.createElement("div",{class:"row first-row"},a.a.createElement(h.a,{icon:f.a}),a.a.createElement("p",{id:"text"},this.state.currentQuote)),a.a.createElement("i",{id:"author"},this.state.currentAuthor)),a.a.createElement("div",{class:"row last-row"},a.a.createElement(d,{color:this.props.currentColor}),a.a.createElement("button",{id:"new-quote",className:"button btn-padding",onClick:this.handleClick,style:{backgroundColor:this.props.currentColor}},"Next inspiration")))}}]),r}(n.Component)),b=function(t){Object(i.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={currentColor:"#3A86FF"},t.i=0,t.handleColorUpdate=function(){var e=["#FFBE0B","#FB5607","#FF006E","#8338EC","#3A86FF"];t.i===e.length&&(t.i=0),t.setState({currentColor:e[t.i]}),t.i++},t}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"App",style:{backgroundColor:this.state.currentColor}},a.a.createElement(m,{currentColor:this.state.currentColor,onColorUpdate:this.handleColorUpdate}))}}]),r}(n.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dcb92e1f.chunk.js.map