interface User {
  name: string;
  id: number;
}

const editable: User = {
  name: "Umang",
  id: 25,
};

editable.name = "hirani"; // OK
editable.id = 38; // OK

const notEditable: Readonly<User> = {
  name: "Umang",
  id: 25,
};

interface AlsoUser {
  readonly name: string; // readonly is achieved through this keyword
  id: number;
}

notEditable.name = "Hirani"; // err
notEditable.id = 38; // err
