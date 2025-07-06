import type { Meta, StoryFn, StoryObj } from '@storybook/angular';

import { BotaoComponent } from './botao.component';

type BotaoPropsCustom = BotaoComponent & { textoBotao: string };

const meta: Meta<BotaoPropsCustom> = {
  component: BotaoComponent,
  title: 'Components/Botao',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/3XTm2zQzYdXwwd5S8xuLRE/Vitor-Leonel-s-team-library?node-id=2312-4&t=IQJkz3SoUdAUMY7M-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2312%3A4',
    },
  },
  args: {
    textoBotao: 'Texto do Botão', // Default Value
    tipo: 'primario', // Default Value
  },
  argTypes: {
    tipo: {
      table: {
        category: 'Input',
        type: { summary: 'string' },
      },
      control: { type: 'radio' },
      options: ['primario', 'secundario'],
      description: 'Define o tipo do botão',
    },
    textoBotao: {
      table: {
        category: 'Input',
        type: { summary: 'string' },
      },
      control: { type: 'text' },
      description: 'Texto exibido no botão',
    },
    clicado: {
      table: {
        category: 'Output',
        type: { summary: 'string' },
      },
      description: 'Evento disparado ao clicar no botão',
      action: 'eventoClick'
    }
  },
  render: ({ ...args }) => ({
    props: {
      ...args,
    },
    template: `<shared-botao tipo="${args.tipo}" (clicado)="clicado($event)">${args.textoBotao}</shared-botao>`,
  })
};

export default meta;

type Story = StoryObj<BotaoPropsCustom>;

export const Base: Story = {};

export const BotaoPrimario: StoryFn<BotaoPropsCustom> = (args) => ({
  props: {
    ...args,
  },
  template: `<shared-botao tipo="primario" (clicado)="clicado($event)">${args.textoBotao}</shared-botao>`,
});

BotaoPrimario.parameters = {
  controls: { exclude: ['tipo'] }
};

export const BotaoSecundario: StoryFn<BotaoPropsCustom> = (args) => ({
  props: {
    ...args,
  },
  template: `<shared-botao tipo="secundario" (clicado)="clicado($event)">${args.textoBotao}</shared-botao>`,
});

BotaoSecundario.parameters = {
  controls: { exclude: ['tipo'] }
};
