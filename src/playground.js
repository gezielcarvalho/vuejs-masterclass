class Developer {
    name;
    age;
    salary;
    experience;
    textStack;
    isEmployed;
    doubleSalary;
    constructor(name, age, salary, experience, textStack = ["Vue.js", "React", "Angular"], isEmployed = true, doubleSalary = () => {
        this.salary *= 2;
        this.isEmployed = false;
    }) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.experience = experience;
        this.textStack = textStack;
        this.isEmployed = isEmployed;
        this.doubleSalary = doubleSalary;
    }
}
const developer = new Developer("John", 30, 1000, 5, ["Vue.js"], true);
console.log(developer.salary);
developer.doubleSalary();
console.log(developer.salary);
console.log(developer.isEmployed);
export const evenOrOdd = (num) => {
    return num % 2 === 0 ? "even" : "odd";
};
export const multiply = (factor1, factor2) => factor1 * factor2;
export const divide = (dividend, divisor) => {
    if (divisor === 0) {
        throw new Error("Division by zero");
    }
    return dividend / divisor;
};
