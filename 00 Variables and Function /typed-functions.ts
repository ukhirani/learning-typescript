function add(a: number, b: number): number {
  return a + b;
}

add(1, 2); // OK
add("asdf", "jkl;"); // ERROR

function concat(a: string, b: string): string {
  return a + b;
}
concat("asdf", "jkl;"); // OK !
concat(1, 2); // ERROR
