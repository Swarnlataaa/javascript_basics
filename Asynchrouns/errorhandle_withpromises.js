const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // Set to true to simulate an error
      if (!error) {
        const data = "Async data";
        resolve(data);
      } else {
        reject(new Error("Data fetch failed"));
      }
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
