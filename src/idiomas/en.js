export default {
    menu: {
        profesion: 'FullStack developer',
        aboutMenu: 'About',
        proyectosMenu: 'Projects',
    },
    aboutComp: {
        texto: 'Hello <s>world!</s> I am a Full Stack developer who loves to create useful and creative solutions. ' +
            'In 2024, I graduated with <b>honors</b> as a Higher Technician in Cross-platform application development,' +
            ' a training that provided me with a solid foundation in languages such as <b>Java</b>, <b>Kotlin</b> and <b>JavaScript</b>,' +
            ' as well as frameworks like <b>Spring Boot</b> and <b>Vue.js</b>. I also have experience working with <b>SQL</b> and <b>NoSQL</b>' +
            ' databases, agile methodologies, and best development practices.<br><br>' +
            'My journey into software development began in 2021, when I discovered the world of programming.' +
            ' This discovery led me to take a radical turn in my professional career and dive into software development.' +
            ' Mi previous experience as a community support worker has given me invaluable skills such as <b>teamwork</b>,' +
            ' <b>effective communication</b>, and <b>creative problem-solving</b>. Together with the technical skills I gained during my training,' +
            ' these abilities allow me to approach projects from an integrative perspective.<br><br>' +
            'I believe in development as a tool to turn ideas into realities that simplify and enhance users daily lives.' +
            ' My goal is to continue learning and growing as a professional while' +
            '  contributing to projects that make a difference.<br><br>',
    },
    proyectos: [
        {id: 1, titulo: 'Portfolio', texto: "Personal portfolio developed with Vue.js and JavaScript, focused on providing a clean and functional design. Utilizes Vue Router for organizing views" +
                " and components, enhancing scalability. This project serves as an interactice window into my development projects, including direct links to their respective GitHub repositories and web.",
            github: "https://github.com/Da-rc/PortfolioPersonal",
            imagen: '/portfolio.png',
            keys: [
                {nombre: 'JavaScript'},
                {nombre: 'Vue.js'},
                {nombre: 'HTML & CSS'},
                {nombre: 'Git'}
            ],
        },
        {id: 2, titulo: 'Internal Management Web', texto: "A fictional internal management web application for offices and users. The backend is developed  " +
                "in Java and Spring Boot to create a API REST, following a hexagonal architecture to provide flexibility and scalability. " +
                "PostgreSQL is used as the database. The frontend is built with the Vue.js framework, featuring a functional, clean, and intuitive " +
                "design. Firebase Authenticator is implemented for login and authorization of POST, PUT and DELETE requests. ", github: "https://github.com/Da-rc/Mock-WebEmpresarial",
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
        {id: 3, titulo: 'Final project', texto: "The final project for my software development studies was the creation of a video game for Android devices. " +
                "A project where I combined classic gameplay mechanics with a retro narrative and visual style, creating a unique experience. " +
                "It was developed in Unity using C#," +
                " with the implementation of Firebase Authenticator for managing player accounts and access and Firestore Database, a document-bases database, for storing" +
                " both game data and text for the various possible game routes.",
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
        {id: 4, titulo: 'Android Video Game', texto: "Personal project of a video game for Android devices. A classic platformer where the player must overcome" +
                " obstacles and collect items to earn points. Once the player completes the game or loses all lives, they can enter their name and score on" +
                " a leaderboard. The project was developed in Unity using C#, with the implementation of Firebase Firestore Database, a document-based database, for managing user scores.",
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