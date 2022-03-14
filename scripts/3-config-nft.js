import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5d37Fc400700836534697D3BA0bf8B422c635AAE",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Athens the goddess of wisdom",
        description: "This NFT will give you access to GoddessDAO!",
        image: readFileSync("scripts/assets/goddesss.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()