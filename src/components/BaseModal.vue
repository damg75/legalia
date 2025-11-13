<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :persistent="persistent"
    :content-class="contentClass"
    :max-width="isMobile ? '100%' : maxWidth"
    :transition="transition"
    :scrim="'rgba(0, 0, 0, 0.75)'"
    @click:outside="handleClickOutside"
    :fullscreen="false"
  >
    <transition name="fade" mode="out-in">
      <v-card
        v-if="modelValue"
        :class="cardClass"
        :elevation="elevation"
      >
        <!-- Botón de cerrar -->
        <v-btn
          v-if="closeable"
          icon
          variant="text"
          size="small"
          class="close-button"
          @click="close"
          aria-label="Cerrar"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <!-- Contenido del modal -->
        <slot />
      </v-card>
    </transition>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

// Props
interface Props {
  modelValue: boolean
  dismissable?: boolean
  persistent?: boolean
  closeable?: boolean
  maxWidth?: string | number
  elevation?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  dismissable: true,
  persistent: false,
  closeable: true,
  maxWidth: '600px',
  elevation: 8
})

// Emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

// Composables
const { xs, smAndDown } = useDisplay()

// Computed
const isMobile = computed(() => smAndDown.value)

const transition = computed(() => {
  return isMobile.value ? 'dialog-bottom-transition' : 'dialog-transition'
})

const contentClass = computed(() => {
  return isMobile.value ? 'base-modal-mobile' : 'base-modal-desktop'
})

const cardClass = computed(() => {
  return [
    'base-modal-card',
    {
      'base-modal-card--mobile': isMobile.value,
      'base-modal-card--desktop': !isMobile.value
    }
  ]
})

// Methods
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleClickOutside = () => {
  if (props.dismissable && !props.persistent) {
    close()
  }
}
</script>

<style scoped lang="scss">
.base-modal-card {
  position: relative;
  overflow: auto;

  &--mobile {
    border-radius: 24px 24px 0 0 !important;
    max-height: 85vh;
    width: 100%;
    margin: 0 !important;
  }

  &--desktop {
    border-radius: 12px !important;
    max-height: 90vh;
  }
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
}

// Transiciones de fade para el contenido
.fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>

<style lang="scss">
// Estilos globales para el v-dialog
// Mobile (bottomsheet) - Forzar posición en el bottom
.base-modal-mobile {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  top: auto !important;
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  transform: none !important;
  animation-duration: 0.3s !important;
}

// Desktop (modal centrado)
.base-modal-desktop {
  margin: 24px;
}

// Transición suave para el scrim (fondo oscuro)
.v-overlay__scrim {
  transition: opacity 0.3s ease !important;
}

// Mejoras a las transiciones de Vuetify
.v-dialog {
  &.dialog-bottom-transition-enter-active,
  &.dialog-bottom-transition-leave-active {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  &.dialog-transition-enter-active,
  &.dialog-transition-leave-active {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.3s ease !important;
  }
}

// Scrollbar personalizado para el modal
.v-card {
  // Webkit (Chrome, Safari, Edge)
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.35);
    }

    &:active {
      background: rgba(0, 0, 0, 0.45);
    }
  }

  // Firefox
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}
</style>

