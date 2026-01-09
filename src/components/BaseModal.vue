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

// ===== TRANSICIONES MEJORADAS PARA EL BOTTOMSHEET (MÓVIL) =====
// Sobrescribir completamente las transiciones de Vuetify para el bottomsheet
.dialog-bottom-transition-enter-active {
  .base-modal-mobile {
    transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1) !important;
  }
}

.dialog-bottom-transition-leave-active {
  .base-modal-mobile {
    transition: transform 0.12s cubic-bezier(0.4, 0, 1, 1) !important;
  }
}

.dialog-bottom-transition-enter-from,
.dialog-bottom-transition-leave-to {
  .base-modal-mobile {
    transform: translateY(100%) !important;
  }
}

.dialog-bottom-transition-enter-to,
.dialog-bottom-transition-leave-from {
  .base-modal-mobile {
    transform: translateY(0%) !important;
  }
}

// ===== TRANSICIONES PARA DESKTOP (MODAL CENTRADO) =====
.dialog-transition-enter-active {
  .base-modal-desktop {
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                opacity 0.2s ease-out !important;
  }
}

.dialog-transition-leave-active {
  .base-modal-desktop {
    transition: transform 0.18s cubic-bezier(0.4, 0, 0.6, 1),
                opacity 0.15s ease-in !important;
  }
}

.dialog-transition-enter-from {
  .base-modal-desktop {
    transform: scale(0.85) translateY(20px) !important;
    opacity: 0;
  }
}

.dialog-transition-enter-to,
.dialog-transition-leave-from {
  .base-modal-desktop {
    transform: scale(1) translateY(0) !important;
    opacity: 1;
  }
}

.dialog-transition-leave-to {
  .base-modal-desktop {
    transform: scale(0.9) translateY(10px) !important;
    opacity: 0;
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

