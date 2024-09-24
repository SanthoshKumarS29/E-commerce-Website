import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Conditionally set base only for production builds
    base: mode === 'production' ? '/E-commerce-Website/' : '/',
  };
});
