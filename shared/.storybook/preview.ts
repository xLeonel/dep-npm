import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'centered', // Centraliza os story
    docs: {
      toc: {
        headingSelector: 'h2, h3' // habilita o table of contents (TOC) na documentação
      }
    },
    controls: {
      expanded: true, // Expande os controles para melhor visualização
    },
    options: {
      storySort: {
        includeName: true // Considera o nome do story/docs na ordenação
      },
    },
    viewport: {
      viewports: {
        //* descomentar caso queira adicionar algum viewport

        // smallMobile: {
        //   name: 'Small mobile',
        //   styles: { width: '320px', height: '568px' },
        // }
      },
    }
  },
};

export default preview;