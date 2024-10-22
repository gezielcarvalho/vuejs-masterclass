// src/services/jobsService.ts
export interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    description: "Work on exciting projects with modern frontend technologies."
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "New York",
    description: "Develop scalable backend systems using Node.js."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "San Francisco",
    description: "Design user-friendly and beautiful interfaces."
  }
];

// Simulated async function to fetch jobs
export function fetchJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 1000); // Simulating 1 second delay
  });
}
