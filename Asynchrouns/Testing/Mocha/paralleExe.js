const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 1000);
  });
};

const fetchResults = Promise.all([fetchData(), fetchData(), fetchData()]);

fetchResults.then((results) => {
  console.log("All data received:", results);
});
