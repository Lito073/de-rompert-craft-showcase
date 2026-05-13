import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");
const jpgFiles = (await readdir(assetsDir)).filter((file) => file.toLowerCase().endsWith(".jpg"));

for (const file of jpgFiles) {
  const input = path.join(assetsDir, file);
  const outputBase = path.join(assetsDir, path.basename(file, path.extname(file)));

  await sharp(input).rotate().webp({ quality: 78, effort: 6 }).toFile(`${outputBase}.webp`);
  await sharp(input).rotate().avif({ quality: 50, effort: 6 }).toFile(`${outputBase}.avif`);

  const metadata = await sharp(input).metadata();
  console.log(`${file}: ${metadata.width}x${metadata.height} -> webp, avif`);
}
