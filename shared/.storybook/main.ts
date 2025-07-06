import remarkGfm from 'remark-gfm';

import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx', // docs da biblioteca
    '../src/**/*.mdx', // docs componentes / services / templates
    '../**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials', // funcionalidades essenciais
    {
      name: '@storybook/addon-docs', // documentação dos componentes
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm], // suporte a tabelas no MDX
          },
        },
      },
    },
    '@storybook/addon-designs' // adiciona suporte a designs (Ex: Figma)
  ],
  framework: {
    name: '@storybook/angular', // framework utilizado
    options: {},
  },
  core: {
    disableTelemetry: true // desabilita o envio de dados de uso para a Storybook
  }
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
