import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

// read package.json dependencies and peerDependencies
const str = readFileSync('./package.json', 'utf-8');
const pkg = JSON.parse(str);

const pkgDeps = Array.from(Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies }));

export default {
  input: 'src/index.ts',
  output: [
    {
      entryFileNames: `[name].cjs`,
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
    },
    {
      sourcemap: true,
      entryFileNames: '[name].mjs',
      format: 'es',
      exports: 'named',
      preserveModules: true,
      dir: 'dist/es',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
  external: [...pkgDeps],
};
