import { Component } from '@angular/core';

@Component({
  selector: 'shared-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {

  voltar() {
    console.log('Voltar clicked');
    // Implementar lógica de voltar
  }

  inicio() {
    console.log('Início clicked');
    // Implementar lógica de início
  }

  fim() {
    console.log('Fim clicked');
    // Implementar lógica de fim
  }
}
