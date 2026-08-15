<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { categories } from '@/data/categories'
</script>

<template>
  <main class="container-shell pt-10 pb-[var(--section-space)] lg:pt-12">
    <div class="section-heading">
      <p class="eyebrow">Sortiment</p>
      <h1 class="page-title mt-3">Kategorien</h1>
      <p class="mt-5 text-lg leading-8 text-neutral-600">Von Energie bis Alltag: Wählen Sie einen Bereich und entdecken Sie passende Produkte.</p>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <RouterLink v-for="item in categories" :key="item.key" :to="`/kategorie/${item.key}`" class="group grid overflow-hidden rounded-[1.7rem] border bg-white sm:grid-cols-[1.05fr_.95fr]" style="border-color: var(--color-border)">
        <div class="overflow-hidden">
          <img :src="item.image" :alt="item.name" class="aspect-[16/11] h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        </div>
        <div class="flex flex-col justify-center p-7">
          <p class="eyebrow">Kategorie</p>
          <h2 class="mt-2 text-2xl font-bold">{{ item.name }}</h2>
          <p class="mt-3 leading-7 text-neutral-600">{{ item.description }}</p>
          <p class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)]">Produkte ansehen <ArrowRight :size="17" /></p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
