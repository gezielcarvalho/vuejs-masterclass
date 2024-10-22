// src/services/studentFactory.ts

export interface Student {
  name: string;
  level: string;
  description(): string;
}

export class Undergraduate implements Student {
  constructor(public name: string) {}

  level = "Undergraduate";

  description() {
    return `${this.name} is an undergraduate student pursuing a bachelor's degree.`;
  }
}

export class Graduate implements Student {
  constructor(public name: string) {}

  level = "Graduate";

  description() {
    return `${this.name} is a graduate student pursuing a master's degree.`;
  }
}

export class PhD implements Student {
  constructor(public name: string) {}

  level = "PhD";

  description() {
    return `${this.name} is a PhD student doing advanced research in their field.`;
  }
}
