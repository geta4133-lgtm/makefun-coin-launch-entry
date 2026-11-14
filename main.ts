// SPDX-License-Identifier: MIT
import * as fs from "node:fs";
import * as path from "node:path";

function main(): void {
  const botDir: string = process.env.MAKEFUN_BOT_DIR || ".";
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

  const srcPath: string = path.join(botDir, "LAUNCH.json");
  const destPath: string = path.join(outputDir, "LAUNCH.json");

  // Ensure output directory exists and write verified launch metadata
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const launchData: string = fs.readFileSync(srcPath, "utf-8");
  fs.writeFileSync(destPath, launchData, "utf-8");
}

main();
