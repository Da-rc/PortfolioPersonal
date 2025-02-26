<template>
  <nav>
    <div class="divIdiomas">
      <button class="btnIdioma" @click="cambiarIdioma('es')">
        <img src="/españa.svg" alt="Español" />
      </button>
      <button class="btnIdioma" @click="cambiarIdioma('en')">
        <img src="/english.svg" alt="English" />
      </button>
    </div>
    <h1>David Romero Cabello</h1>
    <h2>{{ $t('menu.profesion') }}</h2>
    <ul>
      <li :class="{ active:seccionActiva === 'about' }" @click="scrollToSection('about')">{{ $t('menu.aboutMenu') }}</li>
      <li :class="{ active:seccionActiva === 'proyectos' }" @click="scrollToSection('proyectos')">{{ $t('menu.proyectosMenu') }}</li>
    </ul>
    <div class="enlaces">
      <a href="https://github.com/Da-rc" target="_blank">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://linkedin.com/in/davidromerocabello" target="_blank">
        <i class="pi pi-linkedin"></i>
      </a>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      seccionActiva: null,
    };
  },
  methods: {
    scrollToSection(seccionNombre) {
      const seccion = document.getElementById(seccionNombre);
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
        this.seccionActiva = seccionNombre; // Actualiza la sección activa
      }
    },
    manejoScroll() {
      const secciones = document.querySelectorAll('section');
      secciones.forEach(seccion => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2) {
          this.seccionActiva = seccion.id;
        }
      });
    },
    cambiarIdioma(idioma) {
      this.$i18n.locale = idioma;
      localStorage.setItem('idioma', idioma);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.manejoScroll);
    this.manejoScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.manejoScroll);
  }
}

</script>

<style scoped>

  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 40%;
    background-color: #36495a;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .divIdiomas {
    display: flex;
    justify-content: flex-start;
    margin: 0 0 5% 15%;
    gap: 5px;
  }

  .btnIdioma {
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .btnIdioma img {
    width: 20px;
    height: auto;
  }

  .btnIdioma:hover {
    transform: scale(1.1);
  }

  h1 {
    margin: 0 0 0 15%;
    font-size: 1.9rem;
    font-weight: bold;
    color: #F2F2F2;
    cursor: default;
  }

  h2 {
    margin-left: 15%;
    font-size: 1.4rem;
    margin-bottom: 50px;
    color: #F2F2F2;
    cursor: default;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  li.active{
    color: #748cab;

  }

  li, a{
    text-decoration: none;
    font-weight: bold;
    color: #F2F2F2;
    font-size: 1rem;
    transition: color 0.3s;
    cursor: pointer;
  }

  li:hover, a:hover {
    color: #748cab;
  }

  .enlaces {
    margin: auto 0 0 15%;
  }

  .enlaces a {
    margin: 5px;
    font-size: 1.6rem;
  }

  /*responsive*/
  @media (min-width: 769px) {
    nav {
      position: fixed;
      top: 0;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    nav {
      width: 100%;
      top: 0;
      left: 0;
      bottom: auto;
      position: sticky;
    }

    .divIdiomas {
      margin: 0 0 2% 10%;
    }

    .btnIdioma img {
      width: 17px;
      padding: 0;
    }

    h1{
      margin: 0 0 0 10%;
      font-size: 1.8rem;
    }

    h2{
      margin-left: 10%;
      font-size: 1.3rem;
    }

    ul{
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      margin-left: 10%;
    }

    .enlaces {
      align-self: flex-end;
    }

    .enlaces a {
      font-size: 1.2rem;
    }
  }

</style>