// in ./typed-promises.ts we saw Promise<string>
// then what are these <> with the types
// these are the parameterized types or you can say parameters to the types

const x: Promise<string> = Promise.resolve("5"); // Ok
const y: Promise<number> = Promise.resolve(5); // Ok
const z: Promise<string> = Promise.resolve(null); // Err
