<script setup lang="ts">
import { ArrowUpRight, MessageCircle } from 'lucide-vue-next'
import type { Product } from '@/types/product'
import { formatCurrency } from '@/utils/currency'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import { getCategoryName } from '@/data/categories'

defineProps<{ product: Product }>()
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl" style="border-color: var(--color-border)">
    <RouterLink :to="`/produkt/${product.slug}`" class="block">
      <div class="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
        <span v-if="product.badge" class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">{{ product.badge }}</span>
      </div>
    </RouterLink>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start justify-between gap-4">
        <div>
          <RouterLink :to="`/kategorie/${product.category}`" class="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-[var(--brand-primary)] hover:underline">{{ getCategoryName(product.category) }}</RouterLink>
          <RouterLink :to="`/produkt/${product.slug}`" class="mt-1 block text-lg font-bold leading-snug hover:underline">{{ product.name }}</RouterLink>
        </div>
        <RouterLink :to="`/produkt/${product.slug}`" class="product-arrow grid size-9 shrink-0 place-items-center rounded-full bg-neutral-100 transition" :aria-label="`${product.name} ansehen`"><ArrowUpRight :size="17" /></RouterLink>
      </div>
      <p class="mt-3 flex-1 text-sm leading-6 text-neutral-600">{{ product.shortDescription }}</p>
      <div class="mt-5 flex items-end justify-between gap-3 border-t pt-4" style="border-color: var(--color-border)">
        <p class="text-base font-extrabold">{{ product.price !== null ? formatCurrency(product.price) : product.priceLabel }}</p>
        <a :href="buildWhatsAppUrl(product)" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] hover:underline" @click.stop>
          <MessageCircle :size="15" /> Anfragen
        </a>
      </div>
    </div>
  </article>
</template>
