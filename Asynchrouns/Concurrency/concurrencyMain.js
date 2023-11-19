// main.js
const worker = new Worker("worker.js");

worker.postMessage({ task: "compute" });

worker.onmessage = (event) => {
  console.log("Result from Web Worker:", event.data);
};
