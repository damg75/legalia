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
      layout: 'LandingLayout'
    }
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/unete',
    name: 'Form',
    component: Form,
    meta: {
      layout: 'LandingLayout'
    }
  },
  {
    path: '/sobre-nosotros',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      layout: 'LandingLayout'
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
