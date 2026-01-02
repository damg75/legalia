<template>
  <v-footer class="footer-container">
    <v-container fluid class="px-16 px-md-16 px-4">
      <!-- Desktop Version -->
      <v-row class="d-none d-md-flex py-8">
        <!-- Logo y descripción -->
        <v-col cols="12" md="3" class="d-flex flex-column">
          <div class="mb-4">
            <LegaliaLogo variant="white" />
          </div>
          <p class="footer-description">
            Acercamos el acceso a la justicia con soluciones legales digitales, accesibles y eficientes para personas y
            empresas.
          </p>
          <div class="footer-copyright mt-auto">
            © 2025 Legalia. Todos los derechos reservados.
          </div>
        </v-col>

        <!-- Servicios -->
        <v-col cols="12" md="3" class="d-flex flex-column">
          <h3 class="footer-title mb-4">Servicios</h3>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="handleNaturalPersonClick">
            Para personas naturales
          </v-btn>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="handleLegalEntityClick">
            Para personas jurídicas
          </v-btn>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="$router.push('/sobre-nosotros')">
            Sobre nosotros
          </v-btn>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="handleContactClick">
            Contáctanos
          </v-btn>
        </v-col>

        <!-- Contáctanos -->
        <v-col cols="12" md="3" class="d-flex flex-column">
          <h3 class="footer-title mb-4">Contáctanos</h3>

          <div class="footer-contact mb-3">
            <a href="mailto:hola@legalia.com" class="footer-link-text">hola@legalia.com</a>
          </div>

          <div class="footer-contact mb-3">
            <span class="footer-text">Lunes a viernes</span>
          </div>

          <div class="footer-contact mb-3">
            <span class="footer-text">9:00 a.m. - 6:00 p.m.</span>
          </div>

          <div class="footer-contact mb-3">
            <span class="footer-text">Instagram: </span>
            <a href="https://instagram.com/legalia_ve" target="_blank" class="footer-link-text">@legalia_ve</a>
          </div>

          <div class="footer-contact mb-3">
            <span class="footer-text">Linkedin: </span>
            <a href="https://linkedin.com/company/legalia-venezuela" target="_blank" class="footer-link-text">Legalia
              Venezuela</a>
          </div>
        </v-col>

        <!-- Legal -->
        <v-col cols="12" md="3" class="d-flex flex-column">
          <h3 class="footer-title mb-4">Legal</h3>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="$router.push('/terminos')">
            Términos y condiciones
          </v-btn>
          <v-btn variant="text" class="footer-link justify-start pa-0 mb-2" @click="$router.push('/privacidad')">
            Políticas de privacidad
          </v-btn>
        </v-col>
      </v-row>

      <!-- Mobile Version -->
      <div class="d-md-none py-6">
        <!-- Logo centrado -->
        <div class="d-flex justify-center mb-6">
          <LegaliaLogo variant="white" />
        </div>

        <!-- Descripción -->
        <p class="footer-description text-center mb-6">
          Acercamos el acceso a la justicia con soluciones legales digitales, accesibles y eficientes para personas y
          empresas.
        </p>

        <!-- Secciones en acordeón -->
        <v-expansion-panels variant="accordion" class="mb-6">
          <!-- Servicios -->
          <v-expansion-panel>
            <v-expansion-panel-title class="footer-title">
              Servicios
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="d-flex flex-column">
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1" @click="handleNaturalPersonClick">
                  Para personas naturales
                </v-btn>
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1" @click="handleLegalEntityClick">
                  Para personas jurídicas
                </v-btn>
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1"
                  @click="$router.push('/sobre-nosotros')">
                  Sobre nosotros
                </v-btn>
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1" @click="handleContactClick">
                  Contáctanos
                </v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Contáctanos -->
          <v-expansion-panel>
            <v-expansion-panel-title class="footer-title">
              Contáctanos
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="d-flex flex-column">
                <div class="footer-contact mb-3">
                  <a href="mailto:hola@legalia.com" class="footer-link-text">hola@legalia.com</a>
                </div>
                <div class="footer-contact mb-3">
                  <span class="footer-text">Lunes a viernes</span>
                </div>
                <div class="footer-contact mb-3">
                  <span class="footer-text">9:00 a.m. - 6:00 p.m.</span>
                </div>
                <div class="footer-contact mb-3">
                  <span class="footer-text">Instagram: </span>
                  <a href="https://instagram.com/legalia_ve" target="_blank" class="footer-link-text">@legalia_ve</a>
                </div>
                <div class="footer-contact mb-3">
                  <span class="footer-text">Linkedin: </span>
                  <a href="https://linkedin.com/company/legalia-venezuela" target="_blank"
                    class="footer-link-text">Legalia Venezuela</a>
                </div>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- Legal -->
          <v-expansion-panel>
            <v-expansion-panel-title class="footer-title">
              Legal
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="d-flex flex-column">
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1" @click="$router.push('/terminos')">
                  Términos y condiciones
                </v-btn>
                <v-btn variant="text" class="footer-link justify-start pa-2 mb-1" @click="$router.push('/privacidad')">
                  Políticas de privacidad
                </v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- Copyright móvil -->
        <div class="footer-copyright text-center">
          © 2025 Legalia. Todos los derechos reservados.
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useServiceTab } from '@/composables/useServiceTab'
import { useWhatsApp } from '@/composables/useWhatsApp'
import LegaliaLogo from './LegaliaLogo.vue'

const router = useRouter()
const { setSelectedTab } = useServiceTab()
const { openWhatsApp } = useWhatsApp()

const handleNaturalPersonClick = () => {
  setSelectedTab('naturales')
  router.push('/servicios')
}

const handleLegalEntityClick = () => {
  setSelectedTab('juridicas')
  router.push('/servicios')
}

const handleContactClick = () => {
  openWhatsApp()
}
</script>

<style scoped>
.footer-container {
  background: rgba(30, 39, 97, 1);
  color: white;
  width: 100%;
  overflow-x: hidden;
}

.footer-title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer-description {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 16px;
}

.footer-link {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-transform: none;
  letter-spacing: normal;
  min-height: auto;
  height: auto;
}

.footer-link:hover {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.footer-link-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.footer-link-text:hover {
  color: white;
}

.footer-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-right: 8px;
}

.footer-contact {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.footer-copyright {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 24px;
}

/* Estilos para expansion panels en móvil */
:deep(.v-expansion-panel) {
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  margin-bottom: 0 !important;
}

:deep(.v-expansion-panels) {
  gap: 0 !important;
}

:deep(.v-expansion-panel + .v-expansion-panel) {
  margin-top: 0 !important;
}

:deep(.v-expansion-panel-title) {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

:deep(.v-expansion-panel-text) {
  background-color: rgba(255, 255, 255, 0.02);
}

:deep(.v-expansion-panel-title__overlay) {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Ajustes para móvil */
@media (max-width: 959px) {
  .footer-container {
    padding: 0;
  }
  
  .footer-description {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .footer-title {
    font-size: 16px;
  }
  
  .footer-link, .footer-link-text, .footer-text {
    font-size: 13px;
  }
  
  :deep(.v-container) {
    max-width: 100%;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}
</style>
