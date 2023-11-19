const fsPromises = require("fs").promises;

// Reading a file asynchronously using Promises
fsPromises
  .readFile("example.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });
