import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

const extraArgs = process.argv.slice(2);

const lightColor = "#f1f5f9";
const darkColor = "#0f172a";

const capacitorAssetsCommand = [
  "npx",
  "@capacitor/assets",
  "generate",
  `--iconBackgroundColor=${lightColor}`,
  `--iconBackgroundColorDark=${darkColor}`,
  `--splashBackgroundColor=${lightColor}`,
  `--splashBackgroundColorDark=${darkColor}`,
  ...extraArgs,
];

execSync(capacitorAssetsCommand.join(" "), { stdio: "inherit" });

const manifestPath = "www/manifest.json";
/**
 * @type {{background_color: string; theme_color: string ;icons: {src: string}[]}}
 */
const manifest = JSON.parse(readFileSync(manifestPath, { encoding: "utf-8" }));

manifest.icons.forEach((icon) => {
  icon.src = icon.src.replace(/.*icons./, "");
});
manifest.background_color = lightColor;
manifest.theme_color = darkColor;

const newManifest = JSON.stringify(manifest, null, 2) + "\n";
writeFileSync(manifestPath, newManifest, { encoding: "utf-8" });
