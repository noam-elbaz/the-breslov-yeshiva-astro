import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import alpinejs from '@astrojs/alpinejs';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), alpinejs(), tailwind()]
});