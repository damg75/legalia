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
            <v-btn
              icon
              variant="elevated"
              class="carousel-nav-btn carousel-prev"
              @click="prevSlide"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <div class="carousel-container">
              <v-carousel
                ref="carouselRef"
                v-model="currentSlide"
                hide-delimiters
                :show-arrows="false"
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
                    <TeamMemberCard :member="member" />
                  </v-col>
                </v-row>
              </v-carousel-item>
              </v-carousel>
            </div>
            <v-btn
              icon
              variant="elevated"
              class="carousel-nav-btn carousel-next"
              @click="nextSlide"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
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
import TeamMemberCard from './parts/TeamMemberCard.vue'

const display = useDisplay()
const mobile = computed(() => display.smAndDown.value)
const carouselRef = ref(null)
const currentSlide = ref(0)

const prevSlide = () => {
  if (carouselRef.value && currentSlide.value > 0) {
    currentSlide.value--
  } else if (carouselRef.value) {
    // Si estamos en el primer slide, ir al último
    currentSlide.value = chunkedMembers.value.length - 1
  }
}

const nextSlide = () => {
  if (carouselRef.value && currentSlide.value < chunkedMembers.value.length - 1) {
    currentSlide.value++
  } else if (carouselRef.value) {
    // Si estamos en el último slide, volver al primero
    currentSlide.value = 0
  }
}

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
    profileUrl: '/members/renee_moros.webp',
    description: 'Abogada USM (1992), con más de treinta (30) años de experiencia profesional, especialista en Ciencias Penales y Criminológicas en la Universidad   de Venezuela (UCV), doctoranda en Ciencias Penales y Criminalísticas en UNIMAR, ex socia fundadora del Despacho de Abogados RMA, profesora de posgrado en distintas casas de estudio (UCV, UNIMAR, UCSAR, ENM), ex jueza penal de carrera, y ex Conjueza del TSJ, coordinadora del Área de litigios en materia penal y del Area de Compliance Corporativo, Criminal Compliance, Derecho Penal Económico y de la Empresa de nuestra firma.'
  },
  {
    id: 'carlos-armando-armas-flores',
    name: 'Carlos Armando Armas Flores',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogado con especialización en Derecho Privado.Experto en Derecho Civil, Mercantil y Laboral, centrado en el ámbito empresarial y gerencial. Técnico Superior Universitario en Administración de Empresas, con mención en Ciencias Comerciales. Más de 25 años de experiencia progresiva en gerencia, particularmente en los sectores gasífero, metalúrgico e inmobiliario. Amplia trayectoria como abogado litigante y directivo en empresas privadas.Conocimiento de normas internacionales y venezolanas en la distribución de Gas Natural y Gas Licuado de Petróleo (GLP).'

  },
  {
    id: 'cruz-marcel-caraballo-espanol',
    name: 'Cruz Marcel Caraballo Español',
    title: 'Abogado de litigios penales.',
    profileUrl: '',
    description: 'Abogado con 15 años de experiencia en litigios penales. Especialista en Derecho Procesal Constitucional (Universidad Monte Ávila). Especialista en Derecho Penal y Criminología (Universidad Gran Mariscal de Ayacucho). Actualmente, socio del Escritorio Jurídico Salazar, Cultrera, Caraballo Abogados Consultores. Defensor Público Octavo Penal del estado Anzoátegui. Profesor universitario de Derecho Penal I y Derecho Procesal Penal I en la Universidad Santa María (núcleo Oriente).'
  },
  {
    id: 'alberto-ruiz-blanco',
    name: 'Alberto Ruiz Blanco',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogado con más de 30 años de experiencia en el ejercicio profesional. Socio de SLV Consultores, con enfoque en Derecho Laboral, Constitucional y Procesal. Amplia experiencia en Derecho Ambiental, Administrativo y de Hidrocarburos. Trayectoria destacada como profesor universitario en Derecho Corporativo y Procesal Laboral.Experiencia tanto en la práctica independiente como en prestigiosos escritorios jurídicos nacionales.'
  },
  {
    id: 'carlos-jose-serrano-diaz',
    name: 'Carlos José Serrano Díaz',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '',
    description: 'Abogado con más de 20 años de experiencia.Especialista en Derecho Procesal del Trabajo. Amplia trayectoria como asesor jurídico en el sector público y privado. Profesor universitario en Derecho Laboral. Conocimientos sólidos en Derecho Civil, Mercantil, Laboral, Agrario, Sucesiones y Protección del Niño y Adolescente.Buen manejo de trabajo bajo presión, toma de decisiones y atención al público.'
  },
  {
    id: 'jennifer-andreina-barreto-vargas',
    name: 'Jennifer Andreina Barreto Vargas',
    title: 'Abogado de litigios penales.',
    profileUrl: '/members/jennifer_barreto.webp',
    description: 'Abogada egresada de la Universidad Central de Venezuela (2013). Experiencia judicial como secretaria y juez provisoria en el Circuito Judicial Penal del Área Metropolitana de Caracas. Actualmente abogada del Departamento Penal del Escritorio Jurídico KLMC Legal S.C. Formación en Derecho humanos, Criminalística, Derecho Procesal Telemático y Jurisdicción Penal.'
  },
  {
    id: 'luz-veronica-canas-izaguirre',
    name: 'Luz Verónica Cañas Izaguirre',
    title: 'Abogada Especialista en Ciencias Penales y Criminológicas',
    profileUrl: '/members/luz_canas.webp',
    description: 'Abogada con más de 30 años de trayectoria en el sistema judicial venezolano. Jueza Titular y Provisoria en múltiples instancias penales del Estado Anzoátegui y Vargas. Jueza Temporal de la Corte de Apelaciones del Estado Anzoátegui. (2006-2017).Jubilada como Juez Superior Penal en 2018. Especialista en Ciencias Penales y Criminológicas, Derecho Penal, Gerencia Policial y Seguridad Ciudadana. Docente universitaria de pregrado y postgrado en diversas universidades (UBV, UGMA, USM, UNES, etc). Reconocida ponente en foros nacionales sobre justicia, derecho humanos y derecho penal.'
  },
  {
    id: 'ana-yoleida-pacheco',
    name: 'Ana Yoleida Pacheco',
    title: 'Abogado con especialización en Derecho Privado',
    profileUrl: '/members/ana_pachecho.webp',
    description: 'Abogada egresada Magna Cum Laude. Licenciada en Educación, mención Lectura y Escritura (Summa Cum Laude). Especialista en Propiedad Intelectual y Marketing (ULA). Profesora universitaria de Obligaciones y Contratos. Consultora de negocios y asesora legal de empresas. Conferencista profesional y creadora de contenido jurídico.'
  },
  {
    id: 'lizbeth-suegart-siverio',
    name: 'Lizbeth Suegart Siverio',
    title: 'Abogado de litigios penales.',
    profileUrl: '/members/lisbeth_suegart.webp',
    description: 'Abogada egresada de la Universidad Santa María (1990).Especialista en Ciencias Penales y Criminológicas (UCAB, 1992).Ex Defensora Pública Penal Ordinario (2000–2018). Actualmente abogada litigante en ejercicio libre. Ponente en congresos y formadora en temas de género, criminalística y derecho penal. Publicaciones jurídicas en revistas especializadas sobre DDHH y defensa penal.'
  },
  {
    id: 'ricardo-loreto-cardenas',
    name: 'Ricardo Loreto Cárdenas',
    title: 'Abogado Especialista en Derecho Civil, Mercantil y Corporativo.',
    profileUrl: '/members/ricardo_loreto.webp',
    description: 'Abogado con más de 20 años de experiencia en el ámbito judicial y corporativo.Especialista en Derecho Privado (Universidad Santa María).Trayectoria de 15 años como relator en la Sala de Casación Civil del Tribunal Supremo de Justicia. Director y socio de Loreto y Asociados, con amplia experiencia en derecho civil, mercantil, corporativo y litigios. Reconocido por su honestidad, dedicación y capacidad de adaptación. Actualmente presta asesoría legal a importantes empresas y entidades financieras en litigios y asuntos corporativos'
  },
  {
    id: 'henry-gerardo-corredor-rivas',
    name: 'Henry Gerardo Corredor Rivas',
    title: 'Abogado Especialista en Derecho Penal y Procesal Penal',
    profileUrl: '/members/henry_corredor.webp',
    description: 'Abogado egresado de la Universidad de Los Andes (2001), con más de 20 años de experiencia en el libre ejercicio profesional.Actualmente cursa el último semestre de la Maestría en Derecho Penal y Criminología en la Universidad Bicentenaria de Aragua. Su trayectoria está enfocada principalmente en Derecho Procesal Penal, complementada con experiencia en Derecho Civil, Derecho de Niños, Niñas y Adolescentes, así como en trámites de registros y notarías. Reconocido por su celeridad, responsabilidad, organización, capacidad de resolución de problemas y trabajo en equipo'
  },
  {
    id: 'yhonny-meza',
    name: 'Yhonny Meza',
    title: 'Abogado Especialista en Derecho Penal y Procesal Penal',
    profileUrl: '/members/yhonny_meza.webp',
    description: 'Abogado con cinco (5) años de experiencia en el ejercicio profesional. Posee experiencia en diversas áreas del derecho, con especial énfasis en Derecho Penal, Procesal Penal, Derecho Civil y Protección de Niños, Niñas y Adolescentes, así como actuaciones ante el Tribunal Supremo de Justicia. Ha ejercido como abogado en libre ejercicio y ha formado parte del Circuito Judicial Penal del Área Metropolitana de Caracas.'
  },
  {
    id: 'leiddy-sarai-urdaneta',
    name: 'Leiddy Sarai Urdaneta',
    title: 'Abogada Especialista en Derecho Agrario, Administrativo y Gestión Pública',
    profileUrl: '/members/leiddy_urdaneta.webp',
    description: 'Abogada egresada de la Universidad Santa María (USM), con experiencia en representación legal y gestión de trámites ante entes y organismos adscritos al Poder Público Nacional. Ha desempeñado funciones en el sector público y privado, destacándose en asesoría jurídica, conformación de expedientes, asistencia en inspecciones técnicas, resolución de conflictos y tramitación de procesos vinculados a importación y exportación. Cuenta con formación en Derecho Agrario y Ambiental, así como en Derecho Procesal Telemático. Posee conocimiento profesional en sistemas como INTI, SUNAGRO, INSAI, MINEC, SAPI, WEBPI, SIGETRA y procesos asociados a cadenas titulativas, contrataciones públicas e internacionales, permisos de comercialización y certificaciones de producción.'
  },
  {
    id: 'ruben-diaz-hernandez',
    name: 'Rubén Díaz Hernández',
    title: 'Abogado Especialista en Derecho Procesal, Agrario y Gestión Jurídica',
    profileUrl: '/members/ruben_diaz.webp',
    description: 'Abogado egresado de la Universidad Católica Andrés Bello (UCAB), con formación en Derecho Procesal y una trayectoria profesional sólida en el sector público y corporativo. Ha ejercido labores de asesoramiento jurídico y liderazgo en instituciones como la Prefectura del Municipio Sucre y el Instituto Nacional de Tierras (INTI), donde ocupó posiciones clave en el área legal agraria y coordinación jurídica regional. Cuenta además con experiencia gerencial en el sector agroindustrial. Actualmente se desempeña como gerente en Consultores Díaz & Asociados, aportando una visión integral en litigio, asesoría y gestión legal estratégica.'
  },
  {
    id: 'wendy-mendez',
    name: 'Wendy Méndez',
    title: 'Abogada Especialista en Derecho de Familia, Civil y Mediación Estratégica',
    profileUrl: '/members/wendy.webp',
    description: 'Abogada egresada de la Universidad Católica del Táchira, con más de trece (13) años de experiencia profesional, especializada en Derecho de Familia y Derecho Civil. Su práctica se caracteriza por un enfoque estratégico en la mediación jurídica, especialmente en contextos de alta sensibilidad emocional, reputacional y patrimonial. Cuenta con amplia trayectoria en la atención de casos complejos de divorcio, reconocimiento de uniones concubinarias y partición de bienes, tanto en procesos de separación como sucesorales. Posee experiencia en acciones de filiación de maternidad y paternidad, incluyendo casos vinculados a la comunidad LGTB+ y familias heterosexuales con subrogación de vientre. Se desempeña en el libre ejercicio profesional, priorizando soluciones eficientes que eviten litigios prolongados.'
  },
  {
    id: 'yandy-perez',
    name: 'Yandy Pérez',
    title: 'Abogada Especialista en Derecho Penal y Agrario',
    profileUrl: '/members/yandy_perez.webp',
    description: 'Abogada con sólida y experiencia en el ejercicio del derecho en áreas como Derecho Agrario, Civil y Penal. Egresada de la Universidad Santa María, con estudios de postgrado en Derecho Penal y Maestría en Ciencias Jurídicas. Ha desarrollado trayectoria en el sistema de justicia penal del Estado Miranda, desempeñándose como secretaria en juzgado de juicio, y como asesora jurídica en el sector público. Fue Jefa del Área Legal del Instituto Nacional de Tierras (INTI) en su oficina regional, con experiencia en procedimientos administrativos vinculados a regularización y tenencia de tierras. Ejerció como abogada en materia penal y agraria, y posteriormente como Defensora Pública, destacándose por su ética profesional.'
  },
  {
    id: 'kharynell-orozco-gutierrez',
    name: 'Kharynell Jhailyn Orozco Gutiérrez',
    title: 'Abogada Especialista en Derecho Penal y Ejecución de Sentencias',
    profileUrl: '/members/kharynell_orozco.webp',
    description: 'Abogada egresada de la Universidad de Los Andes (ULA), con experiencia profesional en el sistema de justicia penal venezolano y en el ejercicio independiente de la profesión. Ha desempeñado funciones en el Circuito Judicial Penal del Estado Mérida como Secretaria de Circuito, así como en el sector público como Asesora Jurídica en áreas administrativas y operativas vinculadas a organismos del Estado. Cuenta con una sólida trayectoria en la Defensa Pública, donde ejerció como Defensora Pública Auxiliar y posteriormente como Defensora Pública Provisoria en materia Penal Ordinaria. Desde 2019 ejerce como abogada en libre ejercicio, brindando asesoría y representación legal.'
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
}

