interface myDateInterface {
  new (x: number): Date;
}

let myNewDate: myDateInterface = Date;

const d = new myNewDate(1123);
console.log(d);
