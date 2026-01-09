<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </component>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from '@/composables/useSEO'

// Layouts
import LandingLayout from '@/layouts/LandingLayout.vue'

const route = useRoute()
const { updateSEO } = useSEO()

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

// Actualizar SEO cuando cambia la ruta
watch(
  () => route.path,
  () => {
    const seoData = route.meta?.seo || {}
    updateSEO({
      ...seoData,
      url: `${window.location.origin}${route.path}`
    })
  },
  { immediate: true }
)
</script>

<style>
/* Transición fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
