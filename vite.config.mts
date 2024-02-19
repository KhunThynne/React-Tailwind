import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
const __dirname = new URL('.', import.meta.url).pathname;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
