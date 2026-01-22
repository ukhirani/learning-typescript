//structural vs nominal type checking

//nominal (like how it's done in JAVA) - means that we exactly see if two entities are of exact type
//meaning :-

type Car = {
  name: string;
  model: number;
};

type Bike = {
  name: string;
  model: number;
};

// in nominal type checking both of these would not be equal
// whereas in structural type system , it is
// TS uses structural type checking
// it just says "give me a thing that has these fields on it" rather than "give me a thing that is exactly an instanceof this"

function PrintVehicle(vehicle: { name: string; model: number }) {
  console.log(vehicle.name);
  console.log(vehicle.model);
}

const newCar: Car = { name: "Maruti Suzuki", model: 234 };
const newBike: Bike = { name: "Splendor", model: 567 };

PrintVehicle(newCar); // OK
PrintVehicle(newBike); // OK

// as you can see both are ok, since TS uses structural type checking

type Tank = {
  name: string;
  weight: number;
};

const newTank: Tank = { name: "The Tank", weight: 100 };

PrintVehicle(newTank); // ERR

// but wait, what if we have more attributes than the PrintVehicle function wants

type Plane = {
  name: string;
  model: number;
  speed: number;
};

const newPlane: Plane = { name: "Splendor", model: 567, speed: 123 };
PrintVehicle(newPlane); // works like a charm

//however we can make TS have nominal type checking also

if (newBike instanceof Bike) console.log("yes"); // well giving error, but something on these lines
