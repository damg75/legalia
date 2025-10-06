<template>
  <v-container fluid class="services-section py-16">
    <!-- Título principal -->
    <v-row class="justify-center mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="services-title mb-4">
          Elige el servicio legal que se <span class="font-weight-bold">adapte a ti.</span>
        </h2>
        <p class="services-subtitle">
          Selecciona la opción que mejor se adapte a tu situación y descubre 
          cómo podemos ayudarte a resolver tus necesidades legales de 
          manera eficiente
        </p>
      </v-col>
    </v-row>

    <!-- Cards de servicios -->
    <v-row class="justify-center">
        <v-col 
          v-for="(service, index) in services" 
          :key="service.id"
          cols="12" 
          md="6" 
          lg="6"
          :class="[
            'd-flex mb-6',
            index === 0 ? 'justify-end justify-md-center' : 'justify-start justify-md-center'
          ]"
        >
        <v-card
          class="service-card"
          elevation="2"
          max-width="560"
          rounded="xl"
          height="auto"
        >
          <v-card-text class="pa-8">
            <!-- Icono -->
            <div class="text-center mb-6">
              <div class="service-icon-container">
                <v-icon
                  size="32"
                  :color="service.iconColor"
                >
                  {{ service.icon }}
                </v-icon>
              </div>
            </div>

            <!-- Título -->
            <h3 class="service-card-title text-center mb-6">{{ service.title }}</h3>

            <!-- Lista de servicios -->
            <v-list class="service-list pa-0">
              <v-list-item
                v-for="item in service.items"
                :key="item"
                class="service-list-item pa-0 mb-3"
              >
                <template v-slot:prepend>
                  <v-icon
                    size="16"
                    color="#10B981"
                    class="me-3"
                  >
                    mdi-check-circle
                  </v-icon>
                </template>
                <v-list-item-title class="service-item-text">
                  {{ item }}
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <!-- ¿Por qué elegirnos? -->
            <div class="why-choose-us mt-6 mb-6">
              <h4 class="why-title mb-3">¿Por qué elegirnos?</h4>
              <p class="why-description">{{ service.whyChoose }}</p>
            </div>

            <!-- Botón -->
            <v-btn
              :color="service.buttonColor"
              variant="flat"
              block
              rounded="lg"
              size="large"
              class="service-btn text-white font-weight-medium"
            >
              {{ service.buttonText }}
              <v-icon class="ms-2" size="20">mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Texto adicional -->
            <p class="additional-text text-center mt-4">{{ service.additionalText }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    icon: 'mdi-account-outline',
    iconColor: '#6B7280',
    title: 'Servicios para Personas',
    items: [
      'Contratos personales y defensa legal',
      'Asesoría en temas familiares y civiles, como divorcios y separaciones',
      'Herencias, sucesiones, reclamaciones y más',
      'Asistencia y representación en casos legales, incluyendo material penal y violencia de género'
    ],
    whyChoose: 'Atención ágil y sin trámites innecesarios, respuestas inmediatas y tarifas transparentes. Tu tranquilidad es nuestra prioridad.',
    buttonText: 'Explorar servicios personales',
    buttonColor: '#000000',
    additionalText: 'Consulta inicial por $80'
  },
  {
    id: 2,
    icon: 'mdi-office-building-outline',
    iconColor: '#6B7280',
    title: 'Servicios para Empresas',
    items: [
      'Constitución y registro empresarial. Contratos comerciales y laborales',
      'Cumplimiento normativo y nómina',
      'Protección de datos y propiedad intelectual',
      'Asistencia y representación en casos legales, incluyendo material penal'
    ],
    whyChoose: 'Soporte jurídico integral, tecnología avanzada y equipo especializado. Protegemos y hacemos posible tu negocio.',
    buttonText: 'Explorar servicios empresariales',
    buttonColor: '#000000',
    additionalText: 'Asesoría estratégica incluida • Planes escalables'
  }
])
</script>

<style scoped lang="scss">
.services-section {
  background: #FFFFFF;
  
  .services-title {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 400;
    color: #1F2937;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
    
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  
  .services-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #6B7280;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
}

.service-card {
  border: 1px solid #E5E7EB;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
  }
}

.service-icon-container {
  width: 64px;
  height: 64px;
  background: #F3F4F6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.service-card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1F2937;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.service-list {
  background: transparent !important;
}

.service-list-item {
  min-height: auto !important;
  
  .v-list-item__prepend {
    align-self: flex-start;
    margin-top: 2px;
  }
}

.service-item-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.5;
  white-space: normal;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
}

.why-choose-us {
  .why-title {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #1F2937;
  }
  
  .why-description {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #6B7280;
    line-height: 1.5;
    margin: 0;
  }
}

.service-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-transform: none;
  letter-spacing: normal;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
}

.additional-text {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9CA3AF;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
}
</style>
