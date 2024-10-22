<script setup lang="ts">
  import { provide } from "vue";
  import { TeamsService } from "@/services/teamsService";
  import { RouterView } from "vue-router";
  import MainNav from "@/components/MainNav.vue";

  // Create an instance of TeamsService
  const teamsService = new TeamsService();

  // Provide the service for dependency injection
  provide("teamsService", teamsService);
</script>

<template>
  <header>
    <div class="wrapper">
      <MainNav />
    </div>
  </header>
  <RouterView />
</template>
