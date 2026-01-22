interface User {
  name: string;
  id: number;
}
// what if instead you want to "pick" a certain property from a type
// let's say u wanna pick just the "id"
let PickID: Pick<User, "id"> = { id: 25 };
let PickName: Pick<User, "name"> = { name: "Umang" }; // same example, just picking "name"
let PickBoth: Pick<User, "name" | "id"> = { name: "Umang", id: 23 }; // can also pick union types

// same goes for omit, but just the opposite
let OmitID: Omit<User, "id"> = { id: 32 }; // err
let OmitIDOK: Omit<User, "id"> = { name: "umang" }; // ok
