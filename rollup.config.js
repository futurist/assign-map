import buble from 'rollup-plugin-buble'

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [buble()]
}
