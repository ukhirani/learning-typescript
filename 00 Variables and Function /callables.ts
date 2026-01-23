// how would we type a function itself (not the return type)
// how would we type a variable that is designed to hold a function

interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNum = (x: number, y: number) => number;

// these two above exaclty mean the same thing
// they are a "type" of a function

const adder: TwoNumberCalculation = (a, b) => a + b; // Ok
const adder_err: TwoNumberCalculation = (a: number, b: string) => a - b; // Err
const subtracter: TwoNum = (a, b) => a - b; // Err
