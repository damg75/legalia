<template>
  <div class="modal-payload">
    <!-- Header sticky con icono y título -->
    <div class="modal-sticky-header">
      <v-card-title class="pa-6 pb-2">
        <div class="d-flex align-start">
          <div class="icon-container-modal mr-4">
            <span class="service-icon-modal">{{ selectedService?.icon }}</span>
          </div>
          <div class="flex-grow-1">
            <h2 class="service-modal-title">{{ selectedService?.title }}</h2>
          </div>
        </div>
      </v-card-title>
      <v-divider class="mx-6"></v-divider>
    </div>
    
    <v-card-text ref="scrollableContent" class="pa-6 pt-4 modal-scrollable-content">
      <!-- Subtítulo -->
      <p v-if="selectedService?.subtitle" class="service-subtitle mb-4">
        {{ selectedService.subtitle }}
      </p>
      
      <!-- Descripción principal -->
      <p v-if="selectedService?.description" class="service-description mb-6">
        {{ selectedService.description }}
      </p>
      
      <!-- Sección: ¿En qué situaciones podemos ayudarte? -->
      <div v-if="selectedService?.situations && selectedService.situations.length > 0" class="situations-section mb-6">
        <h3 class="section-title mb-4">¿En qué situaciones podemos ayudarte?</h3>
        <ul class="situations-list">
          <li v-for="(situation, index) in selectedService.situations" :key="index" class="situation-item">
            <template v-if="situation.title.includes(':')">
              <span class="situation-title">{{ situation.title.split(':')[0] }}</span>
              <span class="situation-subtitle">{{ situation.title.split(':').slice(1).join(':').trim() }}</span>
            </template>
            <template v-else>
              <span class="situation-title">{{ situation.title }}</span>
            </template>
            <span v-if="situation.subtitle" class="situation-subtitle">
              {{ situation.subtitle }}
            </span>
          </li>
        </ul>
      </div>
      
      <!-- Sección: ¿Por qué elegirnos? -->
      <div v-if="selectedService?.whyChooseUs" class="why-section mb-6">
        <h3 class="section-title mb-3">¿Por qué elegirnos?</h3>
        <p class="why-text">{{ selectedService.whyChooseUs }}</p>
      </div>
      
      <!-- Chips para tipo de persona -->
      <div v-if="showPersonType" class="person-type-chips mb-4">
        <v-chip
          v-if="selectedService?.forNaturalPerson"
          size="small"
          color="primary"
          variant="outlined"
          class="mr-2"
        >
          Personas Naturales
        </v-chip>
        <v-chip
          v-if="selectedService?.forLegalEntity"
          size="small"
          color="primary"
          variant="outlined"
        >
          Personas Jurídicas
        </v-chip>
      </div>
    </v-card-text>
    
    <!-- CTA Button -->
    <v-card-actions class="pa-4 pa-md-6 pt-0">
      <v-btn
        block
        color="#1E40AF"
        variant="flat"
        size="large"
        class="cta-button"
        @click="$emit('confirm', selectedService)"
        max-width="800px"
      >
        {{ selectedService?.ctaText || 'Solicitar asesoría' }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'

interface ServiceSituation {
  title: string
  subtitle?: string
}

interface Service {
  icon: string
  title: string
  subtitle?: string
  description?: string
  code?: string
  situations?: ServiceSituation[]
  whyChooseUs?: string
  ctaText?: string
  forNaturalPerson?: boolean
  forLegalEntity?: boolean
}

interface Props {
  selectedService: Service | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm', service: Service | null): void
}>()

const scrollableContent = ref<HTMLElement | null>(null)

const showPersonType = computed(() => {
  return props.selectedService?.forNaturalPerson || props.selectedService?.forLegalEntity
})

// Resetear scroll cuando cambia el servicio seleccionado
watch(() => props.selectedService, () => {
  nextTick(() => {
    if (scrollableContent.value?.$el) {
      scrollableContent.value.$el.scrollTop = 0
    } else if (scrollableContent.value) {
      (scrollableContent.value as any).scrollTop = 0
    }
  })
})
</script>

<style scoped lang="scss">
.modal-payload {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
}

/* Header sticky */
.modal-sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #FFFFFF;
  flex-shrink: 0;
  padding-top: 16px;
}

/* Contenido scrolleable */
.modal-scrollable-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.4) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.4);
    border-radius: 10px;
    transition: background 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.6);
  }
}

/* Header Section */
.icon-container-modal {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.service-icon-modal {
  font-size: 28px;
}

.service-modal-title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: #1F2937;
  margin: 0;
}

/* Subtitle */
.service-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #6B7280;
  margin: 0;
}

/* Description */
.service-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #374151;
  margin: 0;
}

/* Sections */
.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: #1F2937;
  margin: 0;
}

/* Situations List */
.situations-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.situation-item {
  position: relative;
  padding-left: 24px;
  margin-bottom: 16px;
  
  &:before {
    content: '•';
    position: absolute;
    left: 8px;
    color: #3B82F6;
    font-weight: bold;
    font-size: 18px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
}

.situation-title {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: #1F2937;
}

.situation-subtitle {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #4B5563;
  margin-top: 4px;
}

/* Why Choose Us */
.why-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: #374151;
  margin: 0;
}

/* Person Type Chips */
.person-type-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* CTA Button */
.cta-button {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 8px;
  height: 48px;
  width: 100%;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-sticky-header {
    padding-top: 12px;
  }

  .service-modal-title {
    font-size: 17px;
  }
  
  .icon-container-modal {
    width: 36px;
    height: 36px;
    border-radius: 6px;
  }
  
  .service-icon-modal {
    font-size: 20px;
  }

  .cta-button {
    font-size: 15px;
    height: 52px;
    width: 100%;
    margin: 0;
  }

  .person-type-chips {
    justify-content: center;
  }

  .v-card-actions {
    padding: 16px !important;
    padding-top: 0 !important;
  }

  .v-card-title {
    padding: 16px !important;
    padding-bottom: 8px !important;
  }

  .v-card-text {
    padding: 16px !important;
    padding-top: 8px !important;
  }
}
</style>

