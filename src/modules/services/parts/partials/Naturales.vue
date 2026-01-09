<template>
  <v-container fluid class=" py-md-12">
    <v-container class="px-4 px-md-8">
      <div class="naturales-content d-flex flex-column align-center justify-center mb-8">
        <div class="naturales-title">¿Necesitas asesoría personalizada?</div>
        <div class="naturales-subtitle">
          Ofrecemos planes personalizados según tus necesidades específicas.<br>
          Contáctanos para una propuesta a tu medida.
        </div>
      </div>

      <v-row class="justify-center">
        <v-col 
          cols="12" 
          md="4" 
          v-for="(point, index) in points" 
          :key="point.title" 
          class="d-flex justify-center"
          v-intersect="pointAnimations[index].intersectOptions"
          :class="pointAnimations[index].animationClass()"
          :style="pointAnimations[index].animationStyle"
        >
          <div class="naturales-point">
            <div class="naturales-point-icon-wrapper">
              <div class="naturales-point-icon" :style="{ backgroundColor: point.iconBgColor }">
                <v-icon :icon="point.iconName" :color="point.iconColor" size="32" />
              </div>
            </div>
            <div class="naturales-point-title">{{ point.title }}</div>
            <br v-if="(!mobile && index !== 1)">
            <div class="naturales-point-description">{{ point.description }}</div>
          </div>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn class="naturales-button-text" color="#63071E" height="52" rounded="lg" elevation="2"
            width="250" @click="handleWhatsAppClick">Solicitar
            cotización <v-icon size="" class="ml-2">mdi-arrow-right</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useWhatsApp } from '@/composables/useWhatsApp'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { mobile } = useDisplay()
const { openWhatsApp } = useWhatsApp()

// Offset responsive
const animationOffset = mobile.value ? '-50px' : '-150px'

// Animaciones staggered para los 3 points - solo entrada
const pointAnimations = [
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 0, once: true, threshold: 0.1, offset: animationOffset }),
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 150, once: true, threshold: 0.1, offset: animationOffset }),
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 300, once: true, threshold: 0.1, offset: animationOffset })
]

const handleWhatsAppClick = () => {
  openWhatsApp('Hola, soy una persona natural y me interesa solicitar una cotización para servicios legales personalizados.')
}

const points = ref([
  {
    iconName: 'mdi-clock-outline',
    iconColor: '#3B82F6',
    iconBgColor: '#DBEAFE',
    title: 'Respuesta Rápida',
    description: 'Atendemos tu consulta en menos de 24 horas'
  },
  {
    iconName: 'mdi-scale-balance',
    iconColor: '#000000',
    iconBgColor: '#E5E7EB',
    title: 'Abogadas y abogados certificados',
    description: 'Más de 20 años de experiencia legal'
  },
  {
    iconName: 'mdi-shield-check',
    iconColor: '#EF4444',
    iconBgColor: '#FEE2E2',
    title: 'Garantía Total',
    description: 'Tu satisfacción es nuestra estándar'
  }
])
</script>

<style scoped lang="scss">
.naturales-button-text {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 12px;
  height: 52px;
  box-shadow: none !important;
}

.naturales {
  &-wrapper {
    background-color: #FFFFFF;
  }

  &-content {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }

  &-title {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  &-subtitle {
    font-family: 'Poppins', sans-serif;
    color: #4B5563;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
  }

  &-point {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    max-width: 320px;
    width: 100%;

    &-icon-wrapper {
      margin-bottom: 1.5rem;
    }

    &-icon {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-title {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    &-description {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: #6B7280;
      line-height: 1.5;
    }
  }
}

/* Responsive - Mobile */
@media (max-width: 960px) {
  .naturales {
    &-title {
      font-size: 32px;
    }

    &-subtitle {
      font-size: 16px;
    }

    &-point {
      margin-bottom: 1rem;
      padding: 1rem;

      &-icon {
        width: 64px;
        height: 64px;
      }

      &-title {
        font-size: 16px;
      }

      &-description {
        font-size: 13px;
      }
    }
  }
}

@media (max-width: 600px) {
  .naturales {
    &-title {
      font-size: 24px;
    }

    &-subtitle {
      font-size: 14px;
    }
  }
}
</style>
