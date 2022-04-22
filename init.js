const fs = require('fs');
const path = require('path');

const hooks = fs.readdirSync(path.join(__dirname, './src/hooks'));
let indexFileContent = '';
hooks.forEach((filename) => {
  // exclude *.spec.ts
  if (!filename.endsWith('.spec.ts')) {
    const exportName = filename.replace(/(.ts|.tsx)$/, '');
    indexFileContent += `export * from './hooks/${exportName}';\n`;
  }
});
fs.writeFileSync(path.join(__dirname, './src/index.ts'), indexFileContent);