.team-carousel :deep(.v-window) {
  overflow: visible !important;
}

.team-carousel :deep(.v-carousel__controls),
.team-carousel :deep(.v-window__controls),
.team-carousel :deep(.v-window__control),
.team-carousel :deep(.v-window__left),
.team-carousel :deep(.v-window__right),
.team-carousel :deep(button.v-window__left),
.team-carousel :deep(button.v-window__right) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #F3F4F6 !important;
  color: #6B7280 !important;
  box-shadow: none !important;
  width: 40px !important;
  height: 40px !important;
  z-index: 10;
  flex-shrink: 0;
  border-radius: 50% !important;
}

.carousel-nav-btn:hover {
  background-color: #E5E7EB !important;
  color: #374151 !important;
}

.carousel-prev {
  left: -40px;
}

.carousel-next {
  right: -40px;
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
    left: 10px;
  }

  .carousel-next {
    right: 10px;
  }

  .carousel-nav-btn {
    width: 36px !important;
    height: 36px !important;
  }

  .team-carousel :deep(.v-btn--icon) {
    width: 40px !important;
    height: 40px !important;
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
    left: 4px;
  }

  .carousel-next {
    right: 4px;
  }

  .carousel-nav-btn {
    width: 32px !important;
    height: 32px !important;
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
