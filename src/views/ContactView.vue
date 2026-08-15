<script setup lang="ts">
import { ref } from 'vue'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-vue-next'
import { siteConfig } from '@/config/site'
import { buildWhatsAppUrl } from '@/utils/whatsapp'

const name = ref('')
const email = ref('')
const message = ref('')

function sendEmail() {
  const subject = encodeURIComponent(`Anfrage von ${name.value || 'Website-Besucher'}`)
  const body = encodeURIComponent(`Name: ${name.value}\nE-Mail: ${email.value}\n\n${message.value}`)
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <main class="container-shell pt-10 pb-[var(--section-space)] lg:pt-12">
    <div class="max-w-2xl"><p class="eyebrow">Kontakt</p><h1 class="page-title mt-3">Wie können wir helfen?</h1><p class="mt-5 text-lg leading-8 text-neutral-600">Für Produktfragen und Bestellungen können Sie uns direkt kontaktieren.</p></div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <a :href="buildWhatsAppUrl()" target="_blank" rel="noopener" class="card p-6 transition hover:-translate-y-1 hover:shadow-md"><MessageCircle :size="24"/><h2 class="mt-5 text-lg font-bold">WhatsApp</h2><p class="mt-2 text-sm leading-6 text-neutral-600">Schnellster Weg für Produktanfragen.</p></a>
      <a :href="`mailto:${siteConfig.email}`" class="card p-6 transition hover:-translate-y-1 hover:shadow-md"><Mail :size="24"/><h2 class="mt-5 text-lg font-bold">E-Mail</h2><p class="mt-2 break-all text-sm leading-6 text-neutral-600">{{ siteConfig.email }}</p></a>
      <a :href="`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`" class="card p-6 transition hover:-translate-y-1 hover:shadow-md"><Phone :size="24"/><h2 class="mt-5 text-lg font-bold">Telefon</h2><p class="mt-2 text-sm leading-6 text-neutral-600">{{ siteConfig.phoneDisplay }}</p></a>
      <div class="card p-6"><MapPin :size="24"/><h2 class="mt-5 text-lg font-bold">Adresse</h2><p class="mt-2 text-sm leading-6 text-neutral-600">{{ siteConfig.address }}</p></div>
    </div>

    <section class="mt-14 grid gap-8 rounded-[2rem] bg-white p-6 md:p-9 lg:grid-cols-[.8fr_1.2fr]">
      <div><p class="eyebrow">Nachricht</p><h2 class="mt-3 font-serif text-4xl">Schreiben Sie uns.</h2><p class="mt-4 leading-7 text-neutral-600">Dieses Formular öffnet aktuell Ihr E-Mail-Programm. Später kann es an ein echtes Backend oder einen Formulardienst angebunden werden.</p></div>
      <form class="grid gap-4" @submit.prevent="sendEmail">
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-2 text-sm font-bold">Name<input v-model="name" required class="min-h-12 rounded-xl border bg-[var(--color-bg)] px-4 font-normal outline-none focus:border-[var(--brand-primary)]" style="border-color: var(--color-border)" /></label>
          <label class="grid gap-2 text-sm font-bold">E-Mail<input v-model="email" required type="email" class="min-h-12 rounded-xl border bg-[var(--color-bg)] px-4 font-normal outline-none focus:border-[var(--brand-primary)]" style="border-color: var(--color-border)" /></label>
        </div>
        <label class="grid gap-2 text-sm font-bold">Ihre Nachricht<textarea v-model="message" required rows="5" class="rounded-xl border bg-[var(--color-bg)] px-4 py-3 font-normal outline-none focus:border-[var(--brand-primary)]" style="border-color: var(--color-border)"></textarea></label>
        <button type="submit" class="btn-primary justify-self-start"><Send :size="18" /> E-Mail vorbereiten</button>
      </form>
    </section>
  </main>
</template>
