<script setup lang="ts">
import { ArrowRight, MessageCircle } from 'lucide-vue-next'
import ProductCard from '@/components/product/ProductCard.vue'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { buildWhatsAppUrl } from '@/utils/whatsapp'

const featured = products.filter((p) => p.featured).slice(0, 4)
const heroSolar = products.find((product) => product.slug === 'solar-panel') ?? products[0]
const heroStorage = products.find((product) => product.slug === 'gokwh-rack-batteriespeicher-5120wh') ?? products[0]
const heroFitness = products.find((product) => product.category === 'fitness') ?? products[0]
</script>

<template>
  <main>
    <section class="home-hero">
      <div class="home-hero__orb home-hero__orb--one" aria-hidden="true"></div>
      <div class="home-hero__orb home-hero__orb--two" aria-hidden="true"></div>

      <div class="container-shell home-hero__inner">
        <div class="home-hero__copy">
          <div class="home-hero__kicker"><span></span>Solar · Speicher · Mehr</div>
          <h1 class="home-hero__title">
            Energie,<br>
            <em>die bewegt.</em>
          </h1>
          <p class="home-hero__lead">
            Solartechnik und ausgewählte Produkte. Einfach entdecken und direkt anfragen.
          </p>

          <div class="home-hero__actions">
            <RouterLink to="/shop" class="btn-primary home-hero__primary">Produkte entdecken <ArrowRight :size="18" /></RouterLink>
            <a :href="buildWhatsAppUrl()" target="_blank" rel="noopener" class="btn-secondary"><MessageCircle :size="18" /> Direkt anfragen</a>
          </div>
        </div>

        <div class="hero-stage" aria-label="Ausgewählte Produkte">
          <div class="hero-stage__ring" aria-hidden="true"></div>
          <div class="hero-stage__ring hero-stage__ring--small" aria-hidden="true"></div>

          <RouterLink :to="`/produkt/${heroSolar.slug}`" class="hero-product hero-product--main">
            <span class="hero-product__eyebrow">Neu im Sortiment</span>
            <img :src="heroSolar.image" :alt="heroSolar.name" />
            <span class="hero-product__info"><small>Solar & Energie</small><strong>{{ heroSolar.name }}</strong></span>
          </RouterLink>

          <RouterLink :to="`/produkt/${heroStorage.slug}`" class="hero-product hero-product--storage">
            <img :src="heroStorage.image" :alt="heroStorage.name" />
            <span class="hero-product__info"><small>Energiespeicher</small><strong>5120 Wh Leistung</strong></span>
          </RouterLink>

          <RouterLink :to="`/produkt/${heroFitness.slug}`" class="hero-product hero-product--fitness">
            <img :src="heroFitness.image" :alt="heroFitness.name" />
            <span class="hero-product__info"><small>Fitness & Alltag</small><strong>{{ heroFitness.name }}</strong></span>
          </RouterLink>

          <div class="hero-stage__badge">
            <span class="hero-stage__pulse"></span>
            <strong>Direkt verfügbar</strong>
            <small>Persönlich anfragen</small>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space bg-white">
      <div class="container-shell">
        <div class="flex flex-wrap items-end justify-between gap-5">
          <div class="section-heading">
            <p class="eyebrow">Kategorien</p>
            <h2 class="page-title mt-3">Direkt zum passenden Bereich.</h2>
            <p class="mt-4 max-w-2xl leading-7 text-neutral-600">
              Wählen Sie eine Kategorie und sehen Sie sofort nur die Produkte, die Sie interessieren.
            </p>
          </div>
          <RouterLink to="/kategorien" class="btn-ghost">Alle Kategorien <ArrowRight :size="17" /></RouterLink>
        </div>

        <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <RouterLink
            v-for="cat in categories"
            :key="cat.key"
            :to="`/kategorie/${cat.key}`"
            class="group relative min-h-[285px] overflow-hidden rounded-[1.6rem]"
          >
            <img :src="cat.image" :alt="cat.name" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>
            <div class="absolute inset-x-5 bottom-5 text-white">
              <h3 class="text-xl font-bold">{{ cat.name }}</h3>
              <p class="mt-2 text-sm leading-6 text-white/80">{{ cat.description }}</p>
              <span class="mt-4 inline-flex items-center gap-2 text-sm font-bold">Produkte ansehen <ArrowRight :size="16" /></span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-shell">
        <div class="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="eyebrow">Ausgewählt</p>
            <h2 class="page-title mt-3">Beliebte Produkte</h2>
          </div>
          <RouterLink to="/shop" class="btn-ghost">Alle Produkte <ArrowRight :size="17" /></RouterLink>
        </div>

        <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard v-for="product in featured" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <section class="container-shell py-12 md:py-14">
      <div class="overflow-hidden rounded-[2rem] px-6 py-9 text-white md:px-10 md:py-10" style="background: var(--brand-primary)">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[.14em] text-white/65">Noch Fragen?</p>
            <h2 class="mt-2 font-serif text-3xl leading-tight md:text-4xl">Schreiben Sie uns direkt per WhatsApp.</h2>
            <p class="mt-2 text-sm text-white/70 md:text-base">Produkt nennen, Frage senden und Details persönlich klären.</p>
          </div>
          <a :href="buildWhatsAppUrl()" target="_blank" rel="noopener" class="whatsapp-cta">
            <MessageCircle :size="20" /> Per WhatsApp anfragen
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
