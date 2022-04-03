// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Arbitrage {
  struct Arb {
    address trader;
    uint256 amount;    
  }

  mapping(bytes32 => Arb) public trades;

  event arbPerformed(bytes32 key);

  modifier isValidAmount(uint256 amount)
  {
    require(amount > 0, "Amount supplied is less than or equal to zero");
    _;
  }

  modifier isValidKey(bytes32 key)
  {
    Arb memory trade = trades[key];
    require(trade.amount != 0, "Invalid key supplied");
    _;
  }

  constructor() {
  } 

  function performArb 
                    (     
                      uint256 amount
                    ) 
                    public 
                    isValidAmount(amount)
  {
      
    bytes32 key = getKey(msg.sender, amount);
    Arb memory arb = Arb(msg.sender, amount);
    trades[key] = arb;
    
    emit arbPerformed(key);
  }

  function retrieveArb
                    (
                      bytes32 key
                    ) 
                    public 
                    view   
                    isValidKey(key)                 
                    returns(address, uint256)
  {
    Arb memory trade = trades[key];
    return (trade.trader, trade.amount);
  }

  function getKey
                (
                  address trader,
                  uint256 amount
                ) 
                public 
                pure                
                returns (bytes32) 
  {
    return keccak256(abi.encodePacked(trader, amount));
  }
}
