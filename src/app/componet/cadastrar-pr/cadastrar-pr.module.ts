import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarRoutingModule } from './cadastrar-pr-routing.module';
import { CadastrarProdutoComponent } from './cadastrar-pr.component';



@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastrarProdutoModule { }