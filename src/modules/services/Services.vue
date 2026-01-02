<template>
  <v-container fluid class="ma-0 pa-0">
    <Hero />
    <Tabs 
      @tab-change="handleTabChange"
      @service-click="handleServiceClick"
    />
    <Pricing :selected-tab="selectedTab" />
    <PostPricing :selected-tab="selectedTab" />
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useServiceTab } from '@/composables/useServiceTab'
import Hero from './parts/Hero.vue'
import Tabs from './parts/Tabs.vue'
import Pricing from './parts/Pricing.vue'
import PostPricing from './parts/PostPricing.vue'

const { getSelectedTab } = useServiceTab()
const selectedTab = ref('naturales')

// Leer estado compartido al montar el componente
onMounted(() => {
  const savedTab = getSelectedTab()
  if (savedTab === 'naturales' || savedTab === 'juridicas') {
    selectedTab.value = savedTab
  }
})

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