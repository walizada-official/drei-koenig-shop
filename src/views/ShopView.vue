<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import ProductCard from '@/components/product/ProductCard.vue'
import { useShopStore } from '@/stores/shop'
import type { ProductCategory } from '@/types/product'
import { categories as categoryData } from '@/data/categories'

const route = useRoute()
const shop = useShopStore()
const categories: Array<{ value: ProductCategory | 'all'; label: string }> = [
  { value: 'all', label: 'Alle' },
  ...categoryData.map((item) => ({ value: item.key, label: item.name })),
]
function syncCategory() {
  const q = route.query.category as ProductCategory | undefined
  shop.category = categories.some((c) => c.value === q) ? q! : 'all'
}
onMounted(syncCategory)
watch(() => route.query.category, syncCategory)
</script>

<template>
  <main class="container-shell pt-6 pb-[var(--section-space)]">
    <div class="rounded-[1.4rem] border bg-white p-4 shadow-sm" style="border-color: var(--color-border)">
      <div class="grid gap-3 lg:grid-cols-[1fr_auto]">
        <label class="flex items-center gap-3 rounded-xl bg-neutral-100 px-4">
          <Search :size="18" class="text-neutral-500" />
          <input v-model="shop.search" type="search" placeholder="Produkt suchen ..." class="min-h-12 w-full bg-transparent outline-none" />
        </label>
        <label class="flex min-h-12 items-center gap-2 rounded-xl border px-3 text-sm font-semibold" style="border-color: var(--color-border)">
          <SlidersHorizontal :size="17" />
          <span class="sr-only">Sortierung</span>
          <select v-model="shop.sort" class="bg-transparent pr-2 outline-none">
            <option value="featured">Empfohlen</option>
            <option value="price-asc">Preis: niedrig zuerst</option>
            <option value="price-desc">Preis: hoch zuerst</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>
      <div class="mt-3 flex flex-wrap gap-2">
        <button v-for="item in categories" :key="item.value" @click="shop.category = item.value" class="rounded-full px-4 py-2 text-sm font-bold transition" :class="shop.category === item.value ? 'text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'" :style="shop.category === item.value ? 'background: var(--brand-primary)' : ''">{{ item.label }}</button>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between gap-4">
      <p class="text-sm text-neutral-500">{{ shop.filteredProducts.length }} Produkt(e)</p>
      <button v-if="shop.search || shop.category !== 'all'" class="text-sm font-bold text-[var(--brand-primary)] hover:underline" @click="shop.search = ''; shop.category = 'all'">Filter zurücksetzen</button>
    </div>

    <div v-if="shop.filteredProducts.length" class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard v-for="product in shop.filteredProducts" :key="product.id" :product="product" />
    </div>
    <div v-else class="card mt-6 p-10 text-center">
      <h2 class="font-bold">Keine Produkte gefunden</h2>
      <p class="mt-2 text-sm text-neutral-600">Versuchen Sie einen anderen Suchbegriff oder eine andere Kategorie.</p>
    </div>
  </main>
</template>
