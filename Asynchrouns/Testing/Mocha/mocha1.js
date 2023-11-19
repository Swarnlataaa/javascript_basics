it("should resolve to the correct value", (done) => {
  fetchData().then((data) => {
    expect(data).to.equal("expectedValue");
    done();
  });
});

// Using Promises
it("should resolve to the correct value", () => {
  return fetchData().then((data) => {
    expect(data).to.equal("expectedValue");
  });
});
