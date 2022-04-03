// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Arbitrage {
  struct Arb {
    address trader;
    uint256 amount;    
  }

  mapping(bytes32 => Arb) public trades;

  constructor() {
  } 

  function performArb 
    (
      address trader, 
      uint256 amount
    ) public 
    returns (bytes32) {
      
    bytes32 key = keccak256(abi.encodePacked(trader, amount));
    Arb memory arb = Arb(trader, amount);
    trades[key] = arb;
    return key;
  }

  function retrieveArb
  (
    bytes32 key
  ) public view
  returns(address, uint256)
  {
    Arb memory trade = trades[key];
    return (trade.trader, trade.amount);
  }

  function getKey
  (
    address trader,
    uint256 amount
  ) public pure
  returns (bytes32) 
  {
    return keccak256(abi.encodePacked(trader, amount));
  }
}
