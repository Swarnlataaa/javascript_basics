const fsPromises = require("fs").promises;

// Reading a file asynchronously using Async/Await
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();
