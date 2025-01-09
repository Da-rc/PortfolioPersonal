(function(){"use strict";var e={8395:function(e,a,o){var i=o(5130),n=o(5931),t=o(6768);const r={class:"container"};function s(e,a,o,i,n,s){const l=(0,t.g2)("MenuNav"),c=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",r,[(0,t.bF)(l,{class:"menu"}),(0,t.bF)(c,{class:"contenido"})])}var l=o(4232);const c={class:"divIdiomas"},d={href:"#about"},u={href:"#proyectos"};function p(e,a,o,i,n,r){return(0,t.uX)(),(0,t.CE)("nav",null,[(0,t.Lk)("div",c,[(0,t.Lk)("button",{class:"btnIdioma",onClick:a[0]||(a[0]=e=>r.cambiarIdioma("es"))},a[2]||(a[2]=[(0,t.Lk)("img",{src:"/españa.svg",alt:"Español"},null,-1)])),(0,t.Lk)("button",{class:"btnIdioma",onClick:a[1]||(a[1]=e=>r.cambiarIdioma("en"))},a[3]||(a[3]=[(0,t.Lk)("img",{src:"/english.svg",alt:"English"},null,-1)]))]),a[4]||(a[4]=(0,t.Lk)("h1",null,"David Romero Cabello",-1)),(0,t.Lk)("h2",null,(0,l.v_)(e.$t("menu.profesion")),1),(0,t.Lk)("ul",null,[(0,t.Lk)("li",{class:(0,l.C4)({active:"about"===n.seccionActiva})},[(0,t.Lk)("a",d,(0,l.v_)(e.$t("menu.aboutMenu")),1)],2),(0,t.Lk)("li",{class:(0,l.C4)({active:"proyectos"===n.seccionActiva})},[(0,t.Lk)("a",u,(0,l.v_)(e.$t("menu.proyectosMenu")),1)],2)]),a[5]||(a[5]=(0,t.Fv)('<div class="enlaces" data-v-e96d9d8a><a href="https://github.com/Da-rc" target="_blank" data-v-e96d9d8a><i class="pi pi-github" data-v-e96d9d8a></i></a><a href="https://linkedin.com/in/davidromerocabello" target="_blank" data-v-e96d9d8a><i class="pi pi-linkedin" data-v-e96d9d8a></i></a></div>',1))])}o(8992),o(3949);var m={data(){return{seccionActiva:null}},methods:{manejoScroll(){const e=document.querySelectorAll("section");e.forEach((e=>{const a=e.getBoundingClientRect();a.top<=window.innerHeight/2&&a.bottom>=window.innerHeight/2&&(this.seccionActiva=e.id)}))},cambiarIdioma(e){this.$i18n.locale=e,localStorage.setItem("idioma",e)}},mounted(){window.addEventListener("scroll",this.manejoScroll),this.manejoScroll()},beforeUnmount(){window.removeEventListener("scroll",this.manejoScroll)}},b=o(1241);const g=(0,b.A)(m,[["render",p],["__scopeId","data-v-e96d9d8a"]]);var v=g,h={name:"App",components:{MenuNav:v}};const f=(0,b.A)(h,[["render",s]]);var k=f,y=o(1387);function L(e,a,o,i,n,r){const s=(0,t.g2)("AboutComp"),l=(0,t.g2)("ProyectosComp");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("main",null,[(0,t.bF)(s,{seleccion:e.seleccion,onSeleccionCambiada:e.actualizarSeleccion},null,8,["seleccion","onSeleccionCambiada"]),(0,t.bF)(l,{seleccion:e.seleccion},null,8,["seleccion"])])])}const S={id:"about"},w=["src"],C=["innerHTML"],j={class:"herramientas"};function A(e,a,o,i,n,r){return(0,t.uX)(),(0,t.CE)("section",S,[(0,t.Lk)("div",null,[(0,t.Lk)("img",{src:n.avatar,alt:""},null,8,w),(0,t.Lk)("p",{innerHTML:e.$t("aboutComp.texto")},null,8,C),(0,t.Lk)("div",j,[(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"Java"===o.seleccion}]),onClick:a[0]||(a[0]=e=>r.guardarSeleccion("Java"))},a[9]||(a[9]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"Java",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"Spring Boot"===o.seleccion}]),onClick:a[1]||(a[1]=e=>r.guardarSeleccion("Spring Boot"))},a[10]||(a[10]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"Spring Boot",-1)]),2),a[18]||(a[18]=(0,t.Lk)("div",{class:"herramienta"},[(0,t.Lk)("i",{class:"pi pi-graduation-cap"}),(0,t.Lk)("p",null,"Kotlin")],-1)),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"JavaScript"===o.seleccion}]),onClick:a[2]||(a[2]=e=>r.guardarSeleccion("JavaScript"))},a[11]||(a[11]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"JavaScript",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"Vue.js"===o.seleccion}]),onClick:a[3]||(a[3]=e=>r.guardarSeleccion("Vue.js"))},a[12]||(a[12]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"Vue.js",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"C#"===o.seleccion}]),onClick:a[4]||(a[4]=e=>r.guardarSeleccion("C#"))},a[13]||(a[13]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"C#",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"HTML & CSS"===o.seleccion}]),onClick:a[5]||(a[5]=e=>r.guardarSeleccion("HTML & CSS"))},a[14]||(a[14]=[(0,t.Lk)("i",{class:"pi pi-graduation-cap"},null,-1),(0,t.Lk)("p",null,"HTML & CSS",-1)]),2),a[19]||(a[19]=(0,t.Lk)("div",{class:"herramienta"},[(0,t.Lk)("i",{class:"pi pi-database"}),(0,t.Lk)("p",null,"MySQL")],-1)),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"PostgreSQL"===o.seleccion}]),onClick:a[6]||(a[6]=e=>r.guardarSeleccion("PostgreSQL"))},a[15]||(a[15]=[(0,t.Lk)("i",{class:"pi pi-database"},null,-1),(0,t.Lk)("p",null,"PostgreSQL",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"Firebase Firestore Database"===o.seleccion}]),onClick:a[7]||(a[7]=e=>r.guardarSeleccion("Firebase Firestore Database"))},a[16]||(a[16]=[(0,t.Lk)("i",{class:"pi pi-database"},null,-1),(0,t.Lk)("p",null,"MongoDB",-1)]),2),(0,t.Lk)("div",{class:(0,l.C4)(["herramienta",{selected:"Git"===o.seleccion}]),onClick:a[8]||(a[8]=e=>r.guardarSeleccion("Git"))},a[17]||(a[17]=[(0,t.Lk)("i",{class:"pi pi-github"},null,-1),(0,t.Lk)("p",null,"Git",-1)]),2)])])])}var F={props:["seleccion"],data(){return{avatar:"/avatar.png"}},methods:{guardarSeleccion(e){if(e===this.seleccion)return void this.$emit("seleccion-cambiada","");this.$emit("seleccion-cambiada",e);const a=document.getElementById("proyectos");a.scrollIntoView({behavior:"smooth",block:"start"})}}};const E=(0,b.A)(F,[["render",A],["__scopeId","data-v-3174a68d"]]);var P=E;const I={id:"proyectos"},M={class:"contenedor-proyectos"},D={class:"imagen-proyecto"},T=["src"],x={class:"info-proyecto"},_={class:"titulo-proyecto"},G={class:"texto-proyecto"},J={class:"contenedor-keywords"},U={class:"nombre-keyword"},V={class:"enlaces"},H=["href"],q=["href"];function O(e,a,o,i,n,r){return(0,t.uX)(),(0,t.CE)("section",I,[(0,t.Lk)("div",M,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.$tm("proyectos"),(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id,class:"proyectos"},[(0,t.Lk)("div",D,[(0,t.Lk)("img",{src:e.imagen,alt:""},null,8,T)]),(0,t.Lk)("div",x,[(0,t.Lk)("h3",_,(0,l.v_)(e.titulo),1),(0,t.Lk)("p",G,(0,l.v_)(e.texto),1),(0,t.Lk)("div",J,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.keys,(e=>((0,t.uX)(),(0,t.CE)("div",{class:(0,l.C4)(["keyword",{selected:e.nombre===o.seleccion}]),key:e.nombre},[(0,t.Lk)("p",U,(0,l.v_)(e.nombre),1)],2)))),128))]),(0,t.Lk)("div",V,[(0,t.Lk)("a",{href:e.github,target:"_blank"},a[0]||(a[0]=[(0,t.Lk)("i",{class:"pi pi-github"},null,-1)]),8,H),e.web?((0,t.uX)(),(0,t.CE)("a",{key:0,href:e.web,target:"_blank"},a[1]||(a[1]=[(0,t.Lk)("i",{class:"pi pi-globe"},null,-1)]),8,q)):(0,t.Q3)("",!0)])])])))),128))])])}var Q={props:["seleccion"]};const B=(0,b.A)(Q,[["render",O],["__scopeId","data-v-45bca308"]]);var z=B,X=(0,t.pM)({components:{ProyectosComp:z,AboutComp:P},data(){return{seleccion:""}},methods:{actualizarSeleccion(e){this.seleccion=e,console.log(e)}}});const $=(0,b.A)(X,[["render",L],["__scopeId","data-v-313ead2e"]]);var R=$;const W=[{path:"/",name:"Home",component:R}],K=(0,y.aE)({history:(0,y.LA)(),routes:W});var N=K,Y={menu:{profesion:"Desarrollador Full Stack",aboutMenu:"About",proyectosMenu:"Proyectos"},aboutComp:{texto:"¡Hola <s>mundo!</s> Soy un desarrollador Full Stack apasionado por crear soluciones creativas y útiles. En 2024, me gradué con <b>matrícula de honor</b> en el ciclo de Desarrollo de Aplicaciones Multiplataforma, una formación que me ha aportado una base sólida en lenguajes como <b>Java</b>, <b>Kotlin</b> y <b>JavaScript</b>, así como en frameworks como <b>Spring Boot</b> y <b>Vue.js</b>. También cuento con experiencia trabajando con bases de datos <b>SQL</b> y <b>NoSQL</b>, metodologías ágiles y buenas prácticas de desarrollo.<br><br>Mi camino hacia el desarrollo de software comenzó en 2021, cuando descubrí el mundo de la programación. Fue este descubrimiento el que me llevó a dar un giro radical en mi carrera profesional y formarme en el desarrollo de software. Mi trayectoria previa como integrador social me ha aportado habilidades muy valiosas, como <b>trabajo en equipo</b>, <b>comunicación efectiva</b> y <b>creatividad para resolver problemas</b>, que, junto a las habilidades técnicas adquiridas en mi formación, me permiten abordar los proyectos desde una perspectiva integradora.<br><br>Creo en el desarrollo como una herramienta para convertir ideas en realidades que faciliten y mejoren el día a día de los usuarios. Mi meta es seguir aprendiendo y creciendo, mientras contribuyo al desarrollo de proyectos que marquen la diferencia.<br><br>"},proyectos:[{id:1,titulo:"Portfolio",texto:"Portfolio personal desarrollado con Vue.js y JavaScript, enfocado en ofrecer un diseño limpio y funcional. Uso de Vue router para la organización de las vistas y componentes y facilitar la escalabilidad. Este proyecto sirve como una ventana interactiva a mis proyectos de desarrollo, incluyendo enlaces directos a sus respectivos repositorios en GitHub",github:"https://github.com/Da-rc/PortfolioPersonal",imagen:"/portfolio.png",keys:[{nombre:"JavaScript"},{nombre:"Vue.js"},{nombre:"HTML & CSS"},{nombre:"Git"}]},{id:2,titulo:"Web gestión interna",texto:"Una web ficticia de gestión interna de oficinas y usuarios. El back está desarrollado en Java y Spring Boot para la creación de una API REST, siguiendo una arquitectura hexagonal para proporcionar flexibilidad y escalabilidad. Se utiliza una base de datos PostgreSQL para el almacenamiento de datos. El front está desarrollado con el framework Vue.js con un diseño funcional, limpio e intuitivo. Se implementa Firebase Authenticator para el login y la autorización de petciones POST, PUT y DELETE. ",github:"https://github.com/Da-rc/Mock-WebEmpresarial",web:"https://mock-webempresarial-production.up.railway.app/",imagen:"/empleados.png",keys:[{nombre:"Java"},{nombre:"Spring Boot"},{nombre:"PostgreSQL"},{nombre:"API REST"},{nombre:"JavaScript"},{nombre:"Vue.js"},{nombre:"HTML & CSS"},{nombre:"Firebase Authenticator"},{nombre:"Git"}]},{id:3,titulo:"Proyecto final DAM",texto:"Mi trabajo final del ciclo DAM fue el desarrollo de un videojuego para dispositivos Android. Un proyecto en el que combiné mecánicas de juego clásicas con un estilo narrativo y visual retro, creando una experiencia única. Fue desarrollado en Unity en C#, con la implementación de Firebase Authenticator para la gestión de las cuentas y el acceso de los jugadores y Firestore Database, base de datos basada en documentos, para el almacenamiento tanto de la información de las partidas como los textos de las distintas posibles rutas del juego.",github:"https://github.com/Da-rc/AndroidGame-WhereDidIGo",web:"https://mapacher.itch.io/where-did-i-go",imagen:"/whereDidIGo.jpg",keys:[{nombre:"C#"},{nombre:"Unity"},{nombre:"Firebase Authenticator"},{nombre:"Firebase Firestore Database"},{nombre:"Git"}]},{id:4,titulo:"Videojuego Android",texto:"Proyecto personal de videojuego para dispositivos Android. Un videojuego de estilo de plataformas clásico en el que el jugador debe ir superando obstáculos y coleccionando objetos para conseguir puntos. Una vez que el jugador finaliza o pierde sus vidas podrá inscribir su nombre y su puntuación en un leaderboard. Proyecto desarrollado en Unity en lenguaje C# con la implementación de Firebase Firestore Database, base de datos basada en documentos, para la gestión de las puntuaciones de usuarios.",github:"https://github.com/Da-rc/2DPlatform-Unity",imagen:"/platform.jpg",keys:[{nombre:"C#"},{nombre:"Unity"},{nombre:"Firebase Firestore Database"},{nombre:"Git"}]}]},Z={menu:{profesion:"Full Stack developer",aboutMenu:"About",proyectosMenu:"Projects"},aboutComp:{texto:"Hello <s>world!</s> I am a Full Stack developer who loves to create useful and creative solutions. In 2024, I graduated with <b>honors</b> as a Higher Technician in Cross-platform application development, a training that provided me with a solid foundation in languages such as <b>Java</b>, <b>Kotlin</b> and <b>JavaScript</b>, as well as frameworks like <b>Spring Boot</b> and <b>Vue.js</b>. I also have experience working with <b>SQL</b> and <b>NoSQL</b> databases, agile methodologies, and best development practices.<br><br>My journey into software development began in 2021, when I discovered the world of programming. This discovery led me to take a radical turn in my professional career and dive into software development. Mi previous experience as a community support worker has given me invaluable skills such as <b>teamwork</b>, <b>effective communication</b>, and <b>creative problem-solving</b>. Together with the technical skills I gained during my training, these abilities allow me to approach projects from an integrative perspective.<br><br>I believe in development as a tool to turn ideas into realities that simplify and enhance users daily lives. My goal is to continue learning and growing as a professional while  contributing to projects that make a difference.<br><br>"},proyectos:[{id:1,titulo:"Portfolio",texto:"Personal portfolio developed with Vue.js and JavaScript, focused on providing a clean and functional design. Utilizes Vue Router for organizing views and components, enhancing scalability. This project serves as an interactice window into my development projects, including direct links to their respective GitHub repositories and web.",github:"https://github.com/Da-rc/PortfolioPersonal",imagen:"/portfolio.png",keys:[{nombre:"JavaScript"},{nombre:"Vue.js"},{nombre:"HTML & CSS"},{nombre:"Git"}]},{id:2,titulo:"Internal Management Web",texto:"A fictional internal management web application for offices and users. The backend is developed  in Java and Spring Boot to create a REST API, following a hexagonal architecture to provide flexibility and scalability. PostgreSQL is used as the database. The frontend is built with the Vue.js framework, featuring a functional, clean, and intuitive design. Firebase Authenticator is implemented for login and authorization of POST, PUT and DELETE requests. ",github:"https://github.com/Da-rc/Mock-WebEmpresarial",web:"https://mock-webempresarial-production.up.railway.app/",imagen:"/empleados.png",keys:[{nombre:"Java"},{nombre:"Spring Boot"},{nombre:"PostgreSQL"},{nombre:"API REST"},{nombre:"JavaScript"},{nombre:"Vue.js"},{nombre:"HTML & CSS"},{nombre:"Firebase Authenticator"},{nombre:"Git"}]},{id:3,titulo:"Final project",texto:"The final project for my software development studies was the creation of a video game for Android devices. A project where I combined classic gameplay mechanics with a retro narrative and visual style, creating a unique experience. It was developed in Unity using C#, with the implementation of Firebase Authenticator for managing player accounts and access and Firestore Database, a document-bases database, for storing both game data and text for the various possible game routes.",github:"https://github.com/Da-rc/AndroidGame-WhereDidIGo",web:"https://mapacher.itch.io/where-did-i-go",imagen:"/whereDidIGo.jpg",keys:[{nombre:"C#"},{nombre:"Unity"},{nombre:"Firebase Authenticator"},{nombre:"Firebase Firestore Database"},{nombre:"Git"}]},{id:4,titulo:"Android Video Game",texto:"Personal project of a video game for Android devices. A classic platformer where the player must overcome obstacles and collect items to earn points. Once the player completes the game or loses all lives, they can enter their name and score on a leaderboard. The project was developed in Unity using C#, with the implementation of Firebase Firestore Database, a document-based database, for managing user scores.",github:"https://github.com/Da-rc/2DPlatform-Unity",imagen:"/platform.jpg",keys:[{nombre:"C#"},{nombre:"Unity"},{nombre:"Firebase Firestore Database"},{nombre:"Git"}]}]};const ee=(0,n.hU)({legacy:!1,locale:localStorage.getItem("idioma")||"es",fallbackLocale:"en",messages:{es:Y,en:Z}}),ae=(0,i.Ef)(k);ae.use(ee),ae.use(N),ae.mount("#app")}},a={};function o(i){var n=a[i];if(void 0!==n)return n.exports;var t=a[i]={exports:{}};return e[i].call(t.exports,t,t.exports,o),t.exports}o.m=e,function(){var e=[];o.O=function(a,i,n,t){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],t=e[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&t||r>=t)&&Object.keys(o.O).every((function(e){return o.O[e](i[l])}))?i.splice(l--,1):(s=!1,t<r&&(r=t));if(s){e.splice(d--,1);var c=n();void 0!==c&&(a=c)}}return a}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[i,n,t]}}(),function(){o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,{a:a}),a}}(),function(){o.d=function(e,a){for(var i in a)o.o(a,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};o.O.j=function(a){return 0===e[a]};var a=function(a,i){var n,t,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(a&&a(i);c<r.length;c++)t=r[c],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(d)},i=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(8395)}));i=o.O(i)})();
//# sourceMappingURL=app.36019cc1.js.map