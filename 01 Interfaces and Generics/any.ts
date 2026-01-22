let oho = "string";
let ohno = 4;

ohno.toUpperCase(); //err
oho.toUpperCase(); //ok

// what if we want ts to stay silent in these scenarios
let ok: any = "string";
ok = {};
ok = 3234;
ok.toUpperCase(); //ok but will give run time error

//@ts-ignore
function okbro(s) {
  //err => but not visible due to the ts-ignore comment
  return s;
}
