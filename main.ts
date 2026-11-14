// SPDX-License-Identifier: MIT
// Entry for makefun-coin-launch-01 bounty
import * as fs from "node:fs";
import * as path from "node:path";

function main(): void {
  const botDir: string = process.env.MAKEFUN_BOT_DIR || "/bot";
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

  const srcPath: string = path.join(botDir, "LAUNCH.json");
  const destPath: string = path.join(outputDir, "LAUNCH.json");

  // Ensure output directory exists before copying launch metadata
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read verified launch metadata and write to output
  const launchData: string = fs.readFileSync(srcPath, "utf-8");
  fs.writeFileSync(destPath, launchData, "utf-8");
}

main();
