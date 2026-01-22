function wave(): string {
  return ":wave";
}

async function asyncWave(): Promise<string> {
  return ":wave";
}

const waveString = wave();
const wavePromise = asyncWave();

console.log(waveString.length); // OK
console.log(wavePromise.length); // Err
