const Arbitrage = artifacts.require("Arbitrage");
const truffleAssert = require('truffle-assertions');


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Arbitrage", function (accounts) {
  const trader = accounts[0]
  const arbAmount = 1
  var tradeKey;

  it("should assert true", async function () {
    await Arbitrage.deployed();
    return assert.isTrue(true);
  });

  it("should return a key when passing a amount and key", async function(){
    const arbitrage = await Arbitrage.deployed();
    tradeKey = await arbitrage.getKey(trader, arbAmount);
    
    assert.isTrue(tradeKey.length > 0);
  })

  it("should add trade when valid data supplied", async function(){
    const arbitrage = await Arbitrage.deployed();
    let tx = await arbitrage.performArb(arbAmount, {from: trader});
    truffleAssert.eventEmitted(tx, 'arbPerformed', (ev) =>{
      return ev.key == tradeKey
    });        
  });

  it("should fail when invalid amount supplied", async function(){
    const invalidAmount = 0;
    const arbitrage = await Arbitrage.deployed();

    try {
      await arbitrage.performArb(invalidAmount, {from: trader});  
    } catch (error) {      
      assert.equal("Amount supplied is less than or equal to zero", error.reason);
    }  
  });

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
