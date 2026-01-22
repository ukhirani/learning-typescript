type Nullable<T> = T | null;

// so it's more like a type made from the paramter T and the implementation ahead
//

let NullishNum: Nullable<number> = 5; // OK
NullishNum = null; // OK
NullishNum = "5"; // Err

let NullishString: Nullable<string> = "5"; // OK
NullishString = null; // OK
