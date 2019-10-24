import babel from 'rollup-plugin-babel';
export default {
  input: 'index.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'esm'
  },
  plugins: [
    babel()
  ]
};