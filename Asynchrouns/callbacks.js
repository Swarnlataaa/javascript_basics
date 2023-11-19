// Callback example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Async data";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);
