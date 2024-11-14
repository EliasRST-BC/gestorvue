(function(){"use strict";var t={5177:function(t,s,a){var e=a(6848),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("div",{staticClass:"container-fluid"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav ms-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link styled-button",attrs:{"aria-current":"page",to:"/"}},[s("i",{staticClass:"bi bi-house-door-fill"}),t._v(" Inicio ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link styled-button",attrs:{to:"/addtask"}},[s("i",{staticClass:"bi bi-plus-circle-fill"}),t._v(" Agregar Tarea ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link styled-button",attrs:{to:"/tasklist"}},[s("i",{staticClass:"bi bi-list-check"}),t._v(" Lista de Tareas ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link styled-button",attrs:{to:"/combinedview"}},[s("i",{staticClass:"bi bi-eye-fill"}),t._v(" Vista Combinada ")])],1)])])])]),s("router-view")],1)},n=[function(){var t=this,s=t._self._c;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"App"},o=l,c=a(1656),r=(0,c.A)(o,i,n,!1,null,"3937ef96",null),d=r.exports,u=a(6178),k=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a(3153)}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],p=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"hello bg-light p-5 rounded shadow"},[s("h1",{staticClass:"text-primary mb-4"},[t._v("Bienvenido a la Aplicación de Tareas")]),s("p",{staticClass:"lead text-secondary"},[t._v(" Organiza y gestiona tus tareas de manera eficiente. ")]),s("h3",{staticClass:"text-success mt-4"},[t._v("Funciones")]),s("div",{staticClass:"my-4"},[s("h4",{staticClass:"text-info"},[t._v("Añadir Tareas")]),s("p",[t._v("Permite ingresar nuevas tareas manualmente.")])]),s("div",{staticClass:"my-4"},[s("h4",{staticClass:"text-info"},[t._v("Lista de Tareas")]),s("p",[t._v("Muestra todas las tareas extraídas de la API, permitiendo marcarlas como completadas o eliminarlas.")])]),s("div",{staticClass:"my-4"},[s("h4",{staticClass:"text-info"},[t._v("Vista Combinada")]),s("p",[t._v("Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.")])])])}],h={name:"HelloWorld",props:{msg:String}},C=h,v=(0,c.A)(C,p,b,!1,null,"2569a41a",null),f=v.exports,g={name:"HomeView",components:{HelloWorld:f}},y=g,I=(0,c.A)(y,k,m,!1,null,null,null),w=I.exports,T=function(){var t=this,s=t._self._c;return s("div",{staticClass:"add-task-container"},[s("h1",[t._v("Añadir Tarea")]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(s){s.target.composing||(t.newTask=s.target.value)}}}),s("button",{staticClass:"add-button",on:{click:t.addTask}},[s("i",{staticClass:"bi bi-plus-circle"}),t._v(" Añadir ")])]),t.tasks.length>0?s("div",{staticClass:"task-list"},t._l(t.tasks,(function(a){return s("div",{key:a.id,staticClass:"task-card"},[s("h5",{class:{completed:a.completed}},[t._v(t._s(a.todo))]),s("div",{staticClass:"task-actions"},[s("button",{staticClass:"btn-icon text-success",on:{click:function(s){return t.toggleTaskCompletion(a)}}},[s("i",{staticClass:"bi bi-check-circle-fill"})]),s("button",{staticClass:"btn-icon text-danger",on:{click:function(s){return t.deleteTask(a)}}},[s("i",{staticClass:"bi bi-trash-fill"})])]),s("span",{staticClass:"task-status",class:{"status-completed":a.completed,"status-pending":!a.completed}},[t._v(" "+t._s(a.completed?"Completado":"Pendiente")+" ")])])})),0):t._e()])},A=[],R=(a(8992),a(4520),{name:"AddTask",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},deleteTask(t){this.tasks=this.tasks.filter((s=>s.id!==t.id))},toggleTaskCompletion(t){t.completed=!t.completed}}}),W=R,x=(0,c.A)(W,T,A,!1,null,"01996ee5",null),E=x.exports,N=function(){var t=this,s=t._self._c;return s("div",[s("h1",[t._v("Lista de Tareas")]),s("button",{staticClass:"btn btn-info mb-3",on:{click:t.fetchTasks}},[s("i",{staticClass:"bi bi-cloud-download"}),t._v(" Cargar Tareas ")]),t.tasks.length>0?s("div",{staticClass:"task-container"},t._l(t.tasks,(function(a){return s("div",{key:a.id,staticClass:"task-card"},[s("h5",{class:{completed:a.completed}},[t._v(t._s(a.todo))]),s("div",{staticClass:"task-actions"},[s("button",{staticClass:"btn-icon text-success",on:{click:function(s){return t.toggleTaskCompletion(a)}}},[s("i",{staticClass:"bi bi-check-circle-fill"})]),s("button",{staticClass:"btn-icon text-danger",on:{click:function(s){return t.deleteTask(a)}}},[s("i",{staticClass:"bi bi-trash-fill"})])]),s("span",{staticClass:"task-status",class:{"status-completed":a.completed,"status-pending":!a.completed}},[t._v(" "+t._s(a.completed?"Completado":"Pendiente")+" ")])])})),0):t._e()])},Z=[],Q={name:"TaskList",data(){return{tasks:[]}},methods:{async fetchTasks(){try{const t=await fetch("https://dummyjson.com/todos");if(!t.ok)throw new Error("Error en la solicitud a la API");const s=await t.json();this.tasks=s.todos}catch(t){console.error("Error al cargar las tareas:",t)}},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((s=>s.id!==t.id))}}},V=Q,G=(0,c.A)(V,N,Z,!1,null,"d5aaea42",null),z=G.exports,P=function(){var t=this,s=t._self._c;return s("div",{staticClass:"combined-view"},[s("h1",[t._v("Vista Combinada")]),s("div",{staticClass:"add-task-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control mb-3",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(s){s.target.composing||(t.newTask=s.target.value)}}}),s("button",{staticClass:"btn btn-primary me-2",on:{click:t.addTask}},[s("i",{staticClass:"bi bi-plus-circle"}),t._v(" Añadir ")]),s("button",{staticClass:"btn btn-info",on:{click:t.fetchApiTasks}},[s("i",{staticClass:"bi bi-cloud-download"}),t._v(" Mostrar Tareas de la API ")])]),s("ul",{staticClass:"task-list"},t._l(t.tasks,(function(a){return s("li",{key:a.id,staticClass:"task-card"},[s("h5",{class:{completed:a.completed}},[t._v(t._s(a.todo))]),s("div",{staticClass:"task-actions"},[s("button",{staticClass:"btn-icon text-success",on:{click:function(s){return t.completeTask(a.id)}}},[s("i",{staticClass:"bi bi-check-circle-fill"})]),s("button",{staticClass:"btn-icon text-danger",on:{click:function(s){return t.deleteTask(a.id)}}},[s("i",{staticClass:"bi bi-trash-fill"})])]),s("span",{staticClass:"task-status",class:{"status-completed":a.completed,"status-pending":!a.completed}},[t._v(" "+t._s(a.completed?"Completado":"Pendiente")+" ")])])})),0)])},B=[],U=(a(4114),a(2577),a(1454),{name:"CombinedView",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(this.newTask.trim()){const t={id:Date.now(),todo:this.newTask,completed:!1};this.tasks.push(t),this.newTask=""}},async fetchApiTasks(){try{const t=await fetch("https://dummyjson.com/todos");if(!t.ok)throw new Error("Error en la solicitud");const s=await t.json(),a=s.todos.map((t=>({id:t.id,todo:t.todo,completed:t.completed})));this.tasks=[...this.tasks,...a]}catch(t){console.error("Error al cargar las tareas de la API:",t)}},completeTask(t){const s=this.tasks.find((s=>s.id===t));s&&(s.completed=!0)},deleteTask(t){this.tasks=this.tasks.filter((s=>s.id!==t))}}}),O=U,Y=(0,c.A)(O,P,B,!1,null,"207128f6",null),J=Y.exports;e.Ay.use(u.Ay);const M=[{path:"/",name:"home",component:w},{path:"/addtask",name:"AddTask",component:E},{path:"/tasklist",name:"TaskList",component:z},{path:"/combinedview",name:"CombinedView",component:J}],S=new u.Ay({mode:"history",base:"/gestorvue/",routes:M});var j=S;e.Ay.config.productionTip=!1,new e.Ay({router:j,render:t=>t(d)}).$mount("#app")},3153:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}},s={};function a(e){var i=s[e];if(void 0!==i)return i.exports;var n=s[e]={exports:{}};return t[e].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(s,e,i,n){if(!e){var l=1/0;for(d=0;d<t.length;d++){e=t[d][0],i=t[d][1],n=t[d][2];for(var o=!0,c=0;c<e.length;c++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(o=!1,n<l&&(l=n));if(o){t.splice(d--,1);var r=i();void 0!==r&&(s=r)}}return s}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[e,i,n]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={524:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var i,n,l=e[0],o=e[1],c=e[2],r=0;if(l.some((function(s){return 0!==t[s]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var d=c(a)}for(s&&s(e);r<l.length;r++)n=l[r],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},e=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[504],(function(){return a(5177)}));e=a.O(e)})();
//# sourceMappingURL=app.d8b6bb8f.js.map