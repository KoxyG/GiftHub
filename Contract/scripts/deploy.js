require('@openzeppelin/hardhat-upgrades');
const { ethers, defender} = require("hardhat");



async function main() {
  // Deploy the MerkleDistributorFactory contract
  const Merkle = await ethers.getContractFactory("MerkleDistributor");
  const merkle = await defender.deployContract(Merkle, {unsafeAllowDeployContract: true});
  const merkleAirdrop = await merkle.waitForDeployment();
  console.log("Merkle contract deployed to:", merkleAirdrop.getAddress());

  const Factory = await ethers.getContractFactory("MerkleDistributorFactory");
  // const factory = await Factory.deploy();
  const factory = await defender.deployContract(Factory);
  // await factory.deployed();
  const deploy = await factory.waitForDeployment();
  // console.log("Factory contract deployed to:", factory.address);
  console.log("Factory contract deployed to:", deploy.getAddress());

  
  console.log("Distributor deployed");
  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
