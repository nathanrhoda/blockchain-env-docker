const Arbitrage = artifacts.require("Arbitrage");


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Arbitrage", function (accounts) {
  const trader = accounts[0]
  const arbAmount = 1

  it("should assert true", async function () {
    await Arbitrage.deployed();
    return assert.isTrue(true);
  });

  it("should return a key when passing a amount and key", async function(){
    const arbitrage = await Arbitrage.deployed();
    const key = await arbitrage.getKey(trader, arbAmount);
    
    assert.isTrue(key.length > 0);
  })

  // it("should add trade when valid data supplied", async function(){
  //   const arbitrage = await Arbitrage.deployed();
  //   const key = arbitrage.performArb(trader, arbAmount)

  //   console.log('Key: ' + key);
  //   assert.isTrue(false);
  // });

  // it("should fail when invalid address supplied", async function(){
  //   assert.isTrue(false);
  // });

  // it("should fail when invalid amount supplied", async function(){
  //   assert.isTrue(false);
  // });

  // it("should retrieve trade when valid key supplied", async function(){
  //   assert.isTrue(false);
  // });

  // it("should fail when invalid key supplied", async function(){
  //   assert.isTrue(false);
  // });
});
