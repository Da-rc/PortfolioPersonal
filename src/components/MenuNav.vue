<template>
  <nav>
    <h1>David Romero Cabello</h1>
    <h2>Fullstack developer</h2>
    <ul>
      <li :class="{ active:seccionActiva === 'about' }"><a href="#about">About</a></li>
      <li :class="{ active:seccionActiva === 'proyectos' }"><a href="#proyectos">Proyectos</a></li>
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

  h1 {
    margin: 10% 0 0 15%;
    font-size: 1.9rem;
    font-weight: bold;
    margin-bottom: 0px;
    color: #F2F2F2;
  }

  h2 {
    margin-left: 15%;
    font-size: 1.4rem;
    margin-bottom: 50px;
    color: #F2F2F2;
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

  li.active a {
    color: #748cab;

  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #F2F2F2;
    font-size: 1rem;
    transition: color 0.3s;
  }

  a:hover {
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

    h1{
      margin: 0 0 0 10%;
    }

    h2{
      margin-left: 10%;
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