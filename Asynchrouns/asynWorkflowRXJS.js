import { from, interval, combineLatest } from "rxjs";
import { map, filter, take } from "rxjs/operators";

// Creating observables
const numbersObservable = from([1, 2, 3, 4, 5]);
const intervalObservable = interval(1000).pipe(take(5)); // Emits a value every second, limited to 5 values

// Combining and transforming observables
const combinedObservable = combineLatest(
  numbersObservable,
  intervalObservable
).pipe(
  filter(([_, intervalValue]) => intervalValue % 2 === 0), // Filter even interval values
  map(([numberValue, _]) => `Number: ${numberValue}`)
);

// Subscribing to the combined observable
combinedObservable.subscribe(
  (nextValue) => console.log("Next:", nextValue),
  (error) => console.error("Error:", error),
  () => console.log("Completed")
);
