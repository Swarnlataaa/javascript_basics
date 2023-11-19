const axios = require("axios");

async function fetchData() {
  const response = await axios.get("https://api.example.com/data");
  return response.data;
}
/** HTTP client. Popular for making asynchronous HTTP requests. */