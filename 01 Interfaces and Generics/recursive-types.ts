// this is a good example of recursive types
type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [1, 2, 3, 4, 6, [1, 3, 4]]; // OK
const val1: NestedNumbers = [1, "2", 3, 4, 6, [1, 3, 4]]; // ERR

function fn_call(): number {
  return 1;
}

// much like the below implementation, where the RHS gets evaluated first i.e. the fn_call will get executed first
let fn_return = fn_call();

//type NestedNumbers = number | NestedNumbers[]; works much the same way

// now due to this we can declare an array of numbers and array of array of numbers to infinity
// that's the use case of recursive types

val.push([]); // OK
val.push([1, 23, 123, 12]); // OK
val.push([[[[1]]]]); // OK
val.push("err"); // ERR
val.push([{}]); // err
