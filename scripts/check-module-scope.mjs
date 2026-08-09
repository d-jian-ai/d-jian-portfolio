import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const boundariesPath = new URL("../config/module-boundaries.json", import.meta.url);
const boundaries = JSON.parse(readFileSync(boundariesPath, "utf8"));
const argumentsList = process.argv.slice(2);
const baseOption = argumentsList.find((argument) => argument.startsWith("--base="));
const scopesOption = argumentsList.find((argument) => argument.startsWith("--scopes="));
const positionalScopes = argumentsList.filter((argument) => !argument.startsWith("--"));
const requestedScopes = (scopesOption
  ? scopesOption.slice("--scopes=".length).split(",")
  : positionalScopes)
  .map((scope) => scope.trim())
  .filter(Boolean);

function fail(message) {
  console.error(`\nModule scope check failed:\n${message}\n`);
  process.exit(1);
}

if (!requestedScopes.length) {
  fail(
    "No scope provided. Example: npm run check:scope -- home\n" +
      "For approved cross-scope work: npm run check:scope -- space-poly-species shared",
  );
}

const unknownScopes = requestedScopes.filter((scope) => !boundaries.scopes[scope]);
if (unknownScopes.length) {
  fail(
    `Unknown scope: ${unknownScopes.join(", ")}\n` +
      `Available scopes: ${Object.keys(boundaries.scopes).join(", ")}`,
  );
}

function runGit(parameters) {
  return execFileSync("git", parameters, {
    cwd: repositoryRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function lines(output) {
  return output ? output.split(/\r?\n/).filter(Boolean) : [];
}

function changedFiles() {
  if (baseOption) {
    const base = baseOption.slice("--base=".length);
    return lines(runGit(["diff", "--name-only", "--diff-filter=ACMRD", `${base}...HEAD`]));
  }

  return [
    ...lines(runGit(["diff", "--name-only", "--diff-filter=ACMRD", "HEAD"])),
    ...lines(runGit(["ls-files", "--others", "--exclude-standard"])),
  ];
}

function globToRegularExpression(glob) {
  const doubleStarToken = "__DOUBLE_STAR__";
  const escaped = glob
    .replaceAll("\\", "/")
    .replaceAll("**", doubleStarToken)
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replaceAll("*", "[^/]*")
    .replaceAll(doubleStarToken, ".*");

  return new RegExp(`^${escaped}$`);
}

function matchesAny(file, patterns) {
  return patterns.some((pattern) => globToRegularExpression(pattern).test(file));
}

const files = [...new Set(changedFiles().map((file) => file.replaceAll("\\", "/")))].sort();
const allowedPatterns = requestedScopes.flatMap((scope) => boundaries.scopes[scope]);
const infrastructureApproved = requestedScopes.includes("infrastructure");
const protectedViolations = infrastructureApproved
  ? []
  : files.filter((file) => matchesAny(file, boundaries.protected));
const boundaryViolations = files.filter((file) => !matchesAny(file, allowedPatterns));
const violations = [...new Set([...protectedViolations, ...boundaryViolations])].sort();

if (violations.length) {
  const protectedNote = protectedViolations.length
    ? "\nProtected files require explicit infrastructure approval."
    : "";
  fail(
    `Approved scope(s): ${requestedScopes.join(", ")}\n` +
      `Files outside the approved boundary:\n- ${violations.join("\n- ")}${protectedNote}`,
  );
}

console.log(`Module scope check passed: ${requestedScopes.join(", ")}`);
console.log(files.length ? `Checked ${files.length} changed file(s).` : "No changed files detected.");

