<template>
  <section id="proyectos">
    <h2>Proyectos</h2>
    <div class="contenedor-proyectos">
      <div v-for="proyecto in proyectos" :key="proyecto.id" class="proyectos">
        <!-- imagen aquí quizas -->
        <h3 class="titulo-proyecto">{{ proyecto.titulo }}</h3>
        <p class="texto-proyecto">{{ proyecto.texto }}</p>
        <div class="enlaces">
          <a :href="proyecto.github" target="_blank">Github</a>
          <a v-if="proyecto.web" :href="proyecto.web" target="_blank">Web</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        proyectos: [
          {id: 1, titulo: 'Proyecto 1', texto: "dfsdfs", github: "fdsfs", web: 'Proyecto 1'},
          {id: 1, titulo: 'Proyecto 2', texto: "dfsdfs", github: "fdsfs", web: 'Proyecto 2'},
        ],
      };
    },
  };
</script>

<style scoped>
  #proyectos {
    padding: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }

  .contenedor-proyectos {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .proyectos {
    width: 80%;
    padding: 15px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .titulo-proyecto {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .texto-proyecto {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  .enlaces a {
    text-decoration: none;
    margin-right: 10px;
    color: #4caf50;
  }

</style>