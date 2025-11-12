<template>
  <v-container fluid class="post-pricing-section py-md-8">
    <v-container fluid class="px-4 px-md-16">
      <v-row>
        <v-col cols="12">
          <component :is="selectedTab === 'naturales' ? Naturales : Juridicas" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
    default: 'naturales'
  }
})

const Naturales = defineAsyncComponent(() => import('./partials/Naturales.vue'))
const Juridicas = defineAsyncComponent(() => import('./partials/Juridicas.vue'))
</script>

<style scoped>
.post-pricing-section {
  background-color: #F9FAFB;
}
</style>
