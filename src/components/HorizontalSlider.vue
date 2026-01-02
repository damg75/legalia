<template>
  <div class="horizontal-slider-wrapper" :class="wrapperClass">
    <div 
      class="horizontal-slider" 
      :class="sliderClass"
      :style="{ ...sliderStyle, '--slider-item-width': itemWidth }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gap: {
    type: [String, Number],
    default: 24
  },
  padding: {
    type: [String, Number],
    default: 20
  },
  scrollPadding: {
    type: [String, Number],
    default: 20
  },
  wrapperClass: {
    type: String,
    default: ''
  },
  sliderClass: {
    type: String,
    default: ''
  },
  itemWidth: {
    type: String,
    default: 'calc(100% - 80px)'
  }
})

const sliderStyle = computed(() => {
  return {
    gap: typeof props.gap === 'number' ? `${props.gap}px` : props.gap,
    padding: typeof props.padding === 'number' ? `${props.padding}px` : props.padding,
    scrollPadding: typeof props.scrollPadding === 'number' ? `${props.scrollPadding}px` : props.scrollPadding
  }
})
</script>

<style scoped lang="scss">
.horizontal-slider-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 8px 0;
}

.horizontal-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.horizontal-slider::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Clase helper para items del slider */
:deep(.slider-item) {
  flex: 0 0 var(--slider-item-width, calc(100% - 80px));
  max-width: var(--slider-item-width, calc(100% - 80px));
  min-width: 270px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
