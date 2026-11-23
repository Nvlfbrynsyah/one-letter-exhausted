/**
 * make.fun entry: One Letter for Your Day
 * Letter: E
 * Word: exhausted (never outputted)
 * Output: exactly 1 byte ('E'), no trailing newline
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const LETTER = "E";

if (typeof LETTER !== 'string' || !/^[A-Z]$/.test(LETTER)) {
  console.error('Error: Invalid letter configuration');
  process.exit(1);
}

const arg = process.argv[2];
if (arg === '--help' || arg === '-h') {
  process.stdout.write('Usage: node main.ts\nWrites the letter E (1 byte) to $MAKEFUN_OUTPUT_DIR/entry.txt (default: /output).\n');
  process.exit(0);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const resolvedOutDir = path.resolve(outDir);
const entryFilePath = path.join(resolvedOutDir, 'entry.txt');

try {
  fs.mkdirSync(resolvedOutDir, { recursive: true });
  fs.writeFileSync(entryFilePath, LETTER, { encoding: 'utf8' });
  process.stderr.write(`Wrote entry 'E' to ${entryFilePath}\n`);
} catch (err) {
  console.error('Error writing entry:', err);
  process.exit(1);
}
