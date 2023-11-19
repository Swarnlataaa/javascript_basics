const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const { expect } = chai;

it("should resolve to the correct value", () => {
  return expect(fetchData()).to.eventually.equal("expectedValue");
});
