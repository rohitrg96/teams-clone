// import { defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.ts',
//   },
// });

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
  },
});
