<template>
  <v-app class="d-flex flex-column">
    <Navbar />
    <v-main class="landing-main flex-grow-1">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.v-app {
  min-height: 100vh;
}

.landing-main {
  background-color: #FFFFFF;
  flex: 1;
}
</style>