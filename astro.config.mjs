import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://spiffy-mooncake-b3419b.netlify.app',
  output: 'hybrid',
  integrations: [solidJs(), react()],
  adapter: netlify()
});