// worker.js
onmessage = (event) => {
  if (event.data.task === "compute") {
    // Perform a computationally expensive task
    const result = performExpensiveCalculation();
    postMessage(result);
  }
};
