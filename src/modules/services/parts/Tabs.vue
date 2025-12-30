<template>
  <v-container fluid class="tabs-section py-12">
    <v-container fluid class="px-4 px-md-16">
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
          <TabChild
            :title="naturalesData.title"
            :description="naturalesData.description"
            :services="naturalesData.services"
            @service-click="handleServiceClick"
          />
        </v-tabs-window-item>

        <!-- Personas Jurídicas -->
        <v-tabs-window-item value="juridicas">
          <TabChild
            :title="juridicasData.title"
            :description="juridicasData.description"
            :services="juridicasData.services"
            @service-click="handleServiceClick"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import TabChild from './partials/TabChild.vue'

const emit = defineEmits(['tab-change', 'service-click'])

const tab = ref('naturales')

// Emitir cambios de tab al padre
watch(tab, (newTab) => {
  emit('tab-change', newTab)
})

// Manejar click en servicios
const handleServiceClick = (serviceCode, serviceData) => {
  emit('service-click', serviceCode, serviceData)
}

const naturalesData = {
  title: 'Tu protección en <br><b class="text-black">cada área</b>',
  description: 'Ofrecemos un enfoque integral en múltiples áreas del Derecho. Nuestro objetivo es brindarte una protección completa y soluciones efectivas para cada una de tus necesidades legales.',
  services: [
    {
      code: 'propiedad_intelectual',
      icon: '💡',
      title: 'Propiedad Intelectual',
      description: 'Protección de marcas, patentes y derechos de autor.'
    },
    {
      code: 'derecho_procesal',
      icon: '🔧',
      title: 'Derecho Procesal',
      description: 'Estrategias judiciales y control de plazos.'
    },
    {
      code: 'violencia_de_genero',
      icon: '❤️',
      title: 'Violencia de Género',
      description: 'Asistencia urgente y medidas de protección.'
    },
    {
      code: 'derecho_civil',
      icon: '⚖️',
      title: 'Derecho Civil',
      description: 'Contratos, daños, sucesiones y responsabilidad civil.'
    },
    {
      code: 'energia_petroleo_gas',
      icon: '🏭',
      title: 'Energía, Petróleo y Gas',
      description: 'Asesoría en licencias, contratos y regulaciones del sector.'
    },
    {
      code: 'asesoria_fiscal_tributaria',
      icon: '🧾',
      title: 'Asesoría Fiscal y Tributaria',
      description: 'Planificación fiscal y defensa ante litigios.'
    }
  ]
}

const juridicasData = {
  title: 'Protegemos <br><b class="text-black">tu empresa</b> en cada paso',
  description: 'Desde contratos hasta cumplimiento normativo, contamos con abogados especializados para proteger tu empresa.',
  services: [
    {
      code: 'propiedad_intelectual_empresas',
      icon: '💡',
      title: 'Propiedad Intelectual',
      description: 'Protección de marcas, patentes y derechos de autor.'
    },
    {
      code: 'derecho_procesal_empresas',
      icon: '🔧',
      title: 'Derecho Procesal',
      description: 'Estrategias judiciales y control de plazos.'
    },
    {
      code: 'violencia_de_genero_empresas',
      icon: '❤️',
      title: 'Violencia de Género',
      description: 'Asistencia urgente y medidas de protección.'
    },
    {
      code: 'derecho_civil_empresas',
      icon: '⚖️',
      title: 'Derecho Civil',
      description: 'Contratos, daños, sucesiones y responsabilidad civil.'
    },
    {
      code: 'energia_petroleo_gas_empresas',
      icon: '🏭',
      title: 'Energía, Petróleo y Gas',
      description: 'Asesoría en licencias, contratos y regulaciones del sector.'
    },
    {
      code: 'asesoria_fiscal_tributaria_empresas',
      icon: '🧾',
      title: 'Asesoría Fiscal y Tributaria',
      description: 'Planificación fiscal y defensa ante litigios.'
    }
  ]
}
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

/* Responsive */
@media (max-width: 960px) {
  .tab-item {
    font-size: 20px;
    min-width: 150px;
  }
}

@media (max-width: 600px) {
  .tab-item {
    font-size: 20px;
    min-width: 120px;
  }
}
</style>
