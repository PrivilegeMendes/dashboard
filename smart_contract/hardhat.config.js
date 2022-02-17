//https://eth-rinkeby.alchemyapi.io/v2/ilM5vADGD7Oe2fD6tKJoLDK4zD7SICU_

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;

// const chainIDs = {
//   goerli: 5,
//   hardhat: 31337,
//   kovan: 42,
//   mainnet: 1,
//   rinkeby: 4,
//   ropsten: 3,
// };

// Ensure that we have all the environment variables we need.
if (!privateKey) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
}

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: endpoint,
      accounts: [`0x${privateKey}`]
    }
  }
}