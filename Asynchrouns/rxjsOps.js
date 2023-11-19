import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

// Creating an observable
const observable = of(1, 2, 3, 4, 5);

// Using operators to transform and filter the observable
const transformedObservable = observable.pipe(
  map((value) => value * 2), // Multiply each value by 2
  filter((value) => value > 5) // Filter values greater than 5
);

// Subscribing to the transformed observable
transformedObservable.subscribe(
  (nextValue) => console.log("Next:", nextValue),
  (error) => console.error("Error:", error),
  () => console.log("Completed")
);
