import type { ProductCategory } from '@/types/product'
import { products } from './products'

export interface ShopCategory {
  key: ProductCategory
  name: string
  shortName: string
  description: string
  image: string
}

function getCategoryImage(category: ProductCategory) {
  return products.find((product) => product.category === category)?.image ?? ''
}

export const categories: ShopCategory[] = [
  {
    key: 'solar',
    name: 'Solar & Energie',
    shortName: 'Solar',
    description: 'Solarmodule, Speicher und Systeme für moderne Energie.',
    image: getCategoryImage('solar'),
  },
  {
    key: 'fitness',
    name: 'Fitness',
    shortName: 'Fitness',
    description: 'Zubehör für Sport, Training und aktive Tage.',
    image: getCategoryImage('fitness'),
  },
  {
    key: 'tea',
    name: 'Tee & Genuss',
    shortName: 'Tee',
    description: 'Ausgewählte Tees und Genussprodukte.',
    image: getCategoryImage('tea'),
  },
  {
    key: 'home',
    name: 'Haus & Alltag',
    shortName: 'Haus & Alltag',
    description: 'Nützliche Produkte für Zuhause und unterwegs.',
    image: getCategoryImage('home'),
  },
]

export function getCategoryName(category: ProductCategory) {
  return categories.find((item) => item.key === category)?.name ?? category
}
