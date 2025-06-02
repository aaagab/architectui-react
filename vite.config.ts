import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
    // https://vite.dev/config/shared-options
    define: {
        'process.env': {}
    },
    resolve: {
        alias: [
            // { find: "url", replacement: path.resolve(__dirname, 'url') },
            { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
            { find: "assert", replacement: path.resolve(__dirname, 'node_modules/assert') },
            { find: "crypto", replacement: path.resolve(__dirname, 'node_modules/crypto-browserify') },
            { find: "http", replacement: path.resolve(__dirname, 'node_modules/stream-http') },
            { find: "https", replacement: path.resolve(__dirname, 'node_modules/https-browserify') },
            { find: "buffer", replacement: path.resolve(__dirname, 'node_modules/buffer/') },
            { find: "stream", replacement: path.resolve(__dirname, 'node_modules/stream-browserify') },
            {
                // this is required for the SCSS modules
                find: /^~(.*)$/,
                replacement: '$1',
            },
        ]
    },
    plugins: [{
        name: 'treat-js-files-as-jsx',
        async transform(code, id) {
            if (!id.match(/src\/.*\.js$/)) return null

            // Use the exposed transform from vite, instead of directly
            // transforming with esbuild
            return transformWithEsbuild(code, id, {
                loader: 'jsx',
                jsx: 'automatic',
            })
        },
    }, react()],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
})
