// Converting a callback to a Promise with async/await
const fetchDataCallback = (callback) => {
  setTimeout(() => {
    const data = "Async data";
    callback(data);
  }, 1000);
};

const fetchDataPromise = () => {
  return new Promise((resolve) => {
    fetchDataCallback(resolve);
  });
};

const getData = async () => {
  const data = await fetchDataPromise();
  console.log("Data received:", data);
};

getData();
