<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { MessageCircle, ArrowLeft, Check, Minus, Plus, ShieldCheck, Truck, Images } from 'lucide-vue-next'
import { products } from '@/data/products'
import { formatCurrency } from '@/utils/currency'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import { getCategoryName } from '@/data/categories'
import ProductCard from '@/components/product/ProductCard.vue'

const route = useRoute()
const quantity = ref(1)
const activeImage = ref(0)
const product = computed(() => products.find((p) => p.slug === route.params.slug))
const related = computed(() => product.value ? products.filter((p) => p.category === product.value?.category && p.id !== product.value.id).slice(0, 3) : [])
const whatsappUrl = computed(() => product.value ? buildWhatsAppUrl(product.value, quantity.value) : buildWhatsAppUrl())
watch(() => route.params.slug, () => { quantity.value = 1; activeImage.value = 0 })
</script>

<template>
  <main v-if="product">
    <section class="container-shell section-space">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <RouterLink :to="`/kategorie/${product.category}`" class="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-neutral-950"><ArrowLeft :size="17" /> {{ getCategoryName(product.category) }}</RouterLink>
        <RouterLink :to="`/shop?category=${product.category}`" class="text-sm font-bold text-[var(--brand-primary)] hover:underline">Alle Produkte dieser Kategorie →</RouterLink>
      </div>
      <div class="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <img :src="product.images[activeImage] || product.image" :alt="`${product.name} – Bild ${activeImage + 1}`" class="aspect-square h-full w-full object-cover" />
          </div>
          <div v-if="product.images.length > 1" class="mt-4 grid grid-cols-3 gap-3">
            <button v-for="(image, index) in product.images" :key="image" class="relative overflow-hidden rounded-xl border-2 bg-white transition" :class="activeImage === index ? 'border-[var(--brand-primary)]' : 'border-transparent opacity-75 hover:opacity-100'" @click="activeImage = index">
              <img :src="image" :alt="`${product.name} Vorschau ${index + 1}`" class="aspect-[4/3] h-full w-full object-cover" loading="lazy" />
              <span v-if="index === 0" class="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold"><Images :size="11" /> Hauptbild</span>
            </button>
          </div>
        </div>
        <div class="lg:py-4">
          <p class="eyebrow">{{ getCategoryName(product.category) }}</p>
          <h1 class="page-title mt-3">{{ product.name }}</h1>
          <p class="mt-5 text-lg leading-8 text-neutral-600">{{ product.description }}</p>
          <p class="mt-7 text-3xl font-black">{{ product.price !== null ? formatCurrency(product.price) : product.priceLabel }}</p>
          <div class="mt-7 flex flex-wrap items-center gap-3">
            <div class="inline-flex min-h-12 items-center rounded-full border bg-white" style="border-color: var(--color-border)"><button class="grid size-11 place-items-center" aria-label="Menge verringern" @click="quantity = Math.max(1, quantity - 1)"><Minus :size="16" /></button><span class="min-w-9 text-center font-bold">{{ quantity }}</span><button class="grid size-11 place-items-center" aria-label="Menge erhöhen" @click="quantity += 1"><Plus :size="16" /></button></div>
            <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn-primary flex-1 sm:flex-none"><MessageCircle :size="19" /> Per WhatsApp anfragen</a>
          </div>
          <div class="mt-7 grid gap-3 sm:grid-cols-2"><div class="flex items-center gap-3 rounded-xl bg-white p-4"><ShieldCheck :size="20" class="text-[var(--brand-primary)]" /><div><p class="text-sm font-bold">Persönliche Anfrage</p><p class="text-xs text-neutral-500">Direkter Kontakt vor Bestellung</p></div></div><div class="flex items-center gap-3 rounded-xl bg-white p-4"><Truck :size="20" class="text-[var(--brand-primary)]" /><div><p class="text-sm font-bold">Lieferung in Deutschland</p><p class="text-xs text-neutral-500">Details bei der Anfrage klären</p></div></div></div>
          <div class="mt-10 border-t pt-8" style="border-color: var(--color-border)"><h2 class="text-lg font-bold">Produktdetails</h2><dl class="mt-5 grid gap-3"><div v-for="spec in product.specs" :key="spec.label" class="flex items-center justify-between gap-6 rounded-xl bg-white px-4 py-3"><dt class="flex items-center gap-2 text-sm text-neutral-600"><Check :size="16" /> {{ spec.label }}</dt><dd class="text-sm font-bold">{{ spec.value }}</dd></div></dl></div>
          <p class="mt-6 text-xs leading-5 text-neutral-500">Hinweis: Produktdaten, Preise, Verfügbarkeit und rechtliche Angaben sind Platzhalter und müssen vor Veröffentlichung geprüft werden.</p>
        </div>
      </div>
    </section>
    <section v-if="related.length" class="border-t bg-white py-16" style="border-color: var(--color-border)"><div class="container-shell"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="eyebrow">Mehr entdecken</p><h2 class="mt-2 text-3xl font-bold">Ähnliche Produkte</h2></div><RouterLink :to="`/kategorie/${product.category}`" class="text-sm font-bold text-[var(--brand-primary)] hover:underline">Kategorie ansehen →</RouterLink></div><div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ProductCard v-for="item in related" :key="item.id" :product="item" /></div></div></section>
  </main>
  <main v-else class="container-shell section-space text-center"><h1 class="page-title">Produkt nicht gefunden</h1><RouterLink to="/shop" class="btn-primary mt-6">Zum Shop</RouterLink></main>
</template>
