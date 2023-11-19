app.get("/api/data", async (req, res) => {
  const data = await fetchDataFromDatabase();
  res.json(data);
});
/**Uses asynchronous middleware to handle HTTP requests concurrently. */