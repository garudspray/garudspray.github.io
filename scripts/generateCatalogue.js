import fs from "node:fs";
import path from "node:path";

const catalogueUrl =
  process.env.CATALOGUE_JSON_URL ||
  "https://example.com/garud-spray/drones.json";

async function generateCatalogue() {
  console.log("Downloading drone catalogue...");

  const response = await fetch(catalogueUrl);

  if (!response.ok) {
    throw new Error(
      `Unable to download catalogue: ${response.status}`
    );
  }

  const drones = await response.json();

  const outputDirectory = path.resolve("src/data");
  const outputFile = path.join(outputDirectory, "drones.generated.js");

  fs.mkdirSync(outputDirectory, { recursive: true });

  const content = `export const drones = ${JSON.stringify(
    drones,
    null,
    2
  )};\n`;

  fs.writeFileSync(outputFile, content);

  console.log("Catalogue generated successfully.");
}

generateCatalogue().catch((error) => {
  console.error(error);
  process.exit(1);
});