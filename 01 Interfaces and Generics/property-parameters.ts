class PersonWithoutShorthand {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}
class PersonWithShorthand {
  // The 'private' modifier makes these constructor arguments declare and initialize properties automatically
  constructor(
    private readonly name: string, // you can also make properties readonly
    private age: number,
  ) {}

  public greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

// Usage remains the same
const alice = new PersonWithShorthand("Alice", 30);
alice.greet();

/*
The main use of property parameters is to:
-- Reduce boilerplate: You avoid having to declare the property explicitly and then assign it in the constructor body.
-- Improve readability: It makes the definition of simple data-holding classes cleaner and easier to scan.
-- Enforce access control: By using modifiers like private or protected, you ensure the properties are correctly encapsulated from the moment they are declared and initialized
*/
