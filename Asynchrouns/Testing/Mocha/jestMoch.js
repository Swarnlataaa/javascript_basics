jest.mock("./api", () => ({
  fetchData: jest.fn().mockResolvedValue("mockedValue"),
}));
