<template>
  <v-container fluid class="py-12">
    <v-container class="px-4 px-md-8">
      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center justify-center">
          <div class="juridicas-title-wrapper">
            <h2 class="juridicas-main-title">
              Legalia: <span class="text-blue-dark">Formación y Academia</span>
            </h2>
          </div>
          <div class="juridicas-underline mt-2"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center">
          <p class="juridicas-subtitle">
            En Legalia creemos que una empresa bien informada toma decisiones más seguras y estratégicas. Diseñamos
            programas de formación legal prácticos y adaptados a las áreas clave de tu negocio, combinando conocimiento
            jurídico con un enfoque orientado a la acción.
          </p>
        </v-col>
      </v-row>
      <!-- Tarjetas de Formación - Desktop -->
      <div v-if="mdAndUp" class="mt-8 formation-grid-desktop">
        <v-card 
          v-for="(course, index) in courses" 
          :key="'desktop-' + index"
          class="course-card-desktop" 
          elevation="4"
        >
          <v-card-text class="pa-6">
            <div class="course-icon-wrapper mb-4">
              <div class="course-icon" :style="{ backgroundColor: course.iconBg }">
                <v-icon :color="course.iconColor" size="24">{{ course.icon }}</v-icon>
              </div>
            </div>
            <h3 class="course-title mb-2">{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>
          </v-card-text>
        </v-card>
      </div>

      <!-- Slider de Formación - Mobile -->
      <div v-else class="mt-8 formation-slider-mobile">
        <HorizontalSlider item-width="260px" :gap="12" :padding="16">
          <v-card
            v-for="(course, index) in courses"
            :key="'mobile-' + index"
            class="course-card-mobile slider-item"
            elevation="3"
          >
            <v-card-text class="pa-6 d-flex flex-column" style="height: 100%;">
              <div class="course-icon-wrapper mb-4">
                <div class="course-icon" :style="{ backgroundColor: course.iconBg }">
                  <v-icon :color="course.iconColor" size="24">{{ course.icon }}</v-icon>
                </div>
              </div>
              <h3 class="course-title mb-2">{{ course.title }}</h3>
              <p class="course-description flex-grow-1">{{ course.description }}</p>
            </v-card-text>
          </v-card>
        </HorizontalSlider>
      </div>

      <!-- Botón -->
      <v-row class="mt-16">
        <v-col cols="12" class="d-flex justify-center">
          <v-btn class="juridicas-button" color="#1E2761" height="52" rounded="lg" elevation="2" width="250" @click="handleWhatsAppClick">
            Solicitar cotización
            <v-icon class="ml-2" size="20">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useWhatsApp } from '@/composables/useWhatsApp'
import HorizontalSlider from '@/components/HorizontalSlider.vue'

const { mdAndUp } = useDisplay()
const { openWhatsApp } = useWhatsApp()

function handleWhatsAppClick() {
  openWhatsApp('Hola, represento una empresa y me interesa solicitar una cotización para servicios legales empresariales y programas de formación.')
}


const courses = ref([
  {
    icon: 'mdi-robot',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'IA para la Gestión Legal y Empresarial',
    description: 'Herramientas inteligentes para automatizar tareas jurídicas y aumentar la eficiencia operativa.'
  },
  {
    icon: 'mdi-account-group',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Capacitación en Derecho Laboral',
    description: 'Normativa, relaciones laborales y resolución de conflictos.'
  },
  {
    icon: 'mdi-shield-check',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Contratación y Gestión de Riesgos',
    description: 'Talleres para prevenir y reducir riesgos legales.'
  },
  {
    icon: 'mdi-clipboard-check',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Cumplimiento Normativo',
    description: 'Formación para prevenir sanciones y optimizar procesos.'
  },
  {
    icon: 'mdi-lock',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Protección de Datos y Ciberseguridad',
    description: 'Seminarios adaptados a la normativa vigente.'
  },
  {
    icon: 'mdi-domain',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Constitución y Formalización',
    description: 'Asesoría completa desde la idea hasta la puesta en marcha.'
  },
  {
    icon: 'mdi-rocket-launch',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Cursos para Emprendedores',
    description: 'Constitución, obligaciones fiscales y mercantiles.'
  },
  {
    icon: 'mdi-tune',
    iconColor: '#1E3A8A',
    iconBg: '#DBEAFE',
    title: 'Programas a Medida',
    description: 'Formación adaptada a las necesidades de tu organización.'
  }
])
</script>

