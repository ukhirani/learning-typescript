//lets's say we have a scenario like this
//u want an adder function that performs either of these two behaviours
//---> accepts two strings and concatenates them
//---> accepts two numbers and adds them

// let's see the types that might be involved here

type NumAdderType = (a: number, b: number) => number; // type of callback that accepts two numbers and returns a number
type StringAdderType = (a: string, b: string) => string; // type of callback that accepts two strings and returns a string

// now let's say you implement a function that accepts these two arguments and then returns the intended output

type NumOrString = number | string | void;

// here's how we would typically do it
function handleAddition( // first head
  arg1: number,
  arg2: number,
  callback: NumAdderType,
): number;

function handleAddition( // second head
  arg1: string,
  arg2: string,
  callback: StringAdderType,
): string;
// the initial implementation
function handleAddition( // third head
  arg1: NumOrString,
  arg2: NumOrString,
  callback: NumAdderType | StringAdderType,
): NumOrString {}

// but how would we handle the cases where the arg1 is num and arg2 is string and we throw an error (except if else that include typeof)

// to solve this, we can do function overloading.
// here's how you would implement these

// just write the function heads of the correct implementations

handleAddition(1, 2, (x, y) => {
  return x + y;
}); // when you type handleAddition you can see the LSP say two implementations (+1 overload)
// note that you can never infer the third head
