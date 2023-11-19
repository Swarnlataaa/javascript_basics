async function fetchData() {
  try {
    const result = await fetch("https://example.com/data");
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
