// SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

import "./GiftDistributor.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";


contract GiftDistributorFactory {
    GiftDistributor[] public deployedPolls;
    address public immutable implementation;

    event DistributorDeployed(address indexed distributor, bytes32 indexed giftRoot, uint256 dropAmount);

    constructor() {
        implementation = address(new GiftDistributor());
    }
    
    function deployDistributor(bytes32 giftRoot, uint256 dropAmount) external {
        address payable clone = payable(Clones.clone(implementation));
        GiftDistributor distributor = GiftDistributor(clone);
        distributor.initialize(giftRoot, dropAmount);

        deployedPolls.push(distributor);
       
        emit DistributorDeployed(address(distributor), giftRoot, dropAmount);
    }
}
