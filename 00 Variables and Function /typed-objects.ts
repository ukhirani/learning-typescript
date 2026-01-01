let user: {
  asdf: string;
  jkl: number;
};

user = { asdf: "asdf", jkl: 123 }; // OK
user = { asdf: "asdf", jkl: "jkl" }; // ERROR
