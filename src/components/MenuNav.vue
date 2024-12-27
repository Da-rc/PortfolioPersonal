<template>
  <nav>
    <h1>David Romero</h1>
    <h2>Fullstack developer</h2>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
    </ul>
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
    width: 30%;
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 1.2rem;
    color: #aaaaaa;
    margin-bottom: 50px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: color 0.3s;
  }

  a:hover {
    color: #4caf50;
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

    ul{
      flex-direction: row;
      justify-content: center;
      gap: 10px;
    }
  }

</style>