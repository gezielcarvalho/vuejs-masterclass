// src/stores/jobs.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchJobs } from "@/services/jobsService";
import type { Job } from "@/services/jobsService";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref<Job[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  async function loadJobs() {
    isLoading.value = true;
    error.value = null;
    try {
      jobs.value = await fetchJobs();
    } catch (err) {
      error.value = "Failed to load jobs";
    } finally {
      isLoading.value = false;
    }
  }

  return { jobs, isLoading, error, loadJobs };
});
