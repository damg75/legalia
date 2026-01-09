<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="handleModelUpdate"
    :persistent="persistent"
    :content-class="contentClass"
    :max-width="isMobile ? '100%' : maxWidth"
    :transition="transition"
    :scrim="'rgba(0, 0, 0, 0.75)'"
    @click:outside="handleClickOutside"
    :fullscreen="false"
    eager
  >
    <v-card
      :class="cardClass"
      :elevation="elevation"
    >
      <!-- Botón de cerrar -->
      <v-btn
        v-if="closeable || isMobile"
        icon
        variant="text"
        size="small"
        :class="['close-button', { 'close-button--mobile': isMobile }]"
        @click="close"
        aria-label="Cerrar"
      >
        <v-icon :size="isMobile ? 20 : 24">mdi-close</v-icon>
      </v-btn>

      <!-- Contenido del modal -->
      <slot />
    </v-card>
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

const handleModelUpdate = (value: boolean) => {
  emit('update:modelValue', value)
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
    padding-bottom: env(safe-area-inset-bottom) !important;
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
  min-width: 32px !important;
  width: 32px !important;
  height: 32px !important;
  
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &--mobile {
    top: 12px;
    right: 12px;
    background-color: rgba(0, 0, 0, 0.04);
    min-width: 32px !important;
    width: 32px !important;
    height: 32px !important;
    opacity: 0.7;
    
    :deep(.v-icon) {
      color: #6B7280 !important;
      font-size: 18px !important;
    }
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      opacity: 1;
    }
  }
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
  // NO usar transform: none aquí para permitir las transiciones
}

// Desktop (modal centrado)
.base-modal-desktop {
  margin: 24px;
}

// Transición suave para el scrim (fondo oscuro)
.v-overlay__scrim {
  transition: opacity 0.12s ease-out !important;
}

// ===== TRANSICIONES PERSONALIZADAS =====
// Animación de entrada desde abajo
@keyframes slideUpModal {
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
}

// Animación de salida hacia abajo
@keyframes slideDownModal {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
}

// Mobile (bottomsheet)
.base-modal-mobile {
  transform: translateY(100vh);
}

.v-overlay.v-overlay--active .base-modal-mobile {
  animation: slideUpModal 0.2s cubic-bezier(0.2, 0, 0, 1) forwards !important;
}

// Desktop
.base-modal-desktop {
  transform: translateY(100vh);
}

.v-overlay.v-overlay--active .base-modal-desktop {
  animation: slideUpModal 0.3s cubic-bezier(0.2, 0, 0, 1) forwards !important;
}

// Animación de salida cuando el overlay se cierra
.v-overlay:not(.v-overlay--active) .base-modal-mobile,
.v-overlay:not(.v-overlay--active) .base-modal-desktop {
  animation: slideDownModal 0.2s cubic-bezier(0.4, 0, 1, 1) forwards !important;
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

