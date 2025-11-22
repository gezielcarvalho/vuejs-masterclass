export interface Student {
    name: string;
    level: string;
    description(): string;
}
export declare class Undergraduate implements Student {
    name: string;
    constructor(name: string);
    level: string;
    description(): string;
}
export declare class Graduate implements Student {
    name: string;
    constructor(name: string);
    level: string;
    description(): string;
}
export declare class PhD implements Student {
    name: string;
    constructor(name: string);
    level: string;
    description(): string;
}
