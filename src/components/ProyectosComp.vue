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

</style>