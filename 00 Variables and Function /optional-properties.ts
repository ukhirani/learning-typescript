let asdf: {
  asdf: string;
  jkl: number;
  qwerty?: boolean;
};
user = { asdf: "asdf", jkl: 123 }; // OK but could have given error if ? was not included
asdf = { asdf: "asdf", jkl: 123, qwerty: true };
//user = { asdf: "asdf", jkl: "jkl" }; // ERROR

let asdfasdf: {
  asdf: string;
  jkl: number;
  hello?: boolean; //optional property
};
