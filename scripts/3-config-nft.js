import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8999D8ddB55083aAA1B5e55A8129B569A972dd28",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "RV Membership NFT",
        description: "This NFT will give you access to RV DAO!",
        image: readFileSync("scripts/assets/startnft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()