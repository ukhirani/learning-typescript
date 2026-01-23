// suppose you had this interface imported from a library
interface THEINTERFACE {
  the_method(): void;
}

class my_class implements THEINTERFACE {
  the_method(): void {
    console.log();
  }
}

const obj1 = new my_class();
obj1.the_method(); // OK, works as expected
// but what if i want this interface to have the method of my own
obj1.the_method_i_need(); // NOT OK

interface THEINTERFACE {
  the_method_i_need(): void;
}

// well you can extend the functionality of your existing interface using open interfaces
// you can redeclare interfaces in typescript
class the_class implements THEINTERFACE {
  the_method(): void {
    console.log();
  }
  the_method_i_need(): void {
    console.log("ok");
  }
}

const obj2 = new the_class();

obj2.the_method(); // OK
obj2.the_method_i_need(); //OK
