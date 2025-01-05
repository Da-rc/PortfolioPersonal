<template>
  <section id="about">
      <div>
        <img :src="avatar" alt="">
        <p v-html="textoSpa"></p>
        <div class="herramientas">
          <div class="herramienta"
               @click="guardarSeleccion('Java')"
               :class="{ selected: seleccion === 'Java' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>Java</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('Spring Boot')"
               :class="{ selected: seleccion === 'Spring Boot' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>Spring Boot</p>
          </div>
          <div class="herramienta">
            <i class="pi pi-graduation-cap"></i>
            <p>Kotlin</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('JavaScript')"
               :class="{ selected: seleccion === 'JavaScript' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>JavaScript</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('Vue.js')"
               :class="{ selected: seleccion === 'Vue.js' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>Vue.js</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('C#')"
               :class="{ selected: seleccion === 'C#' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>C#</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('HTML & CSS')"
               :class="{ selected: seleccion === 'HTML & CSS' }"
          >
            <i class="pi pi-graduation-cap"></i>
            <p>HTML & CSS</p>
          </div>
          <div class="herramienta">
            <i class="pi pi-database"></i>
            <p>MySQL</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('PostgreSQL')"
               :class="{ selected: seleccion === 'PostgreSQL' }"
          >
            <i class="pi pi-database"></i>
            <p>PostgreSQL</p>
          </div>
          <div class="herramienta"
               @click="guardarSeleccion('Firebase Firestore Database')"
               :class="{ selected: seleccion === 'Firebase Firestore Database' }"
          >
            <i class="pi pi-database"></i>
            <p>MongoDB</p>
          </div>
          <div class="herramienta">
            <i class="pi pi-github"></i>
            <p>Git</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  props: ['seleccion'],
  data() {
    return {
      textoSpa: '¡Hola <s>mundo!</s> Soy un desarrollador Full Stack apasionado por crear soluciones creativas y útiles. ' +
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
      avatar: '/avatar.png',
    };
  },
  methods: {
    guardarSeleccion(seleccion) {
      if (seleccion === this.seleccion) {
        this.$emit("seleccion-cambiada", '');
        return;
      }
      this.$emit('seleccion-cambiada', seleccion);

      const proyectosSection = document.getElementById('proyectos');
      proyectosSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }
      );
    },
  },
};

</script>

<style scoped>
  #about {
    padding: 0;
    margin: 0;
  }

  div{
    margin-top: 7%;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 5px;
    object-fit: cover;

  }

  p{
    font-size: 1rem;
    text-align: left;
    margin: 8% 12% 5% 12%;
  }

  .herramientas {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin: 5% 12% 5% 12%;
  }

  .herramienta {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 15px;
    width: 120px;
    background-color: #3e5c76;
  }

  .selected {
    background-color: #36495a;
  }

  .herramienta i {
    font-size: 2rem;
    color: #748cab; /* Cambia según la herramienta */
  }

  .herramienta p {
    margin: 5px 0 0 0;
    font-weight: 400;
    color: #F2F2F2;
    font-size: 1rem;
    text-align: center;

  }
</style>