test("fetchData resolves to the correct value", async () => {
  const data = await fetchData();
  expect(data).toEqual("expectedValue");
});
