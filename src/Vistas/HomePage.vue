<template>
  <div>
    <main>
      <AboutComp :seleccion="seleccion" @seleccion-cambiada="actualizarSeleccion" />
      <ProyectosComp :seleccion="seleccion"/>
    </main>
  </div>

</template>

<script>

import {defineComponent} from "vue";
import AboutComp from "@/components/AboutComp.vue";
import ProyectosComp from "@/components/ProyectosComp.vue";

export default defineComponent({
  components: {ProyectosComp, AboutComp},
  data() {
    return {
      seleccion: '',
    };
  },
  methods: {
    actualizarSeleccion(seleccion) {
      this.seleccion = seleccion;
    }
  }
});
</script>

<style scoped>
main {
  margin: 0;
  padding: 0;
}
</style>