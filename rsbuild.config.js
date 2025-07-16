import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';

export default defineConfig({
  plugins: [pluginReact(), pluginStyledComponents()],
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: 'dist',
    },
  },
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  server: {
    port: 3000,
  },
});