<template>
  <nav>
    <h1>David Romero Cabello</h1>
    <h2>Fullstack developer</h2>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
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

</script>

<style scoped>

  nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 40%;
    background-color: #0b132b;
    color: #ebf2fa;
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
  }

  h2 {
    margin-left: 15%;
    font-size: 1.4rem;
    color: #ebf2fa;
    margin-bottom: 50px;
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

  a {
    text-decoration: none;
    font-weight: bold;
    color: #ebf2fa;
    font-size: 1rem;
    transition: color 0.3s;
  }

  a:hover {
    color: #f0ebd8;
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