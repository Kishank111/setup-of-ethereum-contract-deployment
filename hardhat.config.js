require('dotenv').config();


require("@nomiclabs/hardhat-ethers");

const { INFURA_API_URL, PRIVATE_KEY } = process.env;


/**

* @type import('hardhat/config').HardhatUserConfig

*/

module.exports = {

   solidity: "0.8.9",

   defaultNetwork: "goerli",

   networks: {

      hardhat: {},

      goerli: {

         url: INFURA_API_URL,

         accounts: [`0x${PRIVATE_KEY}`]

      }

   },

}

