// The " | " is called as the pipe operator

let numberOrString: number | string;

numberOrString = 4; // OK
numberOrString = "asdf"; // OK
numberOrString = {}; // Error

let nullishNumber: number | null;

nullishNumber = null; // OK
nullishNumber = 4; // OK
nullishNumber = "asdf"; // Error

// Here's how we can create an array of mixed types
let mixedArray: (number | string)[] = [1, 2, 3, "4", "5"]; // somehow this is cool
mixedArray = [1, 2, 3, undefined]; // Error

// This is how we can type the arrays too : simply by using " (type-union)[] "
