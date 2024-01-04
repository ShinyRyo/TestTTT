require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [/* 秘密鍵をここに追加 */]
    }
  }
};
