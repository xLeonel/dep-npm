import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  
  @Input() titulo!: string;
  @Input() subtitulo?: string;

  constructor() { }

  ngOnInit() {
  }

}
