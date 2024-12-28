<template>
  <section id="proyectos">
    <div class="contenedor-proyectos">
      <div v-for="proyecto in proyectos" :key="proyecto.id" class="proyectos">
        <!-- imagen aquí quizas -->
        <div class="imagen-proyecto">
          <img :src="proyecto.imagen" alt="">
        </div>

        <div class="info-proyecto">
          <h3 class="titulo-proyecto">{{ proyecto.titulo }}</h3>
          <p class="texto-proyecto">{{ proyecto.texto }}</p>

          <div class="contenedor-keywords">
            <div v-for="key in proyecto.keys" :key="key" class="keyword">
              <p class="nombre-keyword">{{ key.nombre }}</p>
            </div>
          </div>

          <div class="enlaces">
            <a :href="proyecto.github" target="_blank">
              <i class="pi pi-github"></i>
            </a>
            <a v-if="proyecto.web" :href="proyecto.web" target="_blank">
              <i class="pi pi-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "primeicons/primeicons.css";

  export default {
    data() {
      return {
        proyectos: [
          {id: 1, titulo: 'Portfolio', texto: "Portfolio personal desarrollado con Vue.js y JavaScript, enfocado en ofrecer un diseño limpio y funcional. Uso de Vue router para la organización" +
                " de las vistas y componentes y facilitar la escalabilidad. Este proyecto sirve como una ventana interactiva a mis proyectos de desarrollo, incluyendo enlaces directos a sus respectivos repositorios en GitHub",
            github: "https://github.com/Da-rc/PortfolioPersonal",
            imagen: '/portfolio.png',
            keys: [
              {nombre: 'JavaScript'},
              {nombre: 'Vue.js'},
            ],
          },
          {id: 2, titulo: 'Web gestión interna', texto: "Una web ficticia de gestión interna de oficinas y usuarios. El back está" +
                "desarrollado en Java y Spring Boot para la creación de una API REST, siguiendo una arquitectura hexagonal para proporcionar flexibilidad y escalabilidad." +
                "Se utiliza una base de datos PostgreSQL para el almacenamiento de datos. El front está desarrollado con el framework Vue.js con un diseño funcional, limpio" +
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
              {nombre: 'Firebase Authenticator'},
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
            ],
          },
          {id: 4, titulo: 'Videojuego Android', texto: "Proyecto personal de videojuego para dispositivos Android. Un videojuego de estilo de plataformas clásico en el que" +
                " el jugador debe ir superando obstáculos y coleccionando objetos para conseguir puntos. Una vez que el jugador finaliza o pierde sus vidas podrá inscribir su nombre y su puntuación en un" +
                "leaderboard. Proyecto desarrollado en Unity en lenguaje C# con la implementación de Firebase Firestore Database, base de datos basada en documentos, para la gestión de las puntuaciones de usuarios.",
            github: 'https://github.com/Da-rc/2DPlatform-Unity',
            imagen: '/platform.jpg',
            keys: [
              {nombre: 'C#'},
              {nombre: 'Unity'},
              {nombre: 'Firebase Firestore Database'},
            ],
          },
        ],
      };
    },
  };
</script>

<style scoped>
  #proyectos {
    margin-top: 20%;
    padding: 20px;
  }

  .contenedor-proyectos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .proyectos {
    width: 95%;
    padding: 15px;
    background-color: #0b132b;
    box-shadow: 0 2px 5px rgba(0.2, 0.2, 0.2, 0.4);
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .proyectos:hover {
    background-color: #1d2d44;
  }

  .imagen-proyecto {
    width: 25%;
    margin-right: 5%;
    margin-top: 3%;
    align-self: flex-start;

  }

  .imagen-proyecto img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
  }

  .info-proyecto {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }

  .titulo-proyecto {
    font-size: 1.1rem;
    margin-bottom: 10px;
    align-self: flex-start;
  }

  .texto-proyecto {
    font-size: 0.9rem;
    margin-bottom: 10px;
    text-align: justify;
  }

  .enlaces {
    align-self: flex-end;
    margin-top: 3%;
  }

  .enlaces a {
    margin-right: 10px;
    color: #748cab;
    font-size: 1.5rem;
  }

  .enlaces a:hover {
    color: #f0ebd8;
  }

  .contenedor-keywords  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .keyword {
    margin: 10px 0 0 10px;
    background-color: #3e5c76;
    padding: 10px;
    border-radius: 20px;
  }

  .nombre-keyword{
    font-size: 0.8rem;
  }

</style>