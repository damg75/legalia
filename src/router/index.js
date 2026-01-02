/**
 * router/index.js
 *
 * Simple manual routes configuration
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Components
import Landing from '@/modules/landing/Landing.vue'
import Services from '@/modules/services/Services.vue'
import Form from '@/modules/form/Form.vue'
import AboutUs from '@/modules/about-us/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      layout: 'LandingLayout',
      seo: {
        title: 'Legalia - Servicios Legales Digitales en Venezuela',
        description: 'Acercamos el acceso a la justicia con soluciones legales digitales, accesibles y eficientes para personas y empresas en Venezuela. Consulta inicial por $80.',
        keywords: 'servicios legales Venezuela, abogados online, asesoría legal digital, consultoría jurídica, servicios legales accesibles',
        image: '/og-logo.png',
        schemaType: 'LegalService',
        structuredData: {
          '@type': 'LegalService',
          serviceType: 'Servicios Legales Digitales',
          areaServed: {
            '@type': 'Country',
            name: 'Venezuela'
          },
          priceRange: '$$',
          telephone: '+584122515898',
          email: 'hola@legalia.com'
        }
      }
    }
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services,
    meta: {
      layout: 'LandingLayout',
      seo: {
        title: 'Servicios Legales - Legalia',
        description: 'Servicios legales personalizados para personas naturales y jurídicas. Contratos, asesoría fiscal, propiedad intelectual, derecho procesal y más. Respuesta rápida y tarifas transparentes.',
        keywords: 'servicios legales personas naturales, servicios legales empresas, abogados especializados, asesoría legal personalizada',
        image: '/og-logo.png',
        schemaType: 'Service',
        structuredData: {
          '@type': 'Service',
          serviceType: 'Servicios Legales',
          provider: {
            '@type': 'LegalService',
            name: 'Legalia'
          },
          areaServed: 'Venezuela',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceType: 'Online',
            availableLanguage: 'Spanish'
          }
        }
      }
    }
  },
  {
    path: '/unete',
    name: 'Form',
    component: Form,
    meta: {
      layout: 'LandingLayout',
      seo: {
        title: 'Únete a Nosotros - Legalia',
        description: 'Forma parte del equipo de Legalia. Buscamos profesionales del derecho comprometidos con hacer la justicia más accesible.',
        keywords: 'trabajo legal, oportunidades abogados, carrera jurídica, unirse a Legalia',
        image: '/og-logo.png',
        schemaType: 'WebPage',
        structuredData: {
          '@type': 'WebPage',
          name: 'Únete a Nosotros - Legalia',
          description: 'Oportunidades de trabajo para profesionales del derecho'
        }
      }
    }
  },
  {
    path: '/sobre-nosotros',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      layout: 'LandingLayout',
      seo: {
        title: 'Sobre Nosotros - Legalia',
        description: 'Conoce a nuestro equipo de profesionales especializados en el área legal. Más de 30 años de experiencia combinada ofreciendo soluciones legales efectivas y transparentes.',
        keywords: 'equipo legal, abogados especializados Venezuela, profesionales legales, experiencia jurídica',
        image: '/og-logo.png',
        schemaType: 'AboutPage',
        structuredData: {
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Organization',
            name: 'Legalia',
            description: 'Servicios legales digitales en Venezuela',
            url: 'https://legalia.com',
            logo: 'https://legalia.com/og-logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+584122515898',
              contactType: 'customer service',
              email: 'hola@legalia.com',
              availableLanguage: 'Spanish'
            }
          }
        }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (navegación hacia atrás/adelante), usarla
    if (savedPosition) {
      return savedPosition
    }
    // Si hay un hash en la ruta, hacer scroll a ese elemento
    if (to.hash) {
      return { el: to.hash }
    }
    // Por defecto, scroll al inicio de la página (instantáneo)
    return { top: 0 }
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
