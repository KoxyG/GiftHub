// SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "./MerkleDistributor.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";


contract MerkleDistributorFactory {
    MerkleDistributor[] public deployedPolls;
    address public immutable implementation;

    event DistributorDeployed(address indexed distributor, bytes32 indexed merkleRoot, uint256 dropAmount);

    constructor() {
        implementation = address(new MerkleDistributor());
    }
    
    function deployDistributor(bytes32 merkleRoot, uint256 dropAmount) external {
        address payable clone = payable(Clones.clone(implementation));
        MerkleDistributor distributor = MerkleDistributor(clone);
        distributor.initialize(merkleRoot, dropAmount);

        deployedPolls.push(distributor);
       
        emit DistributorDeployed(address(distributor), merkleRoot, dropAmount);
    }
}
