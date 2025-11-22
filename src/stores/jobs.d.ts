import type { Job } from "@/services/jobsService";
export declare const useJobsStore: import("pinia").StoreDefinition<"jobs", import("pinia")._UnwrapAll<Pick<{
    jobs: import("vue").Ref<{
        id: number;
        title: string;
        location: string;
        description: string;
    }[], Job[] | {
        id: number;
        title: string;
        location: string;
        description: string;
    }[]>;
    isLoading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    loadJobs: () => Promise<void>;
}, "error" | "isLoading" | "jobs">>, Pick<{
    jobs: import("vue").Ref<{
        id: number;
        title: string;
        location: string;
        description: string;
    }[], Job[] | {
        id: number;
        title: string;
        location: string;
        description: string;
    }[]>;
    isLoading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    loadJobs: () => Promise<void>;
}, never>, Pick<{
    jobs: import("vue").Ref<{
        id: number;
        title: string;
        location: string;
        description: string;
    }[], Job[] | {
        id: number;
        title: string;
        location: string;
        description: string;
    }[]>;
    isLoading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string | null, string | null>;
    loadJobs: () => Promise<void>;
}, "loadJobs">>;
