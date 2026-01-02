<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }">
      <transition name="slide" mode="out-in">
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
/* Transición slide horizontal */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
