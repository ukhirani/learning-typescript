type keys = keyof Date; // gets all the keys of the type Date

console.log();

type DateStringProperties = keys & string;
type DateSymbolProperties = keys & symbol;
