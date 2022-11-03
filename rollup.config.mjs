import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';

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
  plugins: [typescript()],
  external: [...pkgDeps],
};
