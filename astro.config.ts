import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
  },
  integrations: [
    UnoCSS(),
  ],
})