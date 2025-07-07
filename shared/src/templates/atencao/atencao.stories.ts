import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { AtencaoComponent } from './atencao.component';
import { AtencaoService } from './services/atencao.service';

const atencaoServiceFake = {
    mensagem: 'Mensagem de atenção fake'
}

class MockMyService extends AtencaoService {
    override mensagem = 'Mensagem de atenção mockada';
}

const meta: Meta<AtencaoComponent> = {
    component: AtencaoComponent,
    title: 'Templates/Atencao',
    decorators: [
        moduleMetadata({
            providers: [
                // { provide: AtencaoService, useValue: atencaoServiceFake } // mocka o service Atencao (via use value) (jeito 1)
                { provide: AtencaoService, useClass: MockMyService } // mocka o service Atencao (via use class) (jeito 2)
            ]
        })
    ]
};

export default meta;

type Story = StoryObj<AtencaoComponent>;

export const Base: Story = {};