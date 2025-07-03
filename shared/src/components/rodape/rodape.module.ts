import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { BotaoModule } from '../botao/botao.module';

@NgModule({
  declarations: [RodapeComponent],
  imports: [
    CommonModule,
    BotaoModule
  ],
  exports: [RodapeComponent]
})
export class RodapeModule { }
