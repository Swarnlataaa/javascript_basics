// main.js
const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes shared buffer
const sharedArray = new Int32Array(sharedBuffer);

// Create two workers
const worker1 = new Worker("worker.js");
const worker2 = new Worker("worker.js");

// Main thread increments the shared value
Atomics.add(sharedArray, 0, 1);

// Send the shared buffer to workers
worker1.postMessage(sharedBuffer);
worker2.postMessage(sharedBuffer);
