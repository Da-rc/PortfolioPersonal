<template>
  <section id="proyectos">
    <div class="contenedor-proyectos">
      <div v-for="proyecto in $tm('proyectos')" :key="proyecto.id" class="proyectos" :data-nombres="proyecto.keys ? proyecto.keys.map(k => k.nombre).join(',') : ''">
        <!-- imagen aquí -->
        <div class="imagen-proyecto">
          <img :src="proyecto.imagen" alt="">
        </div>

        <div class="info-proyecto">
          <h3 class="titulo-proyecto">{{ proyecto.titulo }}</h3>
          <p class="texto-proyecto">{{ proyecto.texto }}</p>

          <div class="contenedor-keywords">
            <div v-for="key in proyecto.keys"
                 class="keyword"
                 :key="key.nombre"
                 :class="{ selected : key.nombre === seleccion }"
            >
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
    props: ['seleccion'],
  };
</script>

<style scoped>
  #proyectos {
    padding: 17% 0 0;
    margin: 0;
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
    background-color: #F2F2F2;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
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
    border: solid 3px rgba(54,	73,	90, 0.2) ;
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
    cursor: default;
  }

  .texto-proyecto {
    font-size: 0.9rem;
    margin-bottom: 10px;
    text-align: justify;
    cursor: default;
  }

  .enlaces {
    align-self: flex-end;
    margin-top: 3%;
  }

  .enlaces a {
    margin-right: 10px;
    color: #3e5c76;
    font-size: 1.5rem;
  }

  .enlaces a:hover {
    color: #748cab;
  }

  .contenedor-keywords  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .keyword {
    margin: 10px 10px 0 0;
    background-color: #3e5c76;
    padding: 10px;
    border-radius: 20px;
    cursor: default;
  }

  .nombre-keyword{
    font-size: 0.8rem;
    color: #F2F2F2;
    font-weight: 400;
  }

  .selected {
    background-color: #121a32;
  }

  @media (max-width: 768px) {
    #proyectos {
      padding: 55% 0 0;
      margin-top: -38%;
    }
  }


</style>