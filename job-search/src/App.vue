<script setup lang="ts">
  import { RouterView } from "vue-router";
  import MainNav from "@/components/MainNav.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav title="Main Navigation" />
    </div>
  </header>
  <RouterView />
</template>
