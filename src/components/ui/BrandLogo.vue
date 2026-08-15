<script setup lang="ts">
const logoUrl = `${import.meta.env.BASE_URL}logos/logo-1.png`
</script>

<template>
  <RouterLink to="/" class="relative block h-14 w-40 shrink-0 overflow-hidden" aria-label="Drei Königen Trade – Startseite">
    <img
      :src="logoUrl"
      alt="Drei Königen Trade"
      class="absolute top-1/2 left-1/2 w-[180px] max-w-none -translate-x-1/2 -translate-y-1/2"
    />
  </RouterLink>
</template>
