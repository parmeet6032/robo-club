(this["webpackJsonprobo-club"]=this["webpackJsonprobo-club"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(3),i=n.n(c),r=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),o=n(6),d=n(4),l=n(5),u=n(8),b=n(7),h=(n(14),n(0)),m=function(e){var t=e.name,n=e.id,a=e.deleteTask,s=e.editTask,c=e.saveTask;return Object(h.jsxs)("div",{className:"card col-sm-4 col-md-3 col-lg-2 m-3 border border-dark rounded custom-card",children:[Object(h.jsx)("img",{className:"card-img-top",src:"https://robohash.org/".concat(t.toLowerCase(),"?200x200"),alt:"robot"}),Object(h.jsxs)("div",{className:"card-body text-center p-1",children:[Object(h.jsx)("h5",{className:"my-2",id:"name-"+n,children:t}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("button",{className:"btn btn-outline-success btn-sm",type:"button",id:"edit-"+n,onClick:function(){s(n)},children:"Edit"}),Object(h.jsx)("button",{className:"btn btn-success btn-sm",type:"button",id:"save-"+n,onClick:function(){c(n)},hidden:!0,children:"Save"}),Object(h.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){a(n)},type:"button",children:"Delete"})]})]})]})},j=(n(16),function(e){var t=e.robots,n=e.deleteTask,a=e.editTask,s=e.saveTask;return Object(h.jsx)("div",{className:"row d-flex justify-content-center ps-custom",children:t.map((function(e){return Object(h.jsx)(m,{id:e.id,name:e.name,deleteTask:n,editTask:a,saveTask:s},e.id)}))})}),f=(n(17),function(e){var t=e.searchChange;return Object(h.jsx)("div",{className:"d-flex justify-content-center m-3",children:Object(h.jsx)("input",{type:"search",className:"form-control search-input",id:"search-robots",placeholder:"Search Robots...",onChange:t})})}),k=(n(18),function(e){var t=e.children;return Object(h.jsx)("div",{className:"scroll-container",children:t})});n(19);function v(e){var t=e.currentTask,n=e.handleChange,a=e.handleSubmit;return Object(h.jsx)("div",{className:"add-new-container d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"input-group mb-3 add-new-input",children:[Object(h.jsx)("input",{type:"text",value:t,onChange:n,className:"form-control",placeholder:"Add new task...","aria-label":" Add new task...","aria-describedby":"add-task-button"}),Object(h.jsx)("button",{className:"btn btn-outline-primary",type:"button",id:"add-task-button",onClick:a,children:"Add Task"})]})})}var O=n(23),p=(n(20),[{id:1,name:"Wash Clothes"},{id:2,name:"Cook food"},{id:3,name:"Complete homework"},{id:4,name:"Charge mobile"},{id:5,name:"Attend dance class"},{id:6,name:"Attend dinner at 8"},{id:7,name:"Shopping"},{id:8,name:"Buy fruits"},{id:9,name:"Tropicana Juice"},{id:10,name:"Laptop repair"}]),x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.handleSubmit=function(t){var n=e.state.currTask;if(n.length){var a={name:n,id:Object(O.a)()};e.setState({robots:[].concat(Object(o.a)(e.state.robots),[a]),currTask:""})}},e.deleteTask=function(t){var n=e.state.robots.filter((function(e){return e.id!==t}));e.setState({robots:n,currTask:""})},e.editTask=function(e){var t=document.getElementById("edit-"+e),n=document.getElementById("save-"+e);document.getElementById("name-"+e).contentEditable=!0,t.hidden=!0,n.hidden=!1},e.saveTask=function(t){var n=document.getElementById("edit-"+t),a=document.getElementById("save-"+t),s=document.getElementById("name-"+t);s.contentEditable=!1,n.hidden=!1,a.hidden=!0;var c=e.state.robots.map((function(e){return e.id===t?{id:t,name:s.innerText}:e}));e.setState({robots:c})},e.handleChange=function(t){e.setState({currTask:t.target.value})},e.state={robots:[],searchField:"",currTask:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({robots:p})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"text-center m-3",children:Object(h.jsx)("h2",{children:" Welcome to ROBO TO-DO LIST! "})}),Object(h.jsx)(f,{searchChange:this.onSearchChange}),Object(h.jsx)(v,{currentTask:this.state.currTask,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(h.jsx)(k,{children:Object(h.jsx)(j,{robots:a,deleteTask:this.deleteTask,editTask:this.editTask,saveTask:this.saveTask})})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),r()}],[[21,1,2]]]);
//# sourceMappingURL=main.53b06b94.chunk.js.map