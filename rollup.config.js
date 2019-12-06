import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const plugins = [
  resolve(),
  typescript({
    tsconfig: 'build.tsconfig.json',
    useTsconfigDeclarationDir: true,
    cacheRoot: './node_modules/.cache/rpt2',
  }),
];

const external = ['fela-utils', 'css-in-js-utils', 'md5'];

const sourcemapPathTransform = (sourcePath) =>
  path.join('node_modules', pkg.name, './src', sourcePath);

export default [
  {
    input: {
      index: './src/index.ts',
    },
    output: [
      {
        dir: 'module',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        sourcemapPathTransform,
      },
      {
        dir: 'lib',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        sourcemapPathTransform,
      },
    ],
    plugins,
    external,
  },
];
