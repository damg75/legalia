<template>
  <v-container fluid class="pricing-section py-16">
    <v-container fluid class="px-4 px-md-16 d-none">
      <!-- Contenido condicional basado en el tab seleccionado -->
      <v-row v-if="selectedTab === 'naturales'" class="align-center">
        <!-- Texto izquierdo -->
        <v-col cols="12" md="4" class="d-flex flex-column justify-center pr-8">
          <h2 class="pricing-main-title">
            Conoce nuestras <span class="text-bold">tarifas claras</span>, y enfócate en lo que importa: <span class="text-brown">tu tranquilidad legal.</span>
          </h2>
        </v-col>

        <!-- Tarjetas de precios derecha -->
        <v-col cols="12" md="8">
          <v-row>
            <!-- Tarjeta 1: Asesoría Integral -->
            <v-col cols="12" md="6">
              <div class="pricing-card-wrapper">
                <!-- Badge Más Popular - Arriba y centrado -->
                <div class="popular-badge-wrapper">
                  <div class="popular-badge">
                    <span class="badge-text">Más Popular</span>
                  </div>
                </div>
                
                <v-card class="pricing-card" elevation="2">
                  <v-card-text class="pa-8">
                    <!-- Icono -->
                    <div class="card-icon-wrapper mb-4">
                      <div class="card-icon shield-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0L2 3V8.5C2 13.29 5.38 17.62 10 18.5C14.62 17.62 18 13.29 18 8.5V3L10 0Z"/>
                        </svg>
                      </div>
                    </div>
                  
                  <h3 class="card-title mb-2">Asesoría Integral</h3>
                  <p class="card-subtitle mb-4">Tu tranquilidad legal garantizada.</p>
                  
                  <div class="price-section mb-4">
                    <div class="price-amount">$80</div>
                    <div class="price-unit">por hora</div>
                  </div>
                  
                  <div class="features-list mb-6">
                    <div class="feature-item" v-for="(feature, index) in integralFeatures" :key="index">
                      <div class="check-icon yellow-check">✓</div>
                      <span class="feature-text">{{ feature }}</span>
                    </div>
                  </div>
                  
                  <v-btn class="action-button black-button" block>
                    Contratar Ahora
                  </v-btn>
                </v-card-text>
              </v-card>
              </div>
            </v-col>

            <!-- Tarjeta 2: Asesoría Especializada -->
            <v-col cols="12" md="6">
              <v-card class="pricing-card" elevation="2">
                <v-card-text class="pa-8">
                  <!-- Icono -->
                  <div class="card-icon-wrapper mb-4">
                    <div class="card-icon building-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 1H11V3H13V19H17V3H19V21H1V3H3V1ZM5 3V5H7V3H5ZM5 7V9H7V7H5ZM5 11V13H7V11H5ZM5 15V17H7V15H5ZM9 3V5H11V3H9ZM9 7V9H11V7H9ZM9 11V13H11V11H9ZM9 15V17H11V15H9Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 class="card-title mb-2">Asesoría especializada</h3>
                  <p class="card-subtitle mb-2">Soluciones hechas a tu medida.</p>
                  <p class="card-plan mb-4">Planes personalizados por caso</p>
                  
                  <div class="features-list mb-6">
                    <div class="feature-item" v-for="(feature, index) in specializedFeatures" :key="index">
                      <div class="check-icon green-check">✓</div>
                      <span class="feature-text">{{ feature }}</span>
                    </div>
                  </div>
                  
                  <v-btn class="action-button dark-button" block>
                    Solicitar cotización
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
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
  color: #5F6979;
}

.text-bold {
  font-weight: 700;
  color: #000000;
}

.text-brown {
  font-weight: 700;
  color: #8B4513;
}

/* Wrapper para la tarjeta con badge */
.pricing-card-wrapper {
  position: relative;
  padding-top: 20px;
  height: 100%;
}

/* Badge "Más Popular" - Arriba y centrado */
.popular-badge-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.popular-badge {
  display: inline-block;
  background-color: #FBBF24;
  border-radius: 20px;
  padding: 8px 20px;
}

.badge-text {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #000000;
}

/* Tarjetas de precios */
.pricing-card {
  border-radius: 24px;
  background-color: #FFFFFF;
  height: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
}

/* Iconos de las tarjetas */
.card-icon-wrapper {
  display: flex;
  align-items: flex-start;
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shield-icon {
  background-color: #7C2D12;
}

.building-icon {
  background-color: #4B5563;
}

/* Títulos y textos de las tarjetas */
.card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  line-height: 1.2;
}

.card-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #6B7280;
  line-height: 1.4;
}

.card-plan {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
}

/* Precio */
.price-section {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.price-amount {
  font-family: 'Poppins', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: #000000;
  line-height: 1;
}

.price-unit {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #6B7280;
  margin-top: 4px;
}

/* Lista de características */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.check-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  margin-top: 2px;
}

.yellow-check {
  background-color: #FBBF24;
  color: #000000;
}

.green-check {
  background-color: #10B981;
  color: #FFFFFF;
}

.feature-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #374151;
  line-height: 1.5;
}

/* Botones */
.action-button {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 12px;
  height: 52px;
  box-shadow: none !important;
}

.black-button {
  background-color: #000000 !important;
  color: #FFFFFF !important;
}

.dark-button {
  background-color: #1F2937 !important;
  color: #FFFFFF !important;
}

/* Responsive - Mobile */
@media (max-width: 960px) {
  .pricing-main-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .card-title {
    font-size: 20px;
  }
  
  .price-amount {
    font-size: 48px;
  }
  
  .pricing-card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 600px) {
  .pricing-main-title {
    font-size: 24px;
    text-align: center;
  }
  
  .card-title {
    font-size: 18px;
  }
  
  .card-subtitle,
  .card-plan,
  .price-unit {
    font-size: 14px;
  }
  
  .price-amount {
    font-size: 40px;
  }
  
  .feature-text {
    font-size: 13px;
  }
  
  .action-button {
    font-size: 14px;
    height: 48px;
  }
  
  .card-icon {
    width: 48px;
    height: 48px;
  }
  
  .popular-badge {
    padding: 5px 12px;
  }
  
  .badge-text {
    font-size: 12px;
  }
}
</style>
