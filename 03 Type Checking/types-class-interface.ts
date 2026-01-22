// classes implement interfaces
// classes extend classes
// interfaces extend interfaces

interface Animal {
  walk(): void;
  bark(): string;
}

// now for the class Dog to implement the interface Animal it should implement all the methods of the interface Animal
class Dog implements Animal {
  walk(): void {
    console.log("walking");
  }
  bark(): string {
    return "woof";
  }
}
const doggy = new Dog();

doggy.walk();
console.log(doggy.bark());
