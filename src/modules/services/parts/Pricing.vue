<template>
  <v-container fluid class="pricing-section py-16">
    <v-container fluid class="px-4 px-md-16">
      <!-- Contenido condicional basado en el tab seleccionado -->
      <v-row v-if="selectedTab === 'naturales'" class="align-center">
        <!-- Texto izquierdo -->
        <v-col cols="12" md="6" class="d-flex flex-column justify-center pr-8">
          <h2 class="pricing-main-title">
            Conoce nuestras <span class="text-bold">tarifas claras</span>, y enfócate en lo que importa: <br></br><span class="text-brown">tu tranquilidad legal.</span>
          </h2>
        </v-col>

        <!-- Tarjetas de precios derecha -->
        <v-col cols="12" md="6">
          <v-row class="d-flex align-center">
            <!-- Tarjeta 1: Asesoría Integral -->
            <PricingCard
              title="Asesoría Integral"
              subtitle="Tu tranquilidad legal garantizada."
              price="$80"
              price-unit="por hora"
              :features="integralFeatures"
              button-text="Contratar Ahora"
              button-class="black-button"
              icon-type="shield"
              check-icon-class="yellow-check"
              :show-badge="true"
              badge-text="Más Popular"
              :size="integralCardSize"
            />

            <!-- Tarjeta 2: Asesoría Especializada -->
            <PricingCard
              title="Asesoría especializada"
              subtitle="Soluciones hechas a tu medida."
              plan="Planes personalizados por caso"
              :features="specializedFeatures"
              button-text="Solicitar cotización"
              button-class="dark-button"
              icon-type="building"
              check-icon-class="green-check"
              :size="specializedCardSize"
            />
          </v-row>
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
import { useDisplay } from 'vuetify'
import PricingCard from './partials/PricingCard.vue'

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
    default: 'naturales'
  }
})

// Usar el helper de breakpoints de Vuetify
const { mobile } = useDisplay()

// Computed properties para determinar el size basado en el breakpoint
const integralCardSize = computed(() => mobile.value ? 'big' : 'big')
const specializedCardSize = computed(() => 'small')

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

// Datos para las características de las tarjetas
const integralFeatures = [
  '1 hora de atención con un abogado especialista',
  'Modalidad presencial o en línea',
  'Revisión de contratos o documentos',
  'Recomendaciones prácticas y claras'
]

const specializedFeatures = [
  'Asesoría legal estratégica y acompañamiento permanente',
  'Gestión integral de contratos y documentos legales',
  'Consultas ilimitadas'
]

// Computed para debug (opcional)
const debugInfo = computed(() => {
  return `Tab actual: ${props.selectedTab}`
})
</script>

<style scoped>
.pricing-section {
  background-color: #FFFFFF;
}

/* Título principal izquierdo */
.pricing-main-title {
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1.3;
  color: #000000;
}

.text-bold {
  font-weight: 700;
  color: #000000;
}

.text-brown {
  font-weight: 700;
  color: #63071E !important;
}

/* Responsive - Mobile */
@media (max-width: 960px) {
  .pricing-main-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 2rem;
  }
}

@media (max-width: 600px) {
  .pricing-main-title {
    font-size: 24px;
    text-align: center;
  }
}
</style>
