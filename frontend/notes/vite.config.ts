import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'notes',
            filename: 'remoteEntry.js',
            exposes: {
                './Editor': './src/App.tsx'
            },
            shared: ['react', 'react-dom', 'react-router-dom'],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                format: 'esm',
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    preview: {
        host: 'localhost',
        port: 5001,
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});
