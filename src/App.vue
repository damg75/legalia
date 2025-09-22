<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Layouts
import LandingLayout from '@/layouts/LandingLayout.vue'

const route = useRoute()

// Layout components mapping
const layouts = {
  LandingLayout,
  default: LandingLayout // fallback layout
}

// Compute current layout based on route meta
const layout = computed(() => {
  const layoutName = route.meta?.layout || 'default'
  return layouts[layoutName] || layouts.default
})
</script>
