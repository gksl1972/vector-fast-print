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
      output: {
        // Büyük JS dosyalarını küçük parçalara böl (Chunking)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Her kütüphaneyi ayrı paketle ki tarayıcı daha kolay indirsin
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});
