import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() tipo: 'primario' | 'secundario' = 'primario';

  @Output() clicado = new EventEmitter<string>();

  onClick() {
    this.clicado.emit('Botão clicado!');
  }
}
