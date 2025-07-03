import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() tipo: 'primario' | 'secundario' = 'primario';
}
