<template>
  <v-container fluid class="ma-0 pa-0">
    <Hero />

    <Services />

    <CTA />
    
  </v-container>
</template>

<script setup>
import Hero from './parts/Hero.vue'
import Services from './parts/Services.vue'
import CTA from './parts/CTA.vue'
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}
</style>