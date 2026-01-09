import { ref } from 'vue'

/**
 * Composable para animaciones de scroll usando v-intersect de Vuetify
 * 
 * Tipos de animación disponibles:
 * - 'fade': Aparece/desaparece con opacidad
 * - 'slide-up': Desliza desde abajo
 * - 'slide-left': Desliza desde la izquierda
 * - 'slide-right': Desliza desde la derecha
 * - 'scale': Escala desde pequeño a normal
 * - 'zoom': Zoom con fade
 * 
 * @param {Object} options - Opciones de configuración
 * @param {string} options.type - Tipo de animación ('fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'zoom')
 * @param {number} options.duration - Duración en ms (default: 600)
 * @param {number} options.delay - Delay antes de iniciar en ms (default: 0)
 * @param {string} options.easing - Función de easing CSS (default: 'cubic-bezier(0.4, 0, 0.2, 1)')
 * @param {boolean} options.once - Si solo se anima una vez (default: true)
 * @param {number} options.threshold - Porcentaje de visibilidad para activar (0-1, default: 0.1)
 * @param {string} options.offset - Margen para activar la animación (default: '-100px')
 */
export function useScrollAnimation(options = {}) {
  const {
    type = 'fade',
    duration = 600,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    once = true,
    threshold = 0.1,
    offset = '-100px'
  } = options

  const isVisible = ref(false)
  const hasAnimated = ref(false)

  // Handler para v-intersect de Vuetify
  // Vuetify pasa (isIntersecting, entries, observer) o solo el objeto entries
  const onIntersect = (isIntersecting, entries) => {
    // Vuetify puede pasar boolean directamente o entries array
    const isVisible_ = typeof isIntersecting === 'boolean' 
      ? isIntersecting 
      : entries?.[0]?.isIntersecting ?? false
    
    if (once && hasAnimated.value) return
    
    if (isVisible_) {
      isVisible.value = true
      hasAnimated.value = true
    } else if (!once) {
      isVisible.value = false
    }
  }

  // Opciones para v-intersect
  const intersectOptions = {
    handler: onIntersect,
    options: {
      threshold: [0, threshold], // Detectar entrada y salida
      rootMargin: offset
    }
  }

  // Clases CSS basadas en el estado
  const animationClass = (customType = type) => {
    return {
      'scroll-animate': true,
      [`scroll-${customType}`]: true,
      'scroll-visible': isVisible.value
    }
  }

  // Estilos inline para duración y delay personalizados
  const animationStyle = {
    '--scroll-duration': `${duration}ms`,
    '--scroll-delay': `${delay}ms`,
    '--scroll-easing': easing
  }

  return {
    isVisible,
    onIntersect,
    intersectOptions,
    animationClass,
    animationStyle
  }
}

/**
 * Helper para crear múltiples animaciones con stagger (delay escalonado)
 * 
 * @param {number} count - Número de elementos
 * @param {Object} options - Opciones base de animación
 * @param {number} staggerDelay - Delay entre cada elemento en ms (default: 100)
 */
export function useStaggerAnimation(count, options = {}, staggerDelay = 100) {
  const animations = []
  
  for (let i = 0; i < count; i++) {
    animations.push(
      useScrollAnimation({
        ...options,
        delay: (options.delay || 0) + (i * staggerDelay)
      })
    )
  }
  
  return animations
}

/**
 * Directiva personalizada como alternativa al composable
 * Uso: v-scroll-animate="{ type: 'fade', duration: 600 }"
 */
export const vScrollAnimate = {
  mounted(el, binding) {
    const options = binding.value || {}
    const {
      type = 'fade',
      duration = 600,
      delay = 0,
      easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
      once = true,
      threshold = 0.1,
      offset = '-100px'
    } = options

    // Aplicar estilos CSS
    el.style.setProperty('--scroll-duration', `${duration}ms`)
    el.style.setProperty('--scroll-delay', `${delay}ms`)
    el.style.setProperty('--scroll-easing', easing)
    
    // Agregar clases base
    el.classList.add('scroll-animate', `scroll-${type}`)

    let hasAnimated = false

    // Crear observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (once && hasAnimated) return

          if (entry.isIntersecting) {
            el.classList.add('scroll-visible')
            hasAnimated = true
          } else if (!once) {
            el.classList.remove('scroll-visible')
          }
        })
      },
      { threshold: [0, threshold], rootMargin: offset }
    )

    observer.observe(el)
    el._scrollObserver = observer
  },
  unmounted(el) {
    if (el._scrollObserver) {
      el._scrollObserver.disconnect()
    }
  }
}
