// here each field is compulsory to have
interface User {
  name: string;
  id: number;
}

//what if we want to do something like this (where each field is optional)
interface PartialUser {
  name?: string;
  id?: number;
}

//well there is a type exactly for that
const partialuser: Partial<User> = { name: "Umang" }; // ok
const partialuserwithid: Partial<User> = { id: 25 }; // ok
const allOptional: Partial<User> = {}; // ok
