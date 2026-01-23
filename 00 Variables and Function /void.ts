// we know that any function taht doesn't return anything, returns void
// it basically means "do not check the return of the function"

// but where would it be useful ??

// let's see this example

type VoidReturningCallbacks = () => void;
type NullReturningCallbacks = () => null;

function AcceptVoidReturningCallbacks(callback: VoidReturningCallbacks) {
  callback();
}
function NullVoidReturningCallbacks(callback: NullReturningCallbacks) {
  callback();
}

let example_callback = () => {
  console.log();
};

AcceptVoidReturningCallbacks(example_callback); // OK - because it accepts callbacks that return void
AcceptNullReturningCallbacks(example_callback); // Err - because it doesn't accept callbacks that return void
