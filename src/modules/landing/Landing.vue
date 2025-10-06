<template>
  <v-container fluid class="ma-0 pa-0">
    <Hero />

    <Services />
    
  </v-container>
</template>

<script setup>
import Hero from './parts/Hero.vue'
import Services from './parts/Services.vue'
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}
</style>