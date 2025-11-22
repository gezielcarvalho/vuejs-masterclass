// src/services/teamsService.ts
export class TeamsService {
    teams = [
        {
            id: 1,
            name: "Frontend Team",
            description: "Works on the user interface and user experience."
        },
        { id: 2, name: "Backend Team", description: "Handles server-side logic and databases." },
        { id: 3, name: "DevOps Team", description: "Responsible for deployment and infrastructure." }
    ];
    // Method to fetch teams (simulated async function)
    async getTeams() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.teams);
            }, 1000); // Simulating a delay
        });
    }
}
