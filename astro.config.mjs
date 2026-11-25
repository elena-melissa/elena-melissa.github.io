// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sveltia from '@sourcepoetry/astro-sveltia'
import icon from 'astro-icon'
import { cmsConfig } from '@/cms/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://melissa-eik.pages.dev',

  integrations: [
    sveltia({ config: cmsConfig, githubOAuth: false }),
    icon({
      include: {
        // Solo incluye los iconos MDI que realmente usas
        mdi: [
          'message',
          'account',
          'chevron-down',
          'check-decagram',
          'arrow-right',
          'arrow-left',
          'draw',
          'file-document-edit',
          'lightning-bolt',
          'email',
          'calendar-check',
          'send',
          'check-circle-outline',
          'instagram',
          'palette',
        ],
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: ['200 800'],
      subsets: ['latin'],
    },
  ],
  css: {
    postcss: {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    },
  },
  image: {
    // Añade el dominio de las imágenes de Google aquí
    domains: ['lh3.googleusercontent.com'],
  },
})
