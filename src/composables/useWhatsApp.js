/**
 * Composable reutilizable para abrir WhatsApp con un mensaje predefinido
 * @param {string} phoneNumber - Número de teléfono (formato: +584122515898)
 * @param {string} defaultMessage - Mensaje por defecto
 * @returns {Function} Función para abrir WhatsApp
 */
export function useWhatsApp(phoneNumber = '+584122515898', defaultMessage = 'Hola, me interesa conocer más sobre sus servicios legales.') {
  const openWhatsApp = (customMessage = null) => {
    const message = encodeURIComponent(customMessage || defaultMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return {
    openWhatsApp
  }
}
