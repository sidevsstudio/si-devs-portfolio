export const WHATSAPP_NUMBER = '918169519818'

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi SI Devs, I'm interested in your services and would like to discuss a project."

/**
 * Generates a WhatsApp click-to-chat deep link with an optional prefilled message.
 */
export function getWhatsAppUrl(
  message: string = WHATSAPP_DEFAULT_MESSAGE,
  number: string = WHATSAPP_NUMBER
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = getWhatsAppUrl()
