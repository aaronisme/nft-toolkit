pragma solidity ^0.5.0;

import "./ERC721Tradable.sol";

contract MyNFT is ERC721Tradable {
    constructor() public ERC721Tradable("MyNFT", "MNFT"){}
}