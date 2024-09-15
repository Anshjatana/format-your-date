import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS output
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules packages
    commonjs(), // Converts CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Use TypeScript plugin
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
  external: ['tslib'], // Mark tslib as external to avoid bundling
};
