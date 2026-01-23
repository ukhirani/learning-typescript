class Vehicle {
  honk() {
    console.log("honk");
  }
}

class Cycle extends Vehicle {
  override honk() {
    //you express your intent to override the class method
    console.log("tring tring");
  }
}

// in tsconfig : stop implicitOverride to get errors when you forget the override keyword
