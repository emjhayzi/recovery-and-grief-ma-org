import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publishDir = path.join(projectRoot, "publish");

async function copyRootHtmlFiles() {
  const entries = await readdir(projectRoot, { withFileTypes: true });
  const htmlFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
    .map((entry) => entry.name);

  await Promise.all(
    htmlFiles.map(async (fileName) => {
      const contents = await readFile(path.join(projectRoot, fileName));
      await writeFile(path.join(publishDir, fileName), contents);
    })
  );
}

async function copyDirectory(sourceDir, targetDir) {
  await mkdir(targetDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = path.join(sourceDir, entry.name);
      const targetPath = path.join(targetDir, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(sourcePath, targetPath);
        return;
      }

      const contents = await readFile(sourcePath);
      await writeFile(targetPath, contents);
    })
  );
}

async function removeStaleRootFiles() {
  const sourceEntries = await readdir(projectRoot, { withFileTypes: true });
  const publishEntries = await readdir(publishDir, { withFileTypes: true });
  const expectedFiles = new Set(
    sourceEntries
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
      .map((entry) => entry.name)
      .concat("robots.txt")
  );

  await Promise.all(
    publishEntries
      .filter(
        (entry) =>
          entry.isFile() &&
          (entry.name.toLowerCase().endsWith(".html") || entry.name === "robots.txt") &&
          !expectedFiles.has(entry.name)
      )
      .map(async (entry) => {
        try {
          await rm(path.join(publishDir, entry.name), { force: true });
        } catch (error) {
          console.warn(`Skipped removing locked file: ${entry.name}`);
        }
      })
  );
}

async function main() {
  try {
    await rm(publishDir, { recursive: true, force: true });
  } catch (error) {
    console.warn("Could not fully remove publish/. Falling back to in-place refresh.");
  }

  await mkdir(publishDir, { recursive: true });

  await removeStaleRootFiles();
  await copyRootHtmlFiles();
  await writeFile(
    path.join(publishDir, "robots.txt"),
    await readFile(path.join(projectRoot, "robots.txt"))
  );
  await copyDirectory(path.join(projectRoot, "assets"), path.join(publishDir, "assets"));

  console.log("Cloudflare publish folder refreshed:");
  console.log(publishDir);
}

main().catch((error) => {
  console.error("Failed to build publish directory.");
  console.error(error);
  process.exitCode = 1;
});
