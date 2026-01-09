<template>
  <div 
    class="simple-carousel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="carousel-track">
      <transition :name="transitionName" mode="out-in">
        <div :key="currentIndex" class="carousel-slide">
          <slot :items="currentItems" :index="currentIndex"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  itemsPerPage: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number,
    default: 0
  },
  swipeThreshold: {
    type: Number,
    default: 80 // Mínimo de píxeles para considerar un swipe
  }
})

const emit = defineEmits(['update:modelValue'])

const currentIndex = ref(props.modelValue)
const transitionName = ref('fade')

// Touch/Swipe state
const touchStartX = ref(0)
const touchStartY = ref(0)
const touchEndX = ref(0)
const isSwiping = ref(false)

// Sincronizar con v-model
watch(() => props.modelValue, (newVal) => {
  currentIndex.value = newVal
})

watch(currentIndex, (newVal) => {
  emit('update:modelValue', newVal)
})

// Calcular el total de páginas
const totalPages = computed(() => {
  return Math.ceil(props.items.length / props.itemsPerPage)
})

// Obtener los items de la página actual
const currentItems = computed(() => {
  const start = currentIndex.value * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.items.slice(start, end)
})

// Métodos de navegación
const next = () => {
  if (currentIndex.value < totalPages.value - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = totalPages.value - 1
  }
}

const goTo = (index) => {
  if (index >= 0 && index < totalPages.value) {
    currentIndex.value = index
  }
}

// Touch handlers para swipe
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
  isSwiping.value = true
}

const handleTouchMove = (e) => {
  if (!isSwiping.value) return
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  if (!isSwiping.value) return
  
  // Si no hubo movimiento (solo tap), no hacer nada
  if (touchEndX.value === 0) {
    isSwiping.value = false
    return
  }
  
  const diffX = touchStartX.value - touchEndX.value
  
  // Solo procesar si el swipe horizontal es mayor que el threshold
  if (Math.abs(diffX) > props.swipeThreshold) {
    if (diffX > 0) {
      // Swipe izquierda -> siguiente
      next()
    } else {
      // Swipe derecha -> anterior
      prev()
    }
  }
  
  // Reset
  isSwiping.value = false
  touchStartX.value = 0
  touchEndX.value = 0
}

// Exponer métodos
defineExpose({
  next,
  prev,
  goTo,
  totalPages,
  currentIndex
})
</script>

<style scoped>
.simple-carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
  touch-action: pan-y pinch-zoom; /* Permite scroll vertical pero captura swipe horizontal */
}

.carousel-track {
  width: 100%;
}

.carousel-slide {
  width: 100%;
}

/* Transición fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
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
