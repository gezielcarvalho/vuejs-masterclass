<script setup lang="ts">
  import { RouterView } from "vue-router";
  import MainNav from "@/components/MainNav.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
    </div>
  </header>
  <RouterView />
</template>
