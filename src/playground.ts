class Developer {
  constructor(
    public name: string,
    public age: number,
    public salary: number,
    public experience: number,
    public textStack: string[] = ["Vue.js", "React", "Angular"],
    public isEmployed: boolean = true,
    public doubleSalary = () => {
      this.salary *= 2;
      this.isEmployed = false;
    }
  ) {}
}

const developer = new Developer("John", 30, 1000, 5, ["Vue.js"], true);

console.log(developer.salary);

developer.doubleSalary();

console.log(developer.salary);

console.log(developer.isEmployed);

export const evenOrOdd = (num: number) => {
  return num % 2 === 0 ? "even" : "odd";
};
