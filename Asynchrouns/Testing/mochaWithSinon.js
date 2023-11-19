const sinon = require("sinon");

beforeEach(() => {
  sinon.stub(api, "fetchData").resolves("mockedValue");
});
