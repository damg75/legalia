<template>
  <v-container fluid class=" d-flex flex-column justify-start hero px-16 pt-16">

    <!-- IMage -->

    <v-row class="ma-0 pa-0 d-flex d-row justify-center align-center">
      <v-col cols="12" md="6" class="">
        <div class="hero-copy text-justify d-flex justify-center">

          <div>
            Transformamos tu <br> experiencia legal con <br> un servicio <b>innovador</b> <br> <b>y excepcional.</b>

          </div>
        </div>

      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">

        <v-img src="@/modules/landing/assets/hero.svg" alt="Hero Illustration" class="hero-svg" max-width="683"
          height="482" contain>
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>

    </v-row>

    <!-- Title -->

    <v-row class="d-flex d-row justify-center align-center" style="margin-top: 0px;">
      <v-col cols="12" md="12" class="">
        <div class="hero-copy text-justify d-flex justify-center">
          <b class="hero-title">
            Soluciones legales efectivas y confiables
          </b>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex d-row justify-center align-center">
      <v-col cols="12" md="12" class="">
        <div class="hero-copy d-flex justify-center align-center">
          <span class="hero-description">
            Una nueva forma de acceder a servicios legales, sin <br> barreras y sin complicaciones.
          </span>
        </div>
      </v-col>
    </v-row>

     <!-- Cards -->

     <v-row class="d-flex justify-center align-center mt-4 mb-8">
       <v-col 
         v-for="card in heroCards" 
         :key="card.id"
         cols="12" 
         md="4" 
         class="d-flex justify-center mb-4"
       >
         <v-card
           class="hero-card d-flex flex-column pa-3"
           elevation="4"
           max-width="380"
           rounded="lg"
           height="250"
         >
           <v-card-text class="text-left pa-6 d-flex flex-column flex-grow-1">
             <div 
               class="card-icon-container mb-4" 
               :style="{ backgroundColor: card.iconBg }"
             >
               <v-icon
                 size="24"
                 color="white"
               >
                 {{ card.icon }}
               </v-icon>
             </div>
             <h3 class="card-title mb-3">{{ card.title }}</h3>
             <p class="card-description flex-grow-1">
               {{ card.description }}
             </p>
           </v-card-text>
         </v-card>
       </v-col>
     </v-row>

  </v-container>


</template>

<script setup>
import { ref } from 'vue'

// Cards data
const heroCards = ref([
  {
    id: 1,
    icon: 'mdi-clock-outline',
    iconBg: '#722F37',
    title: 'Respuesta Rápida',
    description: 'Atendemos tu consulta en menos de 24 horas con soluciones efectivas y personalizadas.'
  },
  {
    id: 2,
    icon: 'mdi-shield-check',
    iconBg: '#4A5568',
    title: 'Máxima Transparencia',
    description: 'Servicios de asesoría donde le explicamos con claridad cuáles son los escenarios que corresponden.'
  },
  {
    id: 3,
    icon: 'mdi-cog-outline',
    iconBg: '#722F37',
    title: 'Proceso simplificado',
    description: 'Una nueva forma de acceder a servicios legales y corporativos, de manera clara, sin complicaciones innecesarias.'
  }
])
</script>

<style scoped lang="scss">
.hero {

  background: #FFFFFF;
  position: relative;
  overflow: hidden;

  // SVG de fondo fijo en bottom
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-image: url('@/modules/landing/assets/Subtract-wide.svg');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    z-index: 0;
    min-height: 711px; // Altura del SVG
  }

  .hero-copy {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    position: relative;
    z-index: 1;

    b {
      font-weight: 700;
    }

    @media (max-width: 960px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }

    @media (max-width: 600px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 1.3;
    }

    @media (max-width: 360px) {
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 960px) {
      font-size: 32px;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 600px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 1.3;
    }

    @media (max-width: 360px) {
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .hero-description {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;

    @media (max-width: 960px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      font-size: 15px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.5;
    }

    @media (max-width: 360px) {
      font-size: 13px;
      line-height: 1.5;
    }
  }
}

.hero-svg {

  @media (max-width: 960px) {
    max-width: 500px !important;
    height: 350px !important;
  }

  @media (max-width: 768px) {
    max-width: 400px !important;
    height: 280px !important;
  }

  @media (max-width: 600px) {
    max-width: 350px !important;
    height: 250px !important;
  }

  @media (max-width: 480px) {
    max-width: 300px !important;
    height: 210px !important;
  }

  @media (max-width: 360px) {
    max-width: 280px !important;
    height: 200px !important;
  }
}

.hero-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  border: 1px solid #E2E8F0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
  }
}

.card-icon-container {
  width: 48px;
  height: 48px;
  background-color: #722F37;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1A202C;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
}

.card-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #718096;
  line-height: 1.6;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
}
</style>
