// SPDX-License-Identifier: MIT
import * as fs from "node:fs";
import * as path from "node:path";

function main(): void {
  const botDir: string = process.env.MAKEFUN_BOT_DIR || ".";
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

  const srcPath: string = path.join(botDir, "LAUNCH.json");
  const destPath: string = path.join(outputDir, "LAUNCH.json");

  const data: string = fs.readFileSync(srcPath, "utf-8");
  fs.writeFileSync(destPath, data, "utf-8");
}

main();
