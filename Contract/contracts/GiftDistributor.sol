// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";


error InvalidProof();

contract GiftDistributor is Initializable, ERC1155("") {
   
    bytes32 public giftRoot;
    uint256 public dropAmount;
   
    
   
   
    event Claimed(address indexed account, uint256 _dropAmount);

    function mint(address account, uint256 amount, uint256 id) internal {
        _mint(account, id, amount, "");
    }
   

    mapping(address => bool) addressesClaimed;
   

    
    function initialize (bytes32 giftRoot_, uint256 dropAmount_) public {
        giftRoot = giftRoot_;
        dropAmount = dropAmount_;
    }


    function claim(bytes32[] calldata giftProof, uint256 id)
        public
    {
        require(!addressesClaimed[msg.sender], "Already claimed");
        bytes32 node = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(giftProof, giftRoot, node), "Not Whitelisted");

        addressesClaimed[msg.sender] =  true;
        mint(msg.sender, id, dropAmount);
        emit Claimed(msg.sender, dropAmount);
    }
    
}