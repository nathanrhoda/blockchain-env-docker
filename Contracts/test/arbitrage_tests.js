const ArbitrageTests = artifacts.require("ArbitrageTests");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ArbitrageTests", function (/* accounts */) {
  it("should assert true", async function () {
    await ArbitrageTests.deployed();
    return assert.isTrue(true);
  });
});