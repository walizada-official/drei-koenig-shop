import { siteConfig } from '@/config/site'
import type { Product } from '@/types/product'
import { formatCurrency } from './currency'

export function buildWhatsAppUrl(product?: Product, quantity = 1) {
  const quantityText = quantity > 1 ? ` Menge: ${quantity}.` : ''
  const text = product
    ? `Hallo ${siteConfig.shortName}, ich interessiere mich für: ${product.name}${product.price !== null ? ` (${formatCurrency(product.price)})` : ''}.${quantityText} Bitte senden Sie mir weitere Informationen.`
    : `Hallo ${siteConfig.shortName}, ich habe eine Frage zu Ihren Produkten.`

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
}
