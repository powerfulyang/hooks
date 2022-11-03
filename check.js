const fs = require('node:fs');
const path = require('node:path');

const hooks = fs.readdirSync(path.join(__dirname, './src/hooks'));
const exportContent = fs.readFileSync(path.join(__dirname, './src/index.ts'));
hooks.forEach((filename) => {
  // exclude *.spec.ts
  if (!filename.endsWith('.spec.ts')) {
    const exportName = filename.replace(/(.ts|.tsx)$/, '');
    const exportItem = `export * from './hooks/${exportName}';`;
    const bool = exportContent.includes(exportItem);
    if (!bool) {
      console.error(`Error: ${exportName} is not exported`);
      process.exit(1);
    }
  }
});
