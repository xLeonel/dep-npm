import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtencaoComponent } from './atencao.component';

@NgModule({
  declarations: [AtencaoComponent],
  imports: [
    CommonModule
  ],
  exports: [AtencaoComponent]
})
export class AtencaoModule { }
