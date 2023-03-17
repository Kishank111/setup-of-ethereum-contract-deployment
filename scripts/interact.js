const API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const provider = new ethers.providers.InfuraProvider(network = "goerli", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    // const update = await helloWorldContract.update('Kishan Kantariya');
    // await update.wait()
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
}
main();
