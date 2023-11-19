// Error handling with async/await
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

const getData = async () => {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

getData();
