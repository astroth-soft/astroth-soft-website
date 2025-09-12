import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import react from '@astrojs/react';

export default defineConfig({
  vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
  },
  image: {
    responsiveStyles: true,
  },
  integrations: [UnoCSS(), react()],
  site: "https://www.astroth-soft.com"
})