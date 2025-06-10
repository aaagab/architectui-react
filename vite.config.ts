import { defineConfig, transformWithEsbuild, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'
import * as path from 'path';

const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // https://vite.dev/config/shared-options
    // base: "/spa/",

    // console.log(mode)
    // console.log(process.env)
    var env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    console.log(env.PUBLIC_URL);


    return {
        define: {
            global: 'window',
            process: {
                env: env,
                version: '9.9.9',
            }
        },
        resolve: {
            alias: [
                { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
                { find: '@src', replacement: path.resolve(__dirname, './src') },
                {
                    // this is required for the SCSS modules
                    find: /^~(.*)$/,
                    replacement: '$1',
                },
            ]
        },
        plugins: [
            {
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
            },
            nodePolyfills(),
            react()],
        optimizeDeps: {
            esbuildOptions: {
                loader: {
                    '.js': 'jsx',
                },
            },
        },
    }
});
