(this["webpackJsonpcp-m2"]=this["webpackJsonpcp-m2"]||[]).push([[0],{22:function(e,t,n){e.exports={container:"Todos_container__3u4f4",link:"Todos_link__3bUKG"}},23:function(e,t,n){e.exports={container:"TodoDetails_container__1QWzG",buttons:"TodoDetails_buttons__18TCs"}},28:function(e,t,n){e.exports={container:"Todo_container__1xYi8"}},29:function(e,t,n){e.exports={container:"Home_container__2xw-2"}},30:function(e,t,n){e.exports={container:"AddTodo_container__3uasD"}},31:function(e,t,n){e.exports=n(47)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",(function(){return b})),n.d(a,"removeTodo",(function(){return p})),n.d(a,"toInProgress",(function(){return O})),n.d(a,"toDone",(function(){return v}));var r=n(0),l=n.n(r),c=n(14),o=n.n(c),u=(n(35),n(36),n(9)),i=n(2);n(37);var s=function(){return l.a.createElement("nav",{className:!0},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},l.a.createElement("h1",null,"TODOS"))),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/add"},l.a.createElement("div",null,l.a.createElement("h3",null,"Add Todo"))))))},m=n(8),d=n(12),E=n(7),f=0;function b(e){return f++,{type:"AddTodo",payload:Object(E.a)(Object(E.a)({},e),{},{id:f,status:"Todo"})}}function p(e){return{type:"RemoveTodo",payload:e}}function O(e){return{type:"ToInProgress",payload:e}}function v(e){return{type:"ToDone",payload:e}}var _=n(10),j=n(28),T=n.n(j);var D=Object(m.b)((function(e){return{toDoList:e}}),(function(e){return Object(_.a)(a,e)}))((function(e){var t=l.a.useState({}),n=Object(d.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){console.log(e.key),c(e.toDoList.find((function(t){return t.id==e.key0})))})),l.a.createElement("div",{className:T.a.container},l.a.createElement("h5",null,e.title),l.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),e.removeTodo(a.id)}(t)}},"X"))})),y=n(22),h=n.n(y);var g=Object(m.b)((function(e){return{state:e}}),null)((function(e){return l.a.createElement("div",{className:h.a.container},l.a.createElement("h3",null,e.status),l.a.createElement("div",null,e.state.filter((function(t){return t.status==e.status})).map((function(e){return l.a.createElement(u.c,{className:h.a.link,to:"/edit/".concat(e.id)},l.a.createElement(D,{title:e.title,key:e.id,key0:e.id}))}))))})),k=n(29),w=n.n(k);var x=function(e){return l.a.createElement("div",{className:w.a.container},l.a.createElement(g,{status:"Todo"}),l.a.createElement(g,{status:"InProgress"}),l.a.createElement(g,{status:"Done"}))},N=n(18),I=n(30),S=n.n(I);var C=Object(m.b)(null,(function(e){return Object(_.a)(a,e)}))((function(e){var t=l.a.useState({title:"",description:"",place:"",date:""}),n=Object(d.a)(t,2),a=n[0],r=n[1];function c(e){r(Object(E.a)(Object(E.a)({},a),{},Object(N.a)({},e.target.name,e.target.value)))}return l.a.createElement("section",{className:S.a.container},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(a)}},l.a.createElement("label",null,"Title:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"title",onChange:c,placeholder:"write a title..."}),l.a.createElement("br",null),l.a.createElement("label",null,"Description:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"10",cols:"40",name:"description",onChange:c,placeholder:"write a description..."}),l.a.createElement("br",null),l.a.createElement("label",null,"Place:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"place",onChange:c,placeholder:"write a place..."}),l.a.createElement("br",null),l.a.createElement("label",null,"Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",name:"date",onChange:c}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Add")))})),P=n(23),L=n.n(P);var A=Object(m.b)((function(e){return{toDoList:e}}),(function(e){return Object(_.a)(a,e)}))((function(e){var t=Object(i.f)().key,n=l.a.useState({}),a=Object(d.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){o(e.toDoList.find((function(e){return e.id==t})))})),l.a.createElement("div",{className:L.a.container},l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Title: ",c.title),l.a.createElement("br",null),l.a.createElement("h5",null,"Status: ",c.status),l.a.createElement("br",null),l.a.createElement("p",null,"Place: ",c.place,l.a.createElement("br",null),l.a.createElement("span",null,"Date: ",c.date))),l.a.createElement("div",null,l.a.createElement("p",null,"Description: ",c.description),l.a.createElement("br",null))),l.a.createElement("section",{className:L.a.buttons},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),e.toDone(c.id)}(t)}},"Done"),l.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),e.toInProgress(c.id)}(t)}},"In progress"))))}));var X=function(){return l.a.createElement(u.a,null,l.a.createElement(s,{path:""}),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(i.a,{path:"/add"},l.a.createElement(C,null)),l.a.createElement(i.a,{path:"/edit/:key"},l.a.createElement(A,null))))},R=n(13),U=(n(44),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddTodo":return[].concat(Object(R.a)(e),[Object(E.a)({},t.payload)]);case"RemoveTodo":return Object(R.a)(e.filter((function(e){return e.id!=t.payload})));case"ToDone":return Object(R.a)(e.map((function(e){return e.id==t.payload?Object(E.a)(Object(E.a)({},e),{},{status:"Done"}):e})));case"ToInProgress":return Object(R.a)(e.map((function(e){return e.id==t.payload?Object(E.a)(Object(E.a)({},e),{},{status:"InProgress"}):e})));default:return Object(R.a)(e)}}),G=Object(_.b)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(l.a.createElement(m.a,{store:G},l.a.createElement(X,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8f69f870.chunk.js.map