// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Async data";
    resolve(data); // Resolve when the operation is successful
    // or
    // reject(new Error("Data fetch failed")); // Reject when there's an error
  }, 1000);
});

// Using the Promise
fetchData
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
