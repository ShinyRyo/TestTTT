async function main() {
  const [deployer] = await ethers.getSigners();
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  const simpleToken = await SimpleToken.deploy();

  console.log("SimpleToken deployed to:", simpleToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });
