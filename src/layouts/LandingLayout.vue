<template>
  <v-app>
    <Navbar />
    <v-main class="landing-main">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.landing-main {
  background-color: #FFFFFF;
  min-height: 100vh;
}
</style>