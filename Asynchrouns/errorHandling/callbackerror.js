function fetchData(callback, errorCallback) {
  setTimeout(() => {
    try {
      const data = fetchDataFromSource();
      callback(data);
    } catch (error) {
      errorCallback(error);
    }
  }, 1000);
}
