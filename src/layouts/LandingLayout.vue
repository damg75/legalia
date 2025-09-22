<template>
  <v-app>
    <v-main class="landing-main">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
// Layout específico para la landing page
// Sin navegación ni footer para un diseño más limpio
</script>

<style scoped>
.landing-main {
  background-color: #FFFFFF;
  min-height: 100vh;
}
</style>