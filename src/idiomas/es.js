export default {
    menu: {
        profesion: 'Desarrollador FullStack',
        aboutMenu: 'About',
        proyectosMenu: 'Proyectos',
    },
    aboutComp: {
        texto: '¡Hola <s>mundo!</s> Soy un desarrollador Full Stack apasionado por crear soluciones creativas y útiles. ' +
            'En 2024, me gradué con <b>matrícula de honor</b> en el ciclo de Desarrollo de Aplicaciones Multiplataforma,' +
            ' una formación que me ha aportado una base sólida en lenguajes como <b>Java</b>, <b>Kotlin</b> y <b>JavaScript</b>,' +
            ' así como en frameworks como <b>Spring Boot</b> y <b>Vue.js</b>. También cuento con experiencia trabajando con bases de datos <b>SQL</b> y <b>NoSQL</b>,' +
            ' metodologías ágiles y buenas prácticas de desarrollo.<br><br>' +
            'Mi camino hacia el desarrollo de software comenzó en 2021, cuando descubrí el mundo de la programación.' +
            ' Fue este descubrimiento el que me llevó a dar un giro radical en mi carrera profesional y formarme en el desarrollo de software.' +
            ' Mi trayectoria previa como integrador social me ha aportado habilidades muy valiosas, como <b>trabajo en equipo</b>,' +
            ' <b>comunicación efectiva</b> y <b>creatividad para resolver problemas</b>, que, junto a las habilidades técnicas adquiridas en mi formación,' +
            ' me permiten abordar los proyectos desde una perspectiva integradora.<br><br>' +
            'Creo en el desarrollo como una herramienta para convertir ideas en realidades que faciliten y mejoren el día a día de los usuarios.' +
            ' Mi meta es seguir aprendiendo y creciendo,' +
            ' mientras contribuyo al desarrollo de proyectos que marquen la diferencia.<br><br>',
    },
    proyectos: [
        {id: 1, titulo: 'Portfolio', texto: "Portfolio personal desarrollado con Vue.js y JavaScript, enfocado en ofrecer un diseño limpio y funcional. Uso de Vue router para la organización" +
                " de las vistas y componentes y facilitar la escalabilidad. Este proyecto sirve como una ventana interactiva a mis proyectos de desarrollo, incluyendo enlaces directos a sus respectivos repositorios en GitHub",
            github: "https://github.com/Da-rc/PortfolioPersonal",
            imagen: '/portfolio.png',
            keys: [
                {nombre: 'JavaScript'},
                {nombre: 'Vue.js'},
                {nombre: 'HTML & CSS'},
                {nombre: 'Git'}
            ],
        },
        {id: 2, titulo: 'Web gestión interna', texto: "Una web ficticia de gestión interna de oficinas y usuarios. El back está " +
                    "desarrollado en Java y Spring Boot para la creación de una API REST, siguiendo una arquitectura hexagonal para proporcionar flexibilidad y escalabilidad. " +
                    "Se utiliza una base de datos PostgreSQL para el almacenamiento de datos. El front está desarrollado con el framework Vue.js con un diseño funcional, limpio " +
                    "e intuitivo. Se implementa Firebase Authenticator para el login y la autorización de petciones POST, PUT y DELETE. ", github: "https://github.com/Da-rc/Mock-WebEmpresarial",
            web: 'https://mock-webempresarial-production.up.railway.app/',
            imagen: '/empleados.png',
            keys: [
                {nombre: 'Java'},
                {nombre: 'Spring Boot'},
                {nombre: 'PostgreSQL'},
                {nombre: 'API REST'},
                {nombre: 'JavaScript'},
                {nombre: 'Vue.js'},
                {nombre: 'HTML & CSS'},
                {nombre: 'Firebase Authenticator'},
                {nombre: 'Git'}
            ],
        },
        {id: 3, titulo: 'Proyecto final DAM', texto: "Mi trabajo final del ciclo DAM fue el desarrollo de un videojuego para dispositivos Android. " +
                "Un proyecto en el que combiné mecánicas de juego clásicas con un estilo narrativo y visual retro, creando una experiencia única. " +
                "Fue desarrollado en Unity en C#," +
                " con la implementación de Firebase Authenticator para la gestión de las cuentas y el acceso de los jugadores y Firestore Database, base de datos basada en documentos, para el almacenamiento" +
                " tanto de la información de las partidas como los textos de las distintas posibles rutas del juego.",
            github: 'https://github.com/Da-rc/AndroidGame-WhereDidIGo',
            web: 'https://mapacher.itch.io/where-did-i-go',
            imagen: '/whereDidIGo.jpg',
            keys: [
                {nombre: 'C#'},
                {nombre: 'Unity'},
                {nombre: 'Firebase Authenticator'},
                {nombre: 'Firebase Firestore Database'},
                {nombre: 'Git'}
            ],
        },
        {id: 4, titulo: 'Videojuego Android', texto: "Proyecto personal de videojuego para dispositivos Android. Un videojuego de estilo de plataformas clásico en el que" +
                " el jugador debe ir superando obstáculos y coleccionando objetos para conseguir puntos. Una vez que el jugador finaliza o pierde sus vidas podrá inscribir su nombre y su puntuación en un" +
                " leaderboard. Proyecto desarrollado en Unity en lenguaje C# con la implementación de Firebase Firestore Database, base de datos basada en documentos, para la gestión de las puntuaciones de usuarios.",
            github: 'https://github.com/Da-rc/2DPlatform-Unity',
            imagen: '/platform.jpg',
            keys: [
                {nombre: 'C#'},
                {nombre: 'Unity'},
                {nombre: 'Firebase Firestore Database'},
                {nombre: 'Git'}
            ],
        },
    ],
};