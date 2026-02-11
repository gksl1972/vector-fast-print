import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', 
  plugins: [
    base44({
      // Base44 ayarları KORUNDU
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      visualEditAgent: true
    }),
    react(),
  ],
  // BURASI YENİ: Performans için motor ayarları eklendi
  build: {
    target: 'esnext', // Modern tarayıcılar için optimize et
    sourcemap: false, // Gereksiz harita dosyalarını yükleme
    cssCodeSplit: true, // CSS'i parçala, sadece gerekeni yükle
    rollupOptions: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Heavy libraries - kept separate to avoid blocking main load
            if (id.includes('three')) return 'three-vendor';
            if (id.includes('leaflet') || id.includes('react-leaflet')) return 'map-vendor';
            if (id.includes('jspdf') || id.includes('html2canvas')) return 'pdf-vendor';
            
            // Core React libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler') || id.includes('react-router')) {
              return 'react-vendor';
            }
            
            // UI Libraries (used extensively in Home)
            if (id.includes('@radix-ui') || id.includes('lucide') || id.includes('framer-motion') || id.includes('class-variance-authority') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'ui-vendor';
            }

            // Everything else falls into a general vendor chunk
            return 'vendor';
          }
        }
    }
  }
});
