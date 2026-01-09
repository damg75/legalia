<template>
  <div class="simple-carousel">
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
  }
})

const emit = defineEmits(['update:modelValue'])

const currentIndex = ref(props.modelValue)
const transitionName = ref('fade')

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
