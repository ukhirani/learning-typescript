class Ferrari {
  static carsExported = 100; // class properties rather than object properties

  static {
    console.log("static called");
    console.log(
      "this will be called before anything when the class is declared",
    );

    // can also be used to instantiate the static members, say carsExported
    // this.carsExported = fetch("www.example.com/api/getCarsExported")
  }

  static incrementCarsExported() {
    this.carsExported++; // here this refers to the class
    // very similar to Ferrari.carsExported++
  }

  static printCarsExported() {
    console.log(Ferrari.carsExported);
  }

  // the properties
  model: string;

  // the constructor
  constructor(model: string) {
    this.model = model; // here this refers to the instance of the class
  }

  // the methods
  printModel() {
    console.log(this.model);
  }
} // this is a normal implementation of any class

const latest_ferrari = new Ferrari("latest");

latest_ferrari.printModel();
Ferrari.incrementCarsExported();
Ferrari.printCarsExported(); // should print 101
