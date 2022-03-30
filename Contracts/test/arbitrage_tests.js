const Arbitrage = artifacts.require("Arbitrage");


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Arbitrage", function (/* accounts */) {
  it("should assert true", async function () {
    await Arbitrage.deployed();
    return assert.isTrue(true);
  });

  it("should add trade when valid data supplied", async function(){
    assert.isTrue(false);
  });

  it("should fail when invalid address supplied", async function(){
    assert.isTrue(false);
  });

  it("should fail when invalid amount supplied", async function(){
    assert.isTrue(false);
  });

  it("should retrieve trade when valid key supplied", async function(){
    assert.isTrue(false);
  });

  it("should fail when invalid key supplied", async function(){
    assert.isTrue(false);
  });
});
