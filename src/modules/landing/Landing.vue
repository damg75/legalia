<template>
  <v-container fluid class="red">
    <Hero />
  </v-container>
</template>

<script setup>
import Hero from './parts/Hero.vue'
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}
</style>