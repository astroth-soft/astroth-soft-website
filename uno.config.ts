import { defineConfig, presetWind3 } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'
import presetAnimations from 'unocss-preset-animations' 

export default defineConfig({
  presets: [
    presetAnimations({}),
    presetIcons({
      autoInstall: true,
      collections: {
        'ic': () => import('@iconify-json/ic').then(i => i.default),
      }
    }),
    presetWind3(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        outfit: 'Outfit',
        roundedmplus: 'M PLUS Rounded 1c',
        mplus: 'M PLUS 1',
        shippori: 'Shippori Mincho',
        ibm: 'IBM Plex Sans JP',
        noto: 'Noto Sans Japanese',
        rajdhani: 'Rajdhani',
        lobster: 'Lobster',
      }
    })
  ],/*  */
})
