// Callback hell example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Async data";
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processedData = data.toUpperCase();
    callback(processedData);
  }, 1000);
}

function displayData(data) {
  console.log("Displaying data:", data);
}

fetchData((data) => {
  processData(data, (processedData) => {
    displayData(processedData);
  });
});
