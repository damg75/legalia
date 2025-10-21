<template>
  <v-container fluid class="tabs-section py-12">
    <v-container fluid class="px-16">
      <v-tabs v-model="tab" align-tabs="center" color="primary-dark" class="custom-tabs mb-8 pa-0">
        <v-tab value="naturales" class="tab-item">
          Personas naturales
        </v-tab>
        <v-tab value="juridicas" class="tab-item">
          Personas jurídicas
        </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab" class="mx-0 px-0">
        <!-- Personas Naturales -->
        <v-tabs-window-item value="naturales">
          <v-container fluid class="px-0">
            <v-row>
              <!-- Título y descripción -->
              <v-col cols="12" md="5" lg="4" class="d-flex flex-column justify-start">
                <h2 class="section-title">
                  Tu protección en <br>
                  <b class="text-black">cada área</b>
                </h2>
                <p class="section-description mt-10">
                  Ofrecemos un enfoque integral en múltiples áreas del Derecho. Nuestro objetivo es brindarte una
                  protección completa y soluciones efectivas para cada una de tus necesidades legales.
                </p>
              </v-col>

              <!-- Tarjetas de servicios -->
              <v-col cols="12" md="7" lg="8" class="">
                <!-- Desktop: Grid normal -->
                <v-row class="d-none d-md-flex">
                  <v-col v-for="service in naturalesServices" :key="service.title" cols="12" sm="6" lg="4">
                    <v-card class="service-card" elevation="3">
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
                  <v-slide-group-item v-for="service in naturalesServices" :key="service.title" class="">
                    <v-card class="service-card ma-2" elevation="3" width="280">
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
          </v-container>
        </v-tabs-window-item>

        <!-- Personas Jurídicas (placeholder por ahora) -->
        <v-tabs-window-item value="juridicas">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12" class="text-center py-12">
                <p class="text-h6 text-grey">Contenido de Personas Jurídicas próximamente</p>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['tab-change'])

const tab = ref('naturales')

// Emitir cambios de tab al padre
watch(tab, (newTab) => {
  emit('tab-change', newTab)
})

const naturalesServices = [
  {
    icon: '💡',
    title: 'Propiedad Intelectual',
    description: 'Protección de marcas, patentes y derechos de autor.'
  },
  {
    icon: '🔧',
    title: 'Derecho Procesal',
    description: 'Estrategias judiciales y control de plazos.'
  },
  {
    icon: '❤️',
    title: 'Violencia de Género',
    description: 'Asistencia urgente y medidas de protección.'
  },
  {
    icon: '⚖️',
    title: 'Derecho Civil',
    description: 'Contratos, daños, sucesiones y responsabilidad civil.'
  },
  {
    icon: '🏭',
    title: 'Energía, Petróleo y Gas',
    description: 'Asesoría en licencias, contratos y regulaciones del sector.'
  },
  {
    icon: '🧾',
    title: 'Asesoría Fiscal y Tributaria',
    description: 'Planificación fiscal y defensa ante litigios.'
  }
]
</script>

<style scoped>
.tabs-section {
  background-color: #F8F7FA;
}

/* Tabs personalizados */
.custom-tabs {
  margin-bottom: 2rem;
}

.tab-item {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #717680 !important;
  min-width: 200px;
  text-transform: none;
}

.tab-item.v-tab--selected {
  color: #000000 !important;
}

/* Subrayado del tab activo */
:deep(.v-tabs-slider) {
  background-color: #000000;
  height: 3px;
}

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

  .tab-item {
    font-size: 16px;
    min-width: 150px;
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

  .tab-item {
    font-size: 14px;
    min-width: 120px;
  }

  .service-card {
    margin-bottom: 1rem;
  }
}
</style>
