class Ferrari {
  static carsExported = 100; // class properties rather than object properties

  // access modifiers also work
  // public is the default

  private static carsManufactured = 100; // can only be accessed within the class
  private static _name = "ferrari"; // it's a good convention to keep the private variables name start with an underscore , like i did here

  #carsRecycled = 100; // this means private fields, meaning chrome debugger tools can get this, it's not secure, it's just private

  protected printCompanyName = () => {
    console.log(Ferrari._name);
  };

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

Ferrari.carsManufactured = 0; // err because carsManufactured is private static member of class Ferrari

const latest_ferrari = new Ferrari("latest");

latest_ferrari.printModel();
Ferrari.incrementCarsExported();
Ferrari.printCarsExported(); // should print 101
