import { Parser, Rules, serializeRules } from '@travel-packlist/model';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const args = process.argv.slice(2);

function printHelp() {
  console.log(`
Usage: node ${process.argv[0]} ${process.argv[1]} [options] file

Options:
  --validate            Validate the Rules file (default action)
  --error-on-warnings   Treat warnings as errors (default false)
  --format              Format the Rules file (in-place)
                        (implies --validate)

  --help, -h            Show this help message
  --version, -v         Show version information
`);
}

if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(`Version: ${VERSION}\nBuild: ${GIT_HASH}`);
  process.exit(0);
}

const fileArg = args.find((arg) => !arg.startsWith('-'));
if (!fileArg) {
  console.error('Error: No input file specified.');
  printHelp();
  process.exit(1);
}

const filePath = resolve(process.cwd(), fileArg);
let fileContent: string;
try {
  fileContent = readFileSync(filePath, 'utf-8');
} catch (err) {
  console.error(
    `Error: Unable to read file '${filePath}': ${(err as Error).message}`,
  );
  process.exit(1);
}

const parser = new Parser();

const formatMode = args.includes('--format');
const errorOnWarnings = args.includes('--error-on-warnings');

let rules: Rules;

try {
  rules = parser.parseRules(fileContent);
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}

if (rules.warnings?.length) {
  for (const warning of rules.warnings) {
    console.warn(`Variable "${warning.variable}" is ${warning.type}!`);
  }
  if (errorOnWarnings) {
    console.error('Found warnings!');
    process.exit(1);
  }
}

if (formatMode) {
  const formatted = serializeRules(rules);
  writeFileSync(filePath, formatted, { encoding: 'utf-8' });
  console.log(`File '${filePath}' formatted successfully.`);
} else {
  console.log(`File '${filePath}' is valid.`);
}
