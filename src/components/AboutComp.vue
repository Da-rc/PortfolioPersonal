<template>
  <section id="about">
      <div>
        <p v-html="textoSpa"></p>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textoSpa: '¡Hola <s>mundo!</s> Soy un desarrollador Full Stack apasionado por crear soluciones innovadoras' +
          ' y funcionales. En 2024, me gradué con matrícula de honor en el Ciclo de Desarrollo de Aplicaciones Multiplataforma,' +
          ' una experiencia que me brindó una base sólida en tecnologías como Java, Kotlin y JavaScript,' +
          ' así como en frameworks como Spring Boot y Vue.js. También tengo experiencia trabajando con bases de datos SQL y NoSQL,' +
          ' aplicando metodologías ágiles y enfocándome en buenas prácticas de desarrollo.<br><br>' +
          'Mi camino hacia el mundo del desarrollo comenzó en 2021, cuando descubrí mi pasión por la programación.' +
          ' Este hallazgo me llevó a dar un giro radical en mi carrera profesional y formarme en el desarrollo de software.' +
          ' Mi trayectoria previa como integrador social me ha aportado habilidades muy valiosas, como trabajo en equipo,' +
          ' comunicación efectiva y creatividad para resolver problemas, que, unidas a las habilidades técnicas adquiridas en mi formación,' +
          ' me permiten abordar los proyectos desde una perspectiva integradora.<br><br>' +
          'Creo en el desarrollo como una herramienta para transformar ideas en realidades que faciliten y mejoren el día a día de los usuarios,' +
          ' y disfruto cada etapa del proceso. Mi objetivo es seguir aprendiendo y creciendo,' +
          ' mientras contribuyo al diseño de aplicaciones que marquen la diferencia.<br><br>' +
          'Cuando no estoy programando, me encontrarás aprendiendo algo nuevo o enfrentándome a desafíos creativos. ' +
          'Estoy constantemente en busca de oportunidades para aportar, mejorar mis habilidades y formar parte de proyectos inspiradores.<br><br>'
    };
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

  p{
    font-size: 0.9rem;
    text-align: left;
    margin: 3% 12% 5% 12%;
  }
</style>