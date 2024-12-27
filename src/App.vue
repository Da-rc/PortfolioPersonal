<template>
  <div class="container">
    <MenuNav class="menu"/>
    <router-view class="contenido"/>
  </div>
</template>

<script>
import MenuNav from "@/components/MenuNav.vue";

export default {
  name: 'App',
  components: {
    MenuNav,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.container {
  display: flex;
  flex-direction: row;
  min-height: 100%;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.menu {
  flex-shrink: 0;
}

.contenido {
  flex-grow: 1;
  max-width: 70%;
  padding: 20px;
  margin: 0 0 0 30%;
  background-color: #f9f9f9;
  box-sizing: border-box;

  @media (max-width: 768px){
    max-width: 100%;
    margin: 0;
  }
}
</style>
