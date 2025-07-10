const { execSync } = require('child_process');

const changed = execSync('git diff --name-only $VERCEL_GIT_COMMIT_REF origin/main', {
  encoding: 'utf-8',
}).split('\n');

const onlyTestsChanged = changed.every(
  (f) => f.startsWith('src/tests/') || f.endsWith('.test.tsx') || f.endsWith('.test.ts')
);

process.exit(onlyTestsChanged ? 0 : 1);
