// LITERAL TYPES
// This means that the value of state cannot be anything except the values mentioned (refer example below)
let state: "alive" | "dead";

state = "alive"; // OK
state = "dead"; // OK

state = "lmao dead"; // Error !
