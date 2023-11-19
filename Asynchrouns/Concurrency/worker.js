// worker.js
onmessage = (event) => {
  const sharedArray = new Int32Array(event.data);

  // Worker increments the shared value
  Atomics.add(sharedArray, 0, 1);

  console.log(
    "Worker ID:",
    event.data.workerId,
    "Shared Value:",
    sharedArray[0]
  );
};

// Assign a unique ID to each worker
postMessage({ workerId: 1 });
