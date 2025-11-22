import type { Student } from "./studentTypes";
export declare class StudentFactory {
    static createStudent(type: string, name: string): Student;
}
