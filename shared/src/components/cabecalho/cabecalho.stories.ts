import type { Meta, StoryFn, StoryObj } from '@storybook/angular';

import { CabecalhoComponent } from './cabecalho.component';

const meta: Meta<CabecalhoComponent> = {
    component: CabecalhoComponent,
    title: 'Components/Cabecalho',
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
    args: {
        titulo: 'titulo', // Default Value
        subtitulo: 'subtitulo', // Default Value
    },
    argTypes: {
        titulo: {
            table: {
                category: 'Input',
                type: { summary: 'string' },
            },
            control: { type: 'text' },
            description: 'Texto exibido no título',
        },
        subtitulo: {
            table: {
                category: 'Input',
                type: { summary: 'string' },
            },
            control: { type: 'text' },
            description: 'Texto exibido no subtitulo',
        },
    }
};

export default meta;

type Story = StoryObj<CabecalhoComponent>;

export const Base: Story = {};

export const CabecalhoDefault: StoryFn<CabecalhoComponent> = (args) => ({
    props: {
        ...args,
    },
    template: `<shared-cabecalho titulo="titulo" subtitulo="subtitulo"></shared-cabecalho>`,
});

CabecalhoDefault.parameters = {
  controls: { exclude: ['titulo', 'subtitulo'] }
};

export const CabecalhoTitulo: StoryFn<CabecalhoComponent> = (args) => ({
    props: {
        ...args,
    },
    template: `<shared-cabecalho titulo="${args.titulo}"></shared-cabecalho>`,
});

CabecalhoTitulo.parameters = {
  controls: { exclude: ['subtitulo'] }
};