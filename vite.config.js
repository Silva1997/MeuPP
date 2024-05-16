import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/MeuPP',
    build: {
        chunkSizeWarningLimit: 1600,
    },
})