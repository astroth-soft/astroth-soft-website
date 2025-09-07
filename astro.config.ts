import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
  },
  integrations: [UnoCSS(), react()],
})