// src/stores/jobs.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchJobs } from "@/services/jobsService";
export const useJobsStore = defineStore("jobs", () => {
    const jobs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    async function loadJobs() {
        isLoading.value = true;
        error.value = null;
        try {
            jobs.value = await fetchJobs();
        }
        catch (err) {
            error.value = "Failed to load jobs";
        }
        finally {
            isLoading.value = false;
        }
    }
    return { jobs, isLoading, error, loadJobs };
});
