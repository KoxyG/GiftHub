const { MerkleTree } = require("merkletreejs");
const keccak256  = require("keccak256");
const { expect } = require("chai");
const { ethers } = require("hardhat");




//deployment and first interaction.
describe("GiftDistributor", () => {
  
  let giftTree;
  let distributor;
  let distributorAddress
  let whitelistAddress

  

  beforeEach(async () => {

    [signer1, signer2, signer3, signer4] = await ethers.getSigners();

    whitelistAddress = [signer1.address, signer2.address, signer3.address, signer4.address]

    // // Randomly select 2 addresses
    // const selectedAddresses = shuffle(walletAddresses).slice(0, 2);

    const leaves = whitelistAddress.map(address => {
      return address
    })

    // generate a tree
    giftTree = new MerkleTree(leaves, keccak256, {  hashLeaves: true, sortPairs: true });
    
    // generate a root 
    const giftRoot = giftTree.getHexRoot();
   

    // Deploy GiftDistributor
    const giftDistributor = await ethers.getContractFactory("GiftDistributor")
    const Distributor = await giftDistributor.deploy();
    await Distributor.waitForDeployment();

    // Deploy factory contract
    const Factory = await ethers.getContractFactory("GiftDistributorFactory")
    const contract = await Factory.deploy();
    await contract.waitForDeployment();


    
    // interact with the proxy clone contract and set the merkle root and dropAmount
    distributor = await contract.deployDistributor(giftRoot, 500);
    await distributor;
    
    // get address of deployed polls
    distributorAddress = await contract.deployedPolls(0); 

   
    
  });

  // function to shuffle address
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

 
  describe("Claiming tokens", () => {
     // First Test
    it("allows successful claim with claim events and prevents duplicate claim", async () => {

     // Create an instance of the distributor contract
     const deployedDistributor = await ethers.getContractAt("GiftDistributor", distributorAddress);

      // Generate proof for signer1
      const leaf = keccak256(signer1.address);
      
      const proof1 = giftTree.getHexProof(leaf);

      
      
      await deployedDistributor.claim(proof1, "1")
  
      expect(deployedDistributor).to.emit(deployedDistributor, "Claimed").withArgs(signer1.address, 500);
      // Attempt to claim tokens for signer1 again, should fail
      await expect(deployedDistributor.claim(proof1, "1"))
        .to.be.revertedWith("Already claimed");
    
    });

    // Second Test
    it("prevents claim with invalid address/proof", async () => {
      // Create an instance of the distributor contract
      const deployedDistributor = await ethers.getContractAt("GiftDistributor", distributorAddress);
      
      const leaf = keccak256("0x0000000000000000000000000000000000000000");

        // Generate an invalid proof
      const invalidProof = giftTree.getHexProof(leaf);

      // Attempt to claim with invalid proof, should fail
      await expect(
        deployedDistributor.claim(invalidProof, "1")
      ).to.be.revertedWith("Not Whitelisted");
    });

  });
});