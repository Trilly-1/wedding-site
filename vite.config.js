import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'core': ['react', 'react-dom'],
          'intro': ['./src/components/EnvelopeIntro.jsx'],
          'main': [
            './src/components/Hero.jsx',
            './src/components/LoveStory.jsx',
            './src/components/Countdown.jsx',
            './src/components/EventDetails.jsx',
            './src/components/Location.jsx',
            './src/components/Gallery.jsx',
            './src/components/Gifts.jsx',
            './src/components/Footer.jsx'
          ]
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
    cssCodeSplit: true
  },
  server: {
    middlewareMode: false,
    hmr: true
  }
})