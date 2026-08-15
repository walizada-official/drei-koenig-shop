<script setup lang="ts">
import { BadgeCheck, MessageCircle, Shapes } from 'lucide-vue-next'
</script>

<template>
  <main>
    <section class="container-shell pt-10 pb-[var(--section-space)] lg:pt-12">
      <div class="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p class="eyebrow">Über uns</p>
          <h1 class="page-title mt-3">Drei König GmbH</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">Drei König GmbH soll unterschiedliche, sorgfältig ausgewählte Produkte übersichtlich an einem Ort anbieten – mit persönlichem Kontakt statt kompliziertem Bestellprozess.</p>
          <p class="mt-4 max-w-2xl leading-7 text-neutral-600">Die konkrete Firmengeschichte, Lieferanten, Teamangaben und Qualitätsversprechen sind aktuell noch Platzhalter und können später zentral ergänzt werden.</p>
        </div>
        <div class="rounded-[2rem] p-9 text-white md:p-10" style="background: var(--brand-primary)">
          <p class="text-sm font-bold uppercase tracking-widest text-white/60">Unser Ansatz</p>
          <h2 class="mt-4 font-serif text-4xl">Einfach. Persönlich. Verlässlich.</h2>
          <div class="mt-8 grid gap-6 text-sm leading-6 text-white/80">
            <div class="flex gap-3"><Shapes :size="21" class="mt-0.5 shrink-0 text-white" /><p><strong class="text-white">Klare Auswahl:</strong> Produkte werden nach verständlichen Kategorien organisiert.</p></div>
            <div class="flex gap-3"><MessageCircle :size="21" class="mt-0.5 shrink-0 text-white" /><p><strong class="text-white">Direkter Kontakt:</strong> Fragen und Produktanfragen bequem per WhatsApp.</p></div>
            <div class="flex gap-3"><BadgeCheck :size="21" class="mt-0.5 shrink-0 text-white" /><p><strong class="text-white">Flexibel:</strong> Sortiment und Kategorien können später einfach erweitert werden.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y bg-white py-16" style="border-color: var(--color-border)">
      <div class="container-shell">
        <p class="eyebrow">Wofür wir stehen</p>
        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <div class="rounded-[1.4rem] bg-[var(--color-surface-muted)] p-6"><p class="text-3xl font-serif">01</p><h2 class="mt-5 text-xl font-bold">Übersichtlich</h2><p class="mt-3 text-sm leading-6 text-neutral-600">Ein Shop, in dem Produkte schnell gefunden und verstanden werden können.</p></div>
          <div class="rounded-[1.4rem] bg-[var(--color-surface-muted)] p-6"><p class="text-3xl font-serif">02</p><h2 class="mt-5 text-xl font-bold">Persönlich</h2><p class="mt-3 text-sm leading-6 text-neutral-600">Direkter Kontakt für Fragen, Beratung und Produktanfragen.</p></div>
          <div class="rounded-[1.4rem] bg-[var(--color-surface-muted)] p-6"><p class="text-3xl font-serif">03</p><h2 class="mt-5 text-xl font-bold">Erweiterbar</h2><p class="mt-3 text-sm leading-6 text-neutral-600">Die Plattform ist für neue Kategorien, Produkte und spätere Shop-Funktionen vorbereitet.</p></div>
        </div>
      </div>
    </section>
  </main>
</template>
