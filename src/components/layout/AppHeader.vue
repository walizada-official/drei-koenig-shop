<script setup lang="ts">
import { Menu, Search, X } from 'lucide-vue-next'
import { ref } from 'vue'
import BrandLogo from '@/components/ui/BrandLogo.vue'

const open = ref(false)
const links = [
  { label: 'Startseite', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Kategorien', to: '/kategorien' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Kontakt', to: '/kontakt' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b backdrop-blur-xl" style="border-color: color-mix(in srgb, var(--color-border), transparent 20%); background: color-mix(in srgb, var(--color-bg), transparent 8%)">
    <div class="container-shell flex min-h-18 items-center justify-between gap-4">
      <BrandLogo />
      <nav class="hidden items-center gap-2 md:flex" aria-label="Hauptnavigation">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-4 py-2 text-sm font-semibold text-neutral-600 transition hover:bg-white hover:text-neutral-950"
          exact-active-class="!bg-white !text-neutral-950 shadow-sm"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <div class="flex items-center gap-2">
        <RouterLink to="/shop" class="hidden rounded-full p-2.5 transition hover:bg-white sm:inline-flex" aria-label="Shop durchsuchen"><Search :size="20" /></RouterLink>
        <button class="rounded-full p-2.5 transition hover:bg-white md:hidden" @click="open = !open" :aria-expanded="open" aria-label="Menü öffnen">
          <X v-if="open" :size="22" /><Menu v-else :size="22" />
        </button>
      </div>
    </div>
    <nav v-if="open" class="container-shell grid gap-2 border-t py-4 md:hidden" style="border-color: var(--color-border)">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="rounded-xl px-3 py-3 font-semibold hover:bg-white" exact-active-class="bg-white" @click="open = false">{{ link.label }}</RouterLink>
    </nav>
  </header>
</template>
