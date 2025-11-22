// src/services/studentFactory.ts
export class Undergraduate {
    name;
    constructor(name) {
        this.name = name;
    }
    level = "Undergraduate";
    description() {
        return `${this.name} is an undergraduate student pursuing a bachelor's degree.`;
    }
}
export class Graduate {
    name;
    constructor(name) {
        this.name = name;
    }
    level = "Graduate";
    description() {
        return `${this.name} is a graduate student pursuing a master's degree.`;
    }
}
export class PhD {
    name;
    constructor(name) {
        this.name = name;
    }
    level = "PhD";
    description() {
        return `${this.name} is a PhD student doing advanced research in their field.`;
    }
}
