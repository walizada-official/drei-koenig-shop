export type ProductCategory = 'solar' | 'fitness' | 'tea' | 'home'

export interface Product {
  id: number
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  description: string
  price: number | null
  priceLabel?: string
  image: string
  images: string[]
  featured?: boolean
  badge?: string
  specs: Array<{ label: string; value: string }>
}
