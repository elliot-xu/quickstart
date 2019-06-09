const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');

export default {
    input: './src/main.ts',
    plugins: [
        resolve(),
        typescript(),
    ],
    watch: {
        exclude: ['node_modules/**']
    },
    output: {
        dir: './dist',
        format: 'system',
        sourcemap: true,
        entryFileNames: 'bundle.js'
    }
};