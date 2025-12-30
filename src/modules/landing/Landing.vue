<template>
  <v-container fluid class="ma-0 pa-0">
    <Hero />
    <Services />
    <Payments />
    <CTA />
  </v-container>
</template>

<script setup>
import Hero from './parts/Hero.vue'
import Services from './parts/Services.vue'
import Payments from './parts/Payments.vue'
import CTA from './parts/CTA.vue'
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}

/* Ocultar cualquier texto directo en el contenedor */
.v-container {
  font-size: 0;
}

.v-container > * {
  font-size: initial;
}
</style>