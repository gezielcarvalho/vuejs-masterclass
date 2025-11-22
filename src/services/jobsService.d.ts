export interface Job {
    id: number;
    title: string;
    location: string;
    description: string;
}
export declare function fetchJobs(): Promise<Job[]>;
