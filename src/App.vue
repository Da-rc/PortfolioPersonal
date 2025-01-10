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
  font-family: "Roboto", serif;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121a32;
}


.container {
  display: flex;
  flex-direction: row;
  min-height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.menu {
  flex-shrink: 0;
}

.contenido {
  max-width: 60%;
  padding: 20px;
  margin-left: auto;
  background-color: #F2F2F2;
  box-sizing: border-box;

  @media (max-width: 768px){
    max-width: 100%;
    margin: 0;
  }
}
</style>
