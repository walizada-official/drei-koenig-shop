<script setup lang="ts">
import { Mail, MessageCircle, Phone } from 'lucide-vue-next'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
</script>

<template>
  <footer class="mt-16 border-t bg-white" style="border-color: var(--color-border)">
    <div class="container-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <BrandLogo />
        <p class="mt-5 max-w-sm text-sm leading-7 text-neutral-600">{{ siteConfig.description }}</p>
      </div>
      <div>
        <h3 class="font-bold">Shop</h3>
        <div class="mt-4 grid gap-3 text-sm text-neutral-600"><RouterLink to="/shop">Alle Produkte</RouterLink><RouterLink to="/kategorien">Kategorien</RouterLink><RouterLink to="/faq">FAQ</RouterLink></div>
      </div>
      <div>
        <h3 class="font-bold">Unternehmen</h3>
        <div class="mt-4 grid gap-3 text-sm text-neutral-600"><RouterLink to="/ueber-uns">Über uns</RouterLink><RouterLink to="/kontakt">Kontakt</RouterLink><RouterLink to="/impressum">Impressum</RouterLink><RouterLink to="/datenschutz">Datenschutz</RouterLink><RouterLink to="/agb">AGB</RouterLink><RouterLink to="/widerruf">Widerruf</RouterLink></div>
      </div>
      <div>
        <h3 class="font-bold">Kontakt</h3>
        <div class="mt-4 grid gap-3 text-sm text-neutral-600">
          <a :href="buildWhatsAppUrl()" target="_blank" rel="noopener" class="flex items-center gap-2"><MessageCircle :size="16" /> WhatsApp</a>
          <a :href="`mailto:${siteConfig.email}`" class="flex items-center gap-2"><Mail :size="16" /> {{ siteConfig.email }}</a>
          <a :href="`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`" class="flex items-center gap-2"><Phone :size="16" /> {{ siteConfig.phoneDisplay }}</a>
        </div>
      </div>
    </div>
    <div class="border-t" style="border-color: var(--color-border)">
      <div class="container-shell flex flex-col gap-2 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ new Date().getFullYear() }} {{ siteConfig.companyName }}</span>
      </div>
    </div>
  </footer>
</template>
