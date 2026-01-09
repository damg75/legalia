<template>
  <v-container fluid class="about-us-section py-12">
    <v-container class="px-4 px-md-8">
      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center justify-center">
          <div class="about-title-wrapper">
            <h1 class="about-main-title">
              Legalia: <span class="text-wine">sobre nosotros</span>
            </h1>
          </div>
          <div class="about-underline mt-2"></div>
        </v-col>
      </v-row>
      <!-- About Content -->
      <v-row class="justify-center mt-8">
        <v-col cols="12" md="12" lg="12">
          <div class="about-content">
            <div v-for="(paragraph, index) in paragraphs" :key="index" class="about-paragraph mb-6"
              v-html="paragraph" />
          </div>
        </v-col>
      </v-row>
      <!-- team`` -->
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <h1 class="text-wine text-center" style="font-size: 36px; font-weight: 700; line-height: 1.2;">
            Conoce a nuestro equipo de asesores y asesoras legales
          </h1>
        </v-col>
      </v-row>
      <!-- Carousel -->
      <v-row class="mt-8">
        <v-col cols="12">
          <div class="carousel-wrapper">
            <button class="carousel-nav-btn carousel-prev" @click="carouselRef?.prev()" aria-label="Anterior">
              <v-icon size="40" color="#9CA3AF">mdi-chevron-left</v-icon>
            </button>
            <div class="carousel-container">
              <SimpleCarousel
                ref="carouselRef"
                :items="teamMembersRef"
                :items-per-page="itemsPerPage"
                class="team-carousel"
              >
                <template #default="{ items }">
                  <v-row class="py-4 carousel-row" justify="center">
                    <v-col
                      v-for="member in items"
                      :key="member.id"
                      cols="12"
                      md="4"
                      class="d-flex justify-center"
                    >
                      <TeamMemberCard :member="member" @header-click="handleMemberHeaderClick" />
                    </v-col>
                  </v-row>
                </template>
              </SimpleCarousel>
            </div>
            <button class="carousel-nav-btn carousel-next" @click="carouselRef?.next()" aria-label="Siguiente">
              <v-icon size="40" color="#9CA3AF">mdi-chevron-right</v-icon>
            </button>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-16"></v-divider>

      <!-- Quote Section -->
      <v-row class="quote-section justify-center">
        <v-col cols="12" md="10" lg="8">
          <div class="quote-wrapper">
            <!-- Opening Quote -->
            <v-img
              src="@/modules/about-us/assets/cita.svg"
              class="quote-mark quote-left"
              :width="quoteSize"
              :height="quoteSize"
            />
            
            <!-- Quote Text -->
            <p class="quote-text">
              En Legalia, acercamos el acceso a la justicia a todas las personas y empresas, 
              ofreciendo servicios integrales, accesibles y transparentes.
            </p>
            
            <!-- Closing Quote -->
            <v-img
              src="@/modules/about-us/assets/cita.svg"
              class="quote-mark quote-right"
              :width="quoteSize"
              :height="quoteSize"
            />
          </div>
        </v-col>
      </v-row>

    </v-container>

    <!-- Modal del miembro del equipo -->
    <BaseModal
      v-model="isMemberModalOpen"
      :dismissable="true"
      :closeable="!mobile"
      :persistent="false"
      max-width="80%"
      @close="closeMemberModal"
      @update:modelValue="(value) => { if (!value) closeMemberModal() }"
    >
      <TeamMemberModal :member="selectedMember" />
    </BaseModal>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import TeamMemberCard from './parts/TeamMemberCard.vue'
import TeamMemberModal from './parts/TeamMemberModal.vue'
import BaseModal from '@/components/BaseModal.vue'
import SimpleCarousel from '@/components/SimpleCarousel.vue'
import { teamMembers } from './data/teamMembers.js'
import { useTeamMember } from './composables/useTeamMember.js'

const display = useDisplay()
const mobile = computed(() => display.smAndDown.value)
const carouselRef = ref(null)

// Items por página según el dispositivo
const itemsPerPage = computed(() => mobile.value ? 1 : 3)

// Composable para manejar el modal del miembro
const {
  isMemberModalOpen,
  selectedMember,
  handleMemberHeaderClick,
  closeMemberModal
} = useTeamMember()

// Tamaño responsive para las comillas
const quoteSize = computed(() => {
  if (display.xs.value) return 100
  if (display.smAndDown.value) return 150
  return 200
})

