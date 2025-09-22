/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/global.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#8B1538',
          'primary-dark': '#63071E',
          secondary: '#64748B',
          accent: '#8B1538',
          error: '#DC2626',
          warning: '#F59E0B',
          info: '#3B82F6',
          success: '#10B981',
        }
      }
    }
  },
  defaults: {
    global: {
      ripple: true,
    },
    VSheet: {
      elevation: 4,
    },
    VApp: {
      theme: 'customLight'
    },
    VMain: {
      style: 'background-color: #FFFFFF;'
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
