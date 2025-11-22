// src/services/studentFactory.ts
import { Undergraduate, Graduate, PhD } from "./studentTypes";
export class StudentFactory {
    static createStudent(type, name) {
        switch (type) {
            case "Undergraduate":
                return new Undergraduate(name);
            case "Graduate":
                return new Graduate(name);
            case "PhD":
                return new PhD(name);
            default:
                throw new Error("Invalid student type");
        }
    }
}
