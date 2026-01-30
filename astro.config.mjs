import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sirelations.startup.earth',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
