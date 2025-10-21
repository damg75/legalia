<template>
  <v-container fluid class="pricing-section py-12">
    <v-container fluid class="px-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="pricing-title">
            {{ getPricingTitle() }}
          </h2>
          <p class="pricing-subtitle mt-4">
            {{ getPricingSubtitle() }}
          </p>
        </v-col>
      </v-row>

      <!-- Contenido condicional basado en el tab seleccionado -->
      <v-row v-if="selectedTab === 'naturales'">
        <v-col cols="12">
          <div class="pricing-content">
            <h3 class="content-title">Precios para Personas Naturales</h3>
            <p class="content-description">
              Aquí se mostrará el contenido específico de precios para personas naturales.
              Este contenido cambiará dinámicamente según el tab seleccionado.
            </p>
            <!-- Aquí puedes agregar más contenido específico para personas naturales -->
          </div>
        </v-col>
      </v-row>

      <v-row v-else-if="selectedTab === 'juridicas'">
        <v-col cols="12">
          <div class="pricing-content">
            <h3 class="content-title">Precios para Personas Jurídicas</h3>
            <p class="content-description">
              Aquí se mostrará el contenido específico de precios para personas jurídicas.
              Este contenido cambiará dinámicamente según el tab seleccionado.
            </p>
            <!-- Aquí puedes agregar más contenido específico para personas jurídicas -->
          </div>
        </v-col>
      </v-row>

      <!-- Contenido por defecto -->
      <v-row v-else>
        <v-col cols="12">
          <div class="pricing-content">
            <h3 class="content-title">Selecciona una opción</h3>
            <p class="content-description">
              Por favor selecciona entre Personas Naturales o Personas Jurídicas para ver los precios correspondientes.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
    default: 'naturales'
  }
})

// Computed properties para títulos dinámicos
const getPricingTitle = () => {
  switch (props.selectedTab) {
    case 'naturales':
      return 'Precios para Personas Naturales'
    case 'juridicas':
      return 'Precios para Personas Jurídicas'
    default:
      return 'Nuestros Precios'
  }
}

const getPricingSubtitle = () => {
  switch (props.selectedTab) {
    case 'naturales':
      return 'Encuentra el plan perfecto para proteger tus derechos como persona natural'
    case 'juridicas':
      return 'Soluciones legales empresariales adaptadas a las necesidades de tu empresa'
    default:
      return 'Selecciona el tipo de servicio que necesitas'
  }
}

// Computed para debug (opcional)
const debugInfo = computed(() => {
  return `Tab actual: ${props.selectedTab}`
})
</script>

<style scoped>
.pricing-section {
  background-color: #F8F7FA;
}

.pricing-title {
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
}

.pricing-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #717680;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-content {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.content-title {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
}

.content-description {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #444B53;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 960px) {
  .pricing-title {
    font-size: 36px;
  }
  
  .pricing-subtitle {
    font-size: 18px;
  }
  
  .content-title {
    font-size: 28px;
  }
  
  .content-description {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .pricing-title {
    font-size: 28px;
  }
  
  .pricing-subtitle {
    font-size: 16px;
  }
  
  .content-title {
    font-size: 24px;
  }
  
  .content-description {
    font-size: 14px;
  }
  
  .pricing-content {
    padding: 1.5rem;
  }
}
</style>
