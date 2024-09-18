<script setup lang="ts">
  import { RouterLink } from "vue-router";

  interface IMainNavProps {
    title: string;
  }

  const props = defineProps<IMainNavProps>();
</script>
<template>
  <header class="w-full text-sm">{{ props.title }}</header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