<style scoped>
.juridicas-title-wrapper {
  text-align: center;
  position: relative;
  display: inline-block;
}

.juridicas-main-title {
  font-family: 'Poppins', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.text-blue-dark {
  font-weight: 700;
  color: #1E2761;
}

.juridicas-subtitle {
  font-family: 'Poppins', sans-serif;
  color: #4B5563;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  max-width: 900px;
  margin: 1.5rem auto;
}

.juridicas-underline {
  width: 120px;
  height: 4px;
  background-color: #FBBF24;
}

.juridicas-button {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 12px;
  box-shadow: none !important;
}

/* Grid de Formación Desktop */
.formation-grid-desktop {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
}

/* Tarjetas de Cursos - Desktop */
.course-card-desktop {
  border-radius: 16px;
  background-color: #FFFFFF;
  height: 100%;
  width: 100%;
  border: 1px solid #E5E7EB;
  display: flex;
  flex-direction: column;
  cursor: default;
  transition: all 0.3s ease;
}

.course-card-desktop:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12) !important;
}

/* Tarjetas de Cursos - Mobile */
.course-card-mobile {
  border-radius: 16px;
  background-color: #FFFFFF;
  max-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 220px;
  border: 1px solid #E5E7EB;
  display: flex;
  flex-direction: column;
  cursor: default;
}


.course-icon-wrapper {
  display: flex;
  align-items: flex-start;
}

.course-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.course-card-desktop:hover .course-icon {
  transform: scale(1.1);
}

.course-title {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  line-height: 1.4;
  min-height: 44px;
}

.course-description {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
}

/* Responsive - Mobile */
@media (max-width: 960px) {
  .juridicas-main-title {
    font-size: 40px;
  }

  .juridicas-subtitle {
    font-size: 18px;
  }

  .juridicas-underline {
    width: 100px;
    left: 10%;
  }

  .course-title {
    font-size: 15px;
    min-height: 40px;
  }

  .course-description {
    font-size: 12px;
  }

  .course-icon {
    width: 44px;
    height: 44px;
  }

  .juridicas-button {
    width: 100% !important;
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .juridicas-main-title {
    font-size: 28px;
  }

  .juridicas-subtitle {
    font-size: 16px;
  }

  .juridicas-underline {
    width: 80px;
    height: 3px;
    left: 8%;
  }

  .course-card-mobile {
    border-radius: 12px;
  }

  .course-title {
    font-size: 14px;
    min-height: 36px;
  }

  .course-description {
    font-size: 11px;
  }

  .course-icon {
    width: 40px;
    height: 40px;
  }

  .juridicas-button {
    width: 100% !important;
    font-size: 14px;
    height: 48px !important;
  }

}

/* Slider de formación en mobile - siempre aplica cuando se muestra */
.formation-slider-mobile {
  margin: 0 -8px;
  padding: 8px 0;
  
  :deep(.horizontal-slider-wrapper) {
    overflow: visible;
  }
  
  :deep(.horizontal-slider) {
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: stretch;
  }
  
  :deep(.slider-item) {
    min-height: 220px;
  }
  
  .course-card-mobile {
    height: 100% !important;
    
    .v-card-text {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .course-description {
      flex-grow: 1;
    }
  }
}

/* Pantallas de ~410px */
@media (max-width: 430px) {
  .formation-slider-mobile :deep(.slider-item) {
    flex: 0 0 240px !important;
    max-width: 240px !important;
    min-width: 240px !important;
    min-height: 220px !important;
  }
  
  .formation-slider-mobile .course-card-mobile {
    min-height: 220px !important;
  }
}

/* Pantallas de ~360px */
@media (max-width: 380px) {
  .formation-slider-mobile :deep(.slider-item) {
    flex: 0 0 220px !important;
    max-width: 220px !important;
    min-width: 220px !important;
    min-height: 220px !important;
  }
  
  .formation-slider-mobile .course-card-mobile {
    min-height: 220px !important;
  }
  
  .formation-slider-mobile :deep(.horizontal-slider) {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}
</style>
