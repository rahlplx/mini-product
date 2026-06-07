import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const tests = [
  'tests/unit/router.test.mjs',
  'tests/integration/intent-routing.test.mjs',
];

let failed = false;
const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));

for (const testFile of tests) {
  const result = spawnSync(process.execPath, [resolve(repoRoot, testFile)], { stdio: 'inherit' });
  if (result.status !== 0) {
    failed = true;
    break;
  }
}

process.exit(failed ? 1 : 0);
