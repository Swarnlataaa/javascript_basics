const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      resolve(processedData);
    }, 1000);
  });
};

// Chaining promises
fetchData()
  .then(processData)
  .then((result) => {
    console.log("Processed data:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
