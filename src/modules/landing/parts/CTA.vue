<template>
  <v-container fluid class="cta-section py-16">
    <v-row class="justify-center align-center">
      <v-col cols="12" md="8" lg="8" class="text-center">
        <!-- Título -->
        <h2 class="cta-title mb-6">
          ¿Listo para transformar tu experiencia legal?
        </h2>
        
        <!-- Subtítulo -->
        <p class="cta-subtitle mb-8">
          Comienza hoy mismo agendando tu asesoría y descubre la diferencia
        </p>
        
        <!-- Botón de WhatsApp -->
        <v-btn
          v-intersect="buttonAnimation.intersectOptions"
          :class="buttonAnimation.animationClass()"
          :style="buttonAnimation.animationStyle"
          color="white"
          variant="outlined"
          size="large"
          rounded="lg"
          class="cta-button mb-6"
          @click="handleWhatsAppClick"
        >
          <v-icon class="me-2" size="20">mdi-whatsapp</v-icon>
          Consultar por WhatsApp
        </v-btn>
        
        <!-- Texto adicional -->
        <p class="cta-additional-text">
          Respuesta al instante • 100% confidencial
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useWhatsApp } from '@/composables/useWhatsApp'
import { useDisplay } from 'vuetify'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { openWhatsApp } = useWhatsApp()
const { mobile } = useDisplay()

// Offset responsive
const buttonOffset = mobile.value ? '-50px' : '-150px'

// Animación del botón con entrada y salida
const buttonAnimation = useScrollAnimation({ 
  type: 'scale', 
  duration: 800, 
  once: false, 
  threshold: 0.2, 
  offset: buttonOffset 
})

const handleWhatsAppClick = () => {
  openWhatsApp()
}
</script>

<style scoped lang="scss">
.cta-section {
  background: #722F37;
  color: white;
  
  .cta-title {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 400;
    color: white;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
    
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  
  .cta-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
    
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  
  .cta-button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-transform: none;
    letter-spacing: normal;
    padding: 12px 32px;
    border: 2px solid white !important;
    color: white !important;
    min-height: 56px;
    
    @media (max-width: 768px) {
      font-size: 15px;
      padding: 10px 28px;
      min-height: 52px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 8px 24px;
      min-height: 48px;
    }
  }
  
  .cta-additional-text {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
}
</style>
