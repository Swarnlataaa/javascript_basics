async function fetchData() {
  try {
    const result = await fetch("https://example.com/data");
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Implement fallback or notify the user gracefully
  }
}
