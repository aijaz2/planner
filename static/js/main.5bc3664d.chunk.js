(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),o=a.n(i),l=(a(14),a(1)),s=a(2);a(15),a(16),a(6);var r=function(e){var t=e.todo,a=e.index,n=e.completeTodo,i=e.removeTodo;return c.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,c.a.createElement("div",null,c.a.createElement("button",{className:"ButtonGreen",onClick:function(){return n(a)}},"\u2713"),c.a.createElement("button",{className:"ButtonRed",onClick:function(){return i(a)}},"\u2717")))};var d=function(e){var t=e.addTodo,a=Object(n.useState)(""),i=Object(s.a)(a,2),o=i[0],l=i[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&(t(o),l(""))}},c.a.createElement("input",{type:"text",className:"input",value:o,onChange:function(e){return l(e.target.value)}}))};var u=function(e){var t=e.task,a=e.removeTask,i=e.index,o=Object(n.useState)(t.specific),u=Object(s.a)(o,2),m=u[0],v=u[1],b=function(e){var t=Object(l.a)(m);t[e].isCompleted=!t[e].isCompleted,v(t)},f=function(e){var t=Object(l.a)(m);t.splice(e,1),v(t)};return c.a.createElement("div",{className:"Task"},c.a.createElement("div",{className:"TaskTitle"},t.title),c.a.createElement("div",{className:"Specific"},"Specific:",c.a.createElement("div",{className:"todo-list"},m.map((function(e,t){return c.a.createElement(r,{key:t,index:t,todo:e,completeTodo:b,removeTodo:f})})),c.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(l.a)(m),[{text:e}]);v(t)}}))),c.a.createElement("div",{className:"Specific"},"Measurable: ",t.measurable),c.a.createElement("div",{className:"Specific"},"Achievable: ",t.achievable),c.a.createElement("div",{className:"Specific"},"Relevant: ",t.relevant),c.a.createElement("div",{className:"Specific"},"Status: ",t.status),c.a.createElement("button",{className:"ButtonRed",onClick:function(){return a(i)}},"Delete task"))};var m=function(e){var t=e.objective,a=e.deleteObjective,i=Object(n.useState)(t.task),o=Object(s.a)(i,2),r=o[0],d=o[1],m=function(e){var t=Object(l.a)(r);t.splice(e,1),d(t)};return c.a.createElement("div",{className:"Objective"},c.a.createElement("div",{className:"Title"},t.title),r.map((function(e,t){return c.a.createElement(u,{removeTask:m,index:t,key:t,task:e})})),c.a.createElement("button",{onClick:function(){return function(){var e=[].concat(Object(l.a)(r),[{id:5,title:"task12",specific:[{id:32,text:"todo 1"},{id:22,text:"todo 2"}],measurable:"ad",achievable:"ads",relevant:"asd",status:"asd"}]);console.log(r),d(e),console.log(r)}(t.id)}},"Add Task"),c.a.createElement("button",{onClick:function(){return a(t.id)}},"Delete objective"))},v=a(8);var b=function(){var e=a(17),t=Object(n.useState)(v),i=Object(s.a)(t,2),o=i[0],r=i[1],d=function(e){var t=o.filter((function(t){return t.id!==e}));r(t)};return c.a.createElement("div",null,c.a.createElement("div",{className:"content"},o.map((function(e,t){return c.a.createElement("div",null,c.a.createElement(m,{deleteObjective:d,key:t,objective:e}))}))),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){var t={title:"Objective "+Object.keys(o).length,id:e(),task:[{id:e(),title:"task1",specific:[],measurable:"",achievable:"",relevant:"",status:""},{id:e(),title:"task2",specific:[],measurable:"",achievable:"",relevant:"",status:""}]},a=[].concat(Object(l.a)(o),[t]);r(a)}},"Add objective!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},8:function(e){e.exports=JSON.parse('[{"title":"Objective 0","id":0,"task":[{"id":3,"title":"task1","specific":[{"id":32,"text":"todo 1"},{"id":22,"text":"todo 1"}],"measurable":"ad","achievable":"ads","relevant":"asd","status":"asd"},{"id":4,"title":"task2","specific":[{"id":32,"text":"todo 1"},{"id":22,"text":"todo 1"}],"measurable":"ad","achievable":"ads","relevant":"asd","status":"asd"}]},{"title":"Objective 1","id":1,"task":[{"id":5,"title":"task12","specific":[{"id":32,"text":"todo 1"},{"id":22,"text":"todo 2"}],"measurable":"ad","achievable":"ads","relevant":"asd","status":"asd"},{"id":6,"title":"task22","specific":[{"id":32,"text":"todo 1"},{"id":22,"text":"todo 2"}],"measurable":"ad","achievable":"ads","relevant":"asd","status":"asd"}]}]')},9:function(e,t,a){e.exports=a(26)}},[[9,1,2]]]);
//# sourceMappingURL=main.5bc3664d.chunk.js.map