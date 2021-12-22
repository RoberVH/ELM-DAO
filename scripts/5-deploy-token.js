import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x9028c3187Cb98439D2371960fa4DdB86799a5280");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "RV DAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "RVDAO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();