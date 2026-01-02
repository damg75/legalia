import { watch } from 'vue'
import { useRoute } from 'vue-router'

const defaultSEO = {
  title: 'Legalia - Servicios Legales Digitales en Venezuela',
  description: 'Acercamos el acceso a la justicia con soluciones legales digitales, accesibles y eficientes para personas y empresas en Venezuela.',
  keywords: 'servicios legales, abogados Venezuela, asesoría legal, consultoría jurídica, servicios legales digitales',
  image: '/og-logo.png', // Logo para Open Graph (debe estar en /public/)
  url: 'https://legalia.com',
  siteName: 'Legalia',
  type: 'website',
  locale: 'es_VE'
}

export function useSEO() {
  const route = useRoute()

  const updateSEO = (seoData = {}) => {
    const seo = { ...defaultSEO, ...seoData }
    const fullUrl = `${seo.url}${route.path}`
    
    // Construir URL completa de la imagen
    let imageUrl = seo.image
    if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('//')) {
      // Si es una ruta relativa, convertirla a URL absoluta
      if (!imageUrl.startsWith('/')) {
        imageUrl = `/${imageUrl}`
      }
      // Construir URL absoluta
      imageUrl = `${seo.url}${imageUrl}`
    }

    // Title
    document.title = seo.title

    // Meta tags básicos
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author || 'Legalia')

    // Open Graph tags
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', imageUrl, 'property')
    updateMetaTag('og:url', fullUrl, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', seo.siteName, 'property')
    updateMetaTag('og:locale', seo.locale, 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', seo.twitterCard || 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', imageUrl, 'name')

    // Canonical URL
    updateCanonical(fullUrl)

    // Language
    document.documentElement.lang = seo.locale.split('_')[0]

    // Structured Data (JSON-LD)
    updateStructuredData(seo, fullUrl, imageUrl)
  }

  const updateStructuredData = (seo, url, imageUrl) => {
    // Eliminar structured data existente
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Crear structured data básico
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': seo.schemaType || 'LegalService',
      name: seo.siteName,
      description: seo.description,
      url: url,
      logo: imageUrl,
      image: imageUrl,
      ...(seo.structuredData || {})
    }

    // Agregar structured data al head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }

  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }

  const updateCanonical = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    
    canonical.setAttribute('href', url)
  }

  return {
    updateSEO
  }
}
