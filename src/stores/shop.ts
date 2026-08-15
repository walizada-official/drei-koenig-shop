import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { products } from '@/data/products'
import type { ProductCategory } from '@/types/product'

export type SortMode = 'featured' | 'price-asc' | 'price-desc' | 'name'

export const useShopStore = defineStore('shop', () => {
  const search = ref('')
  const category = ref<ProductCategory | 'all'>('all')
  const sort = ref<SortMode>('featured')

  const filteredProducts = computed(() => {
    const term = search.value.trim().toLowerCase()
    const result = products.filter((product) => {
      const matchesCategory = category.value === 'all' || product.category === category.value
      const matchesSearch = !term || `${product.name} ${product.shortDescription} ${product.description}`.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })

    return [...result].sort((a, b) => {
      if (sort.value === 'name') return a.name.localeCompare(b.name, 'de')
      if (sort.value === 'price-asc') return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY)
      if (sort.value === 'price-desc') return (b.price ?? Number.NEGATIVE_INFINITY) - (a.price ?? Number.NEGATIVE_INFINITY)
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    })
  })

  return { search, category, sort, filteredProducts }
})
