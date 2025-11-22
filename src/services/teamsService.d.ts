export interface Team {
    id: number;
    name: string;
    description: string;
}
export declare class TeamsService {
    private teams;
    getTeams(): Promise<Team[]>;
}
