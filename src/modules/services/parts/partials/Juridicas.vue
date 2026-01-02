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
      <v-row class="mt-8 d-none d-md-flex">
        <v-col 
          v-for="(course, index) in courses" 
          :key="index"
          cols="12" 
          md="3"
          class="d-flex"
        >
          <v-card class="course-card" elevation="4" hover>
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
        </v-col>
      </v-row>

      <!-- Carrusel de Formación - Mobile -->
      <div class="mt-8 d-md-none courses-carousel-wrapper">
        <v-carousel
          v-model="currentSlide"
          :show-arrows="false"
          :hide-delimiters="true"
          height="auto"
          class="courses-carousel"
        >
          <v-carousel-item
            v-for="(course, index) in courses"
            :key="index"
          >
            <div class="d-flex justify-center pa-2">
              <v-card class="course-card course-card-mobile" elevation="4">
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
          </v-carousel-item>
        </v-carousel>
        <!-- Flechas personalizadas fuera del contenido -->
        <v-btn
          icon
          variant="text"
          class="carousel-arrow carousel-arrow-prev"
          @click="previousSlide"
        >
          <v-icon size="24">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="text"
          class="carousel-arrow carousel-arrow-next"
          @click="nextSlide"
        >
          <v-icon size="24">mdi-chevron-right</v-icon>
        </v-btn>
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
import { useWhatsApp } from '@/composables/useWhatsApp'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const currentSlide = ref(0)

const { openWhatsApp } = useWhatsApp()

function handleWhatsAppClick() {
  openWhatsApp('Hola, represento una empresa y me interesa solicitar una cotización para servicios legales empresariales y programas de formación.')
}

function previousSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = courses.value.length - 1
  }
}

function nextSlide() {
  if (currentSlide.value < courses.value.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
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

/* Tarjetas de Cursos */
.course-card {
  border-radius: 16px;
  background-color: #FFFFFF;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #E5E7EB;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12) !important;
}

.course-card-mobile {
  max-width: 300px;
  width: 100%;
}

.courses-carousel-wrapper {
  position: relative;
  padding: 0 40px;
}

.courses-carousel {
  padding-bottom: 0;
}

.courses-carousel :deep(.v-carousel__controls) {
  display: none;
}

.courses-carousel :deep(.v-carousel__item) {
  padding: 8px;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7) !important;
  box-shadow: none !important;
  color: #6B7280 !important;
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
  border-radius: 0 !important;
  opacity: 0.6;
}

.carousel-arrow:hover {
  background-color: rgba(255, 255, 255, 0.9) !important;
  color: #1E2761 !important;
  opacity: 1;
}

.carousel-arrow-prev {
  left: 0;
}

.carousel-arrow-next {
  right: 0;
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

.course-card:hover .course-icon {
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

  .course-card {
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
</style>
