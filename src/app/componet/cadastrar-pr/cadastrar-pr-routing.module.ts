import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-pr.component';



const routes: Routes = [
  { path: '', component: CadastrarProdutoComponent},

  // Caso tivesse filhos
  // {path: 'filho', component: HomeFilhoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarRoutingModule {}