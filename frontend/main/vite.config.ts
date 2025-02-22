import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'main',
            remotes: { notes: 'http://localhost:5001/assets/remoteEntry.js', messaging: 'http://localhost:5002/assets/remoteEntry.js' },
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
        port: 5173,
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});
