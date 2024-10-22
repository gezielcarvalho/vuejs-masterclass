<!-- src/views/TeamsView.vue 
Dependency Injection: The service (TeamsService) is injected into the TeamsView
component, following the Dependency Injection pattern. This makes the TeamsView 
component independent of how the teams are managed or fetched, promoting loose 
coupling. 
-->
<script setup lang="ts">
  import { inject, onMounted, ref } from "vue";
  import { TeamsService, Team } from "@/services/teamsService";

  // Inject the teamsService
  const teamsService = inject<TeamsService>("teamsService");

  // Reactive properties for managing teams data
  const teams = ref<Team[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Fetch teams on component mount
  onMounted(async () => {
    if (teamsService) {
      try {
        isLoading.value = true;
        teams.value = await teamsService.getTeams();
      } catch (err) {
        error.value = "Failed to fetch teams";
      } finally {
        isLoading.value = false;
      }
    } else {
      error.value = "Teams service not available";
    }
  });
</script>

<template>
  <div class="teams">
    <h1>Teams at Sabre</h1>

    <div v-if="isLoading">Loading teams...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="team in teams" :key="team.id">
        <h2>{{ team.name }}</h2>
        <p>{{ team.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .teams {
    padding: 1rem;
  }

  h1 {
    color: #007bff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  li h2 {
    margin: 0 0 0.5rem;
    color: #333;
  }
</style>
