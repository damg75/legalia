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
          <div class="carousel-container">
            <v-carousel
              hide-delimiters
              show-arrows="true"
              height="auto"
              class="team-carousel"
              crossfade
            >
              <v-carousel-item
                v-for="(chunk, chunkIndex) in chunkedMembers"
                :key="chunkIndex"
              >
                <v-row class="py-4 carousel-row" justify="center">
                  <v-col
                    v-for="member in chunk"
                    :key="member.id"
                    cols="12"
                    md="4"
                    class="d-flex justify-center"
                  >
                    <div class="team-card-wrapper">
                      <!-- Profile Image - Outside and on top -->
                      <div class="profile-image-container">
                        <v-img
                          v-if="member.profileUrl"
                          :src="member.profileUrl"
                          class="profile-image"
                          cover
                        />
                        <div v-else class="profile-placeholder">
                          <v-icon size="80" color="#9CA3AF">mdi-account-circle</v-icon>
                        </div>
                      </div>

                      <!-- Card Content -->
                      <v-card class="team-card" elevation="2">
                        <v-card-text class="team-card-content">
                          <!-- Member Info -->
                          <h3 class="member-name">{{ member.name }}</h3>
                          <p class="member-title">{{ member.title }}</p>
                          
                          <!-- Dashed Divider -->
                          <div class="dashed-divider"></div>
                          
                          <!-- Description -->
                          <p class="member-description">{{ member.description }}</p>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
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
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const mobile = computed(() => display.smAndDown.value)

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

const teamMembers = ref([
  {
    id: 'renee-moros-t',
    name: 'Renée Moros T.',
    title: 'Abogada Especialista en Ciencias Penales y Criminológicas',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad   de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de posgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Area de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'carlos-armando-armas-flores',
    name: 'Carlos Armando Armas Flores',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogado USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctorando en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'cruz-marcel-caraballo-espanol',
    name: 'Cruz Marcel Caraballo Español',
    title: 'Abogado de litigios penales.',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'alberto-ruiz-blanco',
    name: 'Alberto Ruiz Blanco',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'carlos-jose-serrano-diaz',
    name: 'Carlos José Serrano Díaz',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'jennifer-andreina-barreto-vargas',
    name: 'Jennifer Andreina Barreto Vargas',
    title: 'Abogado de litigios penales.',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'luz-veronica-canas-izaguirre',
    name: 'Luz Verónica Cañas Izaguirre',
    title: 'Abogada Especialista en Ciencias Penales y Criminológicas',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'ana-yoleida-pacheco',
    name: 'Ana Yoleida Pacheco',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'lizbeth-suegart-siverio',
    name: 'Lizbeth Suegart Siverio',
    title: 'Abogado de litigios penales.',
    profileUrl: '',
    description: 'Abogado USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad Central de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de postgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Área de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'ricardo-loreto-cardenas',
    name: 'Ricardo Loreto Cárdenas',
    title: 'Abogado Especialista en Derecho Civil, Mercantil y Corporativo.',
    profileUrl: '',
    description: 'Abogado egresado de la Universidad Santa María (2000), especialista en Derecho Privado, con más de veinte (20) años de experiencia profesional. Fue Abogado Auxiliar y relator en la Sala de Casación Civil del Tribunal Supremo de Justicia durante quince (15) años, donde participó en la revisión y establecimiento de criterios jurisprudenciales, y ejerció como Juez Superior Civil, Mercantil y de Tránsito en el Estado Miranda. En 2022 culminó el proceso de aspirante a Magistrado de la Sala de Casación Civil. Actualmente es Director y Socio de Loreto y Asociados, prestando asesoría en materia civil, mercantil, corporativa y litigios a importantes empresas y entidades financieras.'
  },
  {
    id: 'henry-gerardo-corredor-rivas',
    name: 'Henry Gerardo Corredor Rivas',
    title: 'Abogado Especialista en Derecho Penal y Procesal Penal',
    profileUrl: '',
    description: 'Abogado egresado de la Universidad de Los Andes (2001), con más de veinte (20) años de experiencia en el ejercicio libre de la profesión, actualmente cursando el último semestre de la Maestría en Derecho Penal y Criminología en la Universidad Bicentenaria de Aragua. Su práctica se centra en el Derecho Procesal Penal, habiendo atendido más de 1.200 causas y presentado veintiún (21) recursos de casación ante el Tribunal Supremo de Justicia. Cuenta además con experiencia en Derecho de Familia, Niños y Adolescentes, Derecho Civil y en la gestión de trámites notariales y registrales'
  }
])

