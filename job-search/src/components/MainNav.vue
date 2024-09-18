<script setup lang="ts">
  import { RouterLink } from "vue-router";
</script>
<template>
  <header class="w-full text-sm"></header>
  <nav class="fixed left-0 top-0 h-16 w-full bg-white">
    <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
      <div class="flex h-full items-center space-x-2 pl-8 text-lg">
        <RouterLink to="/">Sabre Careers - Demo</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </nav>
</template>
