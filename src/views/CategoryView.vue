<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard.vue'
import type { ProductCategory } from '@/types/product'

const route = useRoute()
const category = computed(() => categories.find((item) => item.key === route.params.category))
const categoryProducts = computed(() => category.value ? products.filter((p) => p.category === category.value?.key) : [])
const otherCategories = computed(() => categories.filter((item) => item.key !== category.value?.key))
</script>

<template>
  <main v-if="category">
    <section class="container-shell pt-10 pb-14 lg:pt-14">
      <RouterLink to="/kategorien" class="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-neutral-950"><ArrowLeft :size="17" /> Alle Kategorien</RouterLink>
      <div class="mt-7 grid overflow-hidden rounded-[2rem] bg-[var(--brand-primary)] text-white lg:grid-cols-[.9fr_1.1fr]">
        <div class="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-white/65">Kategorie</p>
          <h1 class="mt-3 font-display text-5xl leading-[.98] sm:text-6xl">{{ category.name }}</h1>
          <p class="mt-5 max-w-xl text-lg leading-8 text-white/75">{{ category.description }}</p>
          <p class="mt-7 text-sm font-bold">{{ categoryProducts.length }} Produkt{{ categoryProducts.length === 1 ? '' : 'e' }} in diesem Bereich</p>
        </div>
        <img :src="category.image" :alt="category.name" class="min-h-[300px] h-full w-full object-cover lg:min-h-[430px]" />
      </div>
    </section>

    <section class="border-t bg-white py-14" style="border-color: var(--color-border)">
      <div class="container-shell">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div><p class="eyebrow">{{ category.shortName }}</p><h2 class="mt-2 text-4xl font-display sm:text-5xl">Alle Produkte</h2></div>
          <RouterLink :to="`/shop?category=${category.key}`" class="inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)]">Im Shop filtern <ArrowRight :size="17" /></RouterLink>
        </div>
        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><ProductCard v-for="product in categoryProducts" :key="product.id" :product="product" /></div>
      </div>
    </section>

    <section class="container-shell py-14">
      <p class="eyebrow">Weitere Bereiche</p>
      <div class="mt-6 grid gap-4 sm:grid-cols-3">
        <RouterLink v-for="item in otherCategories" :key="item.key" :to="`/kategorie/${item.key}`" class="group relative min-h-52 overflow-hidden rounded-[1.5rem]">
          <img :src="item.image" :alt="item.name" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-5 text-white"><p class="text-xl font-bold">{{ item.name }}</p><p class="mt-1 text-sm text-white/75">Entdecken →</p></div>
        </RouterLink>
      </div>
    </section>
  </main>
  <main v-else class="container-shell section-space text-center"><h1 class="page-title">Kategorie nicht gefunden</h1><RouterLink to="/kategorien" class="btn-primary mt-6">Alle Kategorien</RouterLink></main>
</template>
