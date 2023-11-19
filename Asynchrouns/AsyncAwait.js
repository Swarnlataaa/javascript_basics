// Using async/await with a Promise
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 1000);
  });
};

const getData = async () => {
  const data = await fetchData();
  console.log("Data received:", data);
};

getData();