const paragraphs = ref([
  'En Legalia somos un equipo de profesionales especializados en el área legal, comprometidos en ofrecer una orientación <strong>efectiva, clara y personalizada</strong> desde el primer contacto.',

  'Todo comienza con una <strong>entrevista de 1 hora</strong>, presencial u online (al mismo precio), en la que escuchamos tu historia, realizamos preguntas clave y revisamos la documentación necesaria. Con esta información, analizamos tu caso y te conectamos con el <strong>abogado especialista que realmente necesitas</strong>, sin ningún coste adicional por esta primera reunión.',

  'Nuestro compromiso es <strong>brindarte soluciones legales efectivas a precios razonables</strong>. Calculamos de forma transparente los honorarios del abogado y los trámites requeridos para presentarte una propuesta <strong>clara, final y sin sorpresas</strong>, que incluye nuestra comisión.',

  'En Legalia centralizamos todo el proceso: tú realizas el pago directamente a nosotros y nosotros nos encargamos del resto. Además, si surge cualquier inconveniente con el abogado, <strong>estamos siempre de tu lado para resolverlo.</strong>',

  'Nuestra misión es abrirte las puertas a una asesoría legal accesible, confiable y eficiente, donde incluso puedes proponer al abogado de tu preferencia.'
])

// Usar los datos de teamMembers desde el archivo externo
const teamMembersRef = ref(teamMembers)
</script>

<style scoped>
.about-us-section {
  background-color: #FFFFFF !important;
}

.about-title-wrapper {
  text-align: center;
  position: relative;
  display: inline-block;
}

.about-main-title {
  font-family: 'Poppins', sans-serif;
  font-size: 64px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.text-wine {
  font-weight: 700;
  color: #63071E;
}

.about-underline {
  width: 120px;
  height: 4px;
  background-color: #FBBF24;
}

.about-content {
  width: 100%;
}

.about-paragraph {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.8;
  text-align: justify;
}

.about-paragraph :deep(strong) {
  font-weight: 700;
}

/* Team Carousel Styles */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.carousel-container {
  position: relative;
  flex: 1;
  overflow: visible;
}

.carousel-row {
  padding-left: 0;
  padding-right: 0;
}

.team-carousel {
  margin: 0 auto;
  overflow: visible !important;
  position: relative;
  width: 100%;
}

.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
}

.carousel-prev {
  left: -50px;
}

.carousel-next {
  right: -50px;
}


/* Quote Section Styles */
.quote-section {
  margin: 80px 0;
}

.quote-wrapper {
  position: relative;
  padding: 40px 80px;
}

.quote-mark {
  position: absolute;
  opacity: 0.6;
  user-select: none;
}

.quote-left {
  top: -40px;
  left: 0;
}

.quote-right {
  bottom: -40px;
  right: 0;
  transform: rotate(180deg);
}

.quote-text {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #1E2761;
  line-height: 1.4;
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0;
}

/* Responsive */
@media (max-width: 960px) {
  .about-main-title {
    font-size: 48px;
  }

  .about-underline {
    width: 100px;
  }

  .about-paragraph {
    font-size: 16px;
  }

  .carousel-wrapper {
    padding: 0 50px;
  }

  .carousel-prev {
    left: 0px;
  }

  .carousel-next {
    right: 0px;
  }

  .carousel-nav-btn :deep(.v-icon) {
    font-size: 32px !important;
  }

  .quote-section {
    margin: 60px 0;
  }

  .quote-wrapper {
    padding: 30px 60px;
  }

  .quote-left {
    top: -30px;
    left: -10px;
  }

  .quote-right {
    bottom: -30px;
    right: -10px;
  }

  .quote-text {
    font-size: 24px;
    line-height: 1.5;
  }
}

@media (max-width: 600px) {
  .about-main-title {
    font-size: 32px;
  }

  .about-underline {
    width: 80px;
    height: 3px;
  }

  .about-paragraph {
    font-size: 15px;
    text-align: left;
  }

  .carousel-wrapper {
    padding: 0 40px;
  }

  .carousel-prev {
    left: -5px;
  }

  .carousel-next {
    right: -5px;
  }

  .carousel-nav-btn :deep(.v-icon) {
    font-size: 28px !important;
  }


  .quote-section {
    margin: 40px 0;
  }

  .quote-wrapper {
    padding: 20px 30px;
  }

  .quote-left {
    top: -20px;
    left: -5px;
  }

  .quote-right {
    bottom: -20px;
    right: -5px;
  }

  .quote-text {
    font-size: 18px;
    line-height: 1.6;
  }
}
</style>
