<!-- src/views/JobsView.vue 
This approach implements the Observer Pattern by using Pinia to manage and 
reactively update the state of the jobs list. The JobsView component observes
changes in the Pinia store and updates the UI accordingly. 
-->
<script setup lang="ts">
  import { onMounted } from "vue";
  import { useJobsStore } from "@/stores/jobs";

  // Initialize the jobs store
  const jobsStore = useJobsStore();

  // Fetch jobs when the component is mounted
  onMounted(() => {
    jobsStore.loadJobs();
  });
</script>

<template>
  <div class="jobs">
    <h1>Available Jobs</h1>

    <div v-if="jobsStore.isLoading">Loading jobs...</div>
    <div v-else-if="jobsStore.error">{{ jobsStore.error }}</div>
    <ul v-else>
      <li v-for="job in jobsStore.jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
        <p><strong>Location:</strong> {{ job.location }}</p>
        <p>{{ job.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .jobs {
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
    background-color: #f8f9fa;
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  li h2 {
    margin: 0 0 0.5rem;
    color: #333;
  }
</style>
