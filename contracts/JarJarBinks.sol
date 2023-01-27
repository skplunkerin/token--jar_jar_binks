//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JarJarBinks is ERC20 {
  // Jar Jar Binks first appearance was in The Phantom Menace (1999)
  uint256 constant _initial_supply = 1999 * (10 ** 18);

  constructor() ERC20("JarJarBinks", "JJB") {
    _mint(msg.sender, _initial_supply);
  }
}
