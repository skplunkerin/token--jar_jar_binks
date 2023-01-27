async function main() {
  // NOTE: this is pulled from `hardhat.config.js`.networks["x"].accounts
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", await ethers.utils.formatEther(weiAmount));

  const Token = await ethers.getContractFactory("JarJarBinks");
  const token = await Token.deploy();
  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