// Agrupar miembros en chunks según el dispositivo
const chunkedMembers = computed(() => {
  const chunkSize = mobile.value ? 1 : 3
  const chunks = []
  for (let i = 0; i < teamMembers.value.length; i += chunkSize) {
    chunks.push(teamMembers.value.slice(i, i + chunkSize))
  }
  return chunks
})
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
.carousel-container {
  position: relative;
  padding: 0 60px;
  overflow: visible;
}

.carousel-row {
  padding-left: 100px;
  padding-right: 100px;
}

.team-carousel {
  margin: 0 auto;
  overflow: visible !important;
}

.team-carousel :deep(.v-window) {
  overflow: visible !important;
}

.team-carousel :deep(.v-carousel__controls) {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.team-carousel :deep(.v-btn--icon) {
  pointer-events: all;
  background-color: #FFFFFF !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  width: 48px !important;
  height: 48px !important;
}

.team-carousel :deep(.v-carousel__controls__item:first-child) {
  position: absolute;
  left: -60px;
}

.team-carousel :deep(.v-carousel__controls__item:last-child) {
  position: absolute;
  right: -60px;
}

.team-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding-top: 80px;
}

.profile-image-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.profile-placeholder {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.team-card {
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
}

.team-card-content {
  padding: 100px 24px 32px 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.dashed-divider {
  width: 100%;
  border-top: 2px dashed #D1D5DB;
  margin: 12px 0;
}

.member-name {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 8px;
}

.member-title {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6B7280;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 0;
}

.member-description {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.6;
  text-align: justify;
  width: 100%;
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

  .carousel-container {
    padding: 0;
  }

  .carousel-row {
    padding-left: 16px;
    padding-right: 16px;
  }

  .team-carousel :deep(.v-carousel__controls__item:first-child) {
    left: 0;
  }

  .team-carousel :deep(.v-carousel__controls__item:last-child) {
    right: 0;
  }

  .team-carousel :deep(.v-btn--icon) {
    width: 40px !important;
    height: 40px !important;
  }

  .team-card-wrapper {
    padding-top: 60px;
    max-width: 90%;
    margin: 0 auto;
  }

  .profile-image,
  .profile-placeholder {
    width: 120px;
    height: 120px;
    border: 4px solid #FFFFFF;
  }

  .team-card {
    height: 480px;
  }

  .team-card-content {
    padding: 70px 20px 24px 20px !important;
  }

  .member-name {
    font-size: 18px;
  }

  .member-title {
    font-size: 13px;
  }

  .member-description {
    font-size: 12px;
  }

  .dashed-divider {
    margin: 12px 0;
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

  .team-card-wrapper {
    padding-top: 50px;
  }

  .profile-image,
  .profile-placeholder {
    width: 100px;
    height: 100px;
    border: 3px solid #FFFFFF;
  }

  .team-card {
    height: 450px;
  }

  .team-card-content {
    padding: 60px 16px 20px 16px !important;
  }

  .member-name {
    font-size: 16px;
  }

  .member-title {
    font-size: 12px;
  }

  .member-description {
    font-size: 11px;
    text-align: justify;
  }

  .dashed-divider {
    margin: 10px 0;
    border-top-width: 1.5px;
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