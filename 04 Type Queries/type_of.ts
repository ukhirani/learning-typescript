// you can use a type of the variable whose type you don't initially know

const fetch_op = fetch("umang.hirani.com");

// lets say i don't know the type of the fetch_op
type fetchReturn = typeof fetch_op;

type CarCar = {
  color: {
    red: string;
    green: string;
    blue: string;
  };
  price: number;
};

// you can also do indexed type queries
type ColorType = CarCar["color"]; // Ok
type RedType = CarCar["color"]["red"]; // Ok
type UnkownType = CarCar["color"]["yello"]; // Err

let carcar = {
  price: 23,
  resale_price: 12,
};

// lets say you want the keys of the type of this value carcar
type keyof_typeof = keyof typeof carcar;
