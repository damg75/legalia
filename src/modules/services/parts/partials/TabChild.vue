<template>
  <v-container fluid class="px-0">
    <v-row>
      <!-- Título y descripción -->
      <v-col cols="12" md="5" lg="4" class="d-flex flex-column justify-start">
        <h2 class="section-title" v-html="title">
        </h2>
        <p class="section-description mt-10">
          {{ description }}
        </p>
      </v-col>

      <!-- Tarjetas de servicios -->
      <v-col cols="12" md="7" lg="8" class="">
        <!-- Desktop: Grid normal -->
        <v-row class="d-none d-md-flex">
          <v-col v-for="service in services" :key="service.title" cols="12" sm="6" lg="4">
            <v-card class="service-card" elevation="3" @click="handleServiceClick(service)">
              <v-card-text class="pa-6">
                <div class="icon-container mb-4">
                  <span class="service-icon">{{ service.icon }}</span>
                </div>
                <h3 class="service-title mb-3">{{ service.title }}</h3>
                <p class="service-description">
                  {{ service.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Mobile: Slide group -->
        <v-slide-group class="d-md-none" :show-arrows="false" content-class="pb-4">
          <v-slide-group-item v-for="service in services" :key="service.title" class="">
            <v-card class="service-card ma-2" elevation="3" width="280" @click="handleServiceClick(service)">
              <v-card-text class="pa-6">
                <div class="icon-container mb-4">
                  <span class="service-icon">{{ service.icon }}</span>
                </div>
                <h3 class="service-title mb-3">{{ service.title }}</h3>
                <p class="service-description">
                  {{ service.description }}
                </p>
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>

    <!-- Modal para mostrar detalles del servicio -->
    <BaseModal
      v-model="isModalOpen"
      :dismissable="true"
      :closeable="isMobile ? false : true"
      :persistent="false"
      max-width="80%"
    >
      <ModalPayload
        :selected-service="selectedService"
        @cancel="closeModal"
        @confirm="confirmService"
      />
    </BaseModal>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import BaseModal from '@/components/BaseModal.vue'
import ModalPayload from './ModalPayload.vue'
import { servicesModalData } from '../../data/servicesModalData.js'

const { xs, mdAndDown } = useDisplay()

const isMobile = computed(() => mdAndDown.value)

const emit = defineEmits(['service-click'])

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  services: {
    type: Array,
    required: true,
    default: () => []
  }
})

// Estado del modal
const isModalOpen = ref(false)
const selectedService = ref(null)

// Función para enriquecer los datos del servicio con la información del modal
const enrichServiceData = (service) => {
  const enrichedData = servicesModalData[service.code] || {}
  return {
    ...service,
    ...enrichedData
  }
}

const handleServiceClick = (service) => {
  selectedService.value = enrichServiceData(service)
  isModalOpen.value = true
  emit('service-click', service.code, service)
}

const closeModal = () => {
  isModalOpen.value = false
}

const confirmService = () => {
  console.log('Servicio confirmado:', selectedService.value)
  isModalOpen.value = false
}
</script>

<style scoped>
/* Sección de título */
.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: 400;
  color: #425066;
}

.section-description {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #000000;
  max-width: 500px;
}

/* Tarjetas de servicios */
.service-card {
  border-radius: 16px;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
  height: 100%;
  cursor: pointer;
}

.service-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.icon-container {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon {
  font-size: 32px;
}

.service-title {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #000000;
}

.service-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #444B53;
  margin: 0;
}

/* Responsive */
@media (max-width: 960px) {
  .section-title {
    font-size: 36px;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 28px;
    text-align: center;
  }

  .section-description {
    font-size: 14px;
    text-align: center;
  }

  .service-card {
    margin-bottom: 1rem;
  }
}
</style>
