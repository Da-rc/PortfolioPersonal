<template>
  <div>
    <main>
      <AboutComp />
      <ProyectosComp />
    </main>
  </div>

</template>

<script>

import {defineComponent} from "vue";
import AboutComp from "@/components/AboutComp.vue";
import ProyectosComp from "@/components/ProyectosComp.vue";

export default defineComponent({
  components: {ProyectosComp, AboutComp}
})
</script>

<style scoped>
main {
  margin: 0;
  padding: 0;
}
</style>