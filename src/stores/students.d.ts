import type { Student } from "@/services/studentTypes";
export declare const useStudentsStore: import("pinia").StoreDefinition<"students", import("pinia")._UnwrapAll<Pick<{
    students: import("vue").Ref<{
        name: string;
        level: string;
        description: () => string;
    }[], Student[] | {
        name: string;
        level: string;
        description: () => string;
    }[]>;
    addStudent: (type: string, name: string) => void;
}, "students">>, Pick<{
    students: import("vue").Ref<{
        name: string;
        level: string;
        description: () => string;
    }[], Student[] | {
        name: string;
        level: string;
        description: () => string;
    }[]>;
    addStudent: (type: string, name: string) => void;
}, never>, Pick<{
    students: import("vue").Ref<{
        name: string;
        level: string;
        description: () => string;
    }[], Student[] | {
        name: string;
        level: string;
        description: () => string;
    }[]>;
    addStudent: (type: string, name: string) => void;
}, "addStudent">>;
