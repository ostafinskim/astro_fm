import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: '',
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  integrations: [solidJs(), react()],
  adapter: netlify()
});