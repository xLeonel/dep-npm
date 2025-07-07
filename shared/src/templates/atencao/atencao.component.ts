import { Component } from '@angular/core';
import { AtencaoService } from './services/atencao.service';

@Component({
  selector: 'shared-atencao',
  templateUrl: './atencao.component.html',
  styleUrls: ['./atencao.component.scss']
})
export class AtencaoComponent {

  constructor(private atencaoService: AtencaoService) { }

  mensagem = this.atencaoService.mensagem;
}
