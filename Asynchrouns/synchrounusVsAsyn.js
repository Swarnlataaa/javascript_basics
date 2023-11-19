// Synchronous code
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous code
console.log("Start");
setTimeout(() => {
  console.log("Async task completed");
}, 2000);
console.log("End");
