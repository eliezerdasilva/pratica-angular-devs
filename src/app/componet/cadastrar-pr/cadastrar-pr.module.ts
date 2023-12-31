import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarRoutingModule } from './cadastrar-pr-routing.module';
import { CadastrarProdutoComponent } from './cadastrar-pr.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    
  ]
})
export class CadastrarProdutoModule { }