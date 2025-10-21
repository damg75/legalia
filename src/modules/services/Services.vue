<template>
  <v-container fluid class="ma-0 pa-0">
    <Hero />
    <Tabs 
      @tab-change="handleTabChange"
      @service-click="handleServiceClick"
    />
    <Pricing :selected-tab="selectedTab" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import Hero from './parts/Hero.vue'
import Tabs from './parts/Tabs.vue'
import Pricing from './parts/Pricing.vue'

const selectedTab = ref('naturales')

const handleTabChange = (tabValue) => {
  selectedTab.value = tabValue
  console.log('Tab seleccionado:', tabValue)
}

const handleServiceClick = (serviceCode, serviceData) => {
  console.log('Servicio clickeado:', serviceCode, serviceData)
  // Aquí se puede manejar la lógica para abrir modales, etc.
}
</script>

<style scoped></style>