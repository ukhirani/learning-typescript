const digits: number[] = [1, 2, 3, 4];
digits.push(5); // OK
digits.push("5"); // ERROR

const letters: string[] = "hello".split("");
letters.push("!"); // OK
letters.push(1); // ERROR
