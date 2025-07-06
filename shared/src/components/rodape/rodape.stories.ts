import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { RodapeComponent } from './rodape.component';
import { BotaoModule } from '../botao/botao.module';

const meta: Meta<RodapeComponent> = {
    component: RodapeComponent,
    title: 'Components/Rodape',
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
    argTypes: {
        inicio: {
            table: {
                category: 'Output',
                type: { summary: 'string' },
            },
            description: 'Evento disparado ao clicar no botão',
            action: 'eventoClick'
        }
    },
    decorators: [
        moduleMetadata({
            imports: [BotaoModule] // Importa o módulo Botão para que o componente Rodapé funcione corretamente
        })
    ]
};

export default meta;

type Story = StoryObj<RodapeComponent>;

export const Base: Story = {};