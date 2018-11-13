import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import packageJSON from './package.json';

export default {
  input: 'src/index.js',
  output: {
    name: 'joyride',
    file: 'es/index.js',
    format: 'umd',
    exports: 'named',
  },
  external: [
    ...Object.keys(packageJSON.peerDependencies),
    ...Object.keys(packageJSON.dependencies),
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
};
