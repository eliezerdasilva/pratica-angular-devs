import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componet/home/home.component';
import { CadastrarProdutoComponent } from './componet/cadastrar-pr/cadastrar-pr.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - objeto de rota
  // 1 - Zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // 2 - Criar a rota de home
  // defino rota e defino o componente
  {
    path: 'home',
    loadChildren: () =>
      import('./componet/home/home.module').then((m) => m.HomeModule),
  },


  {
    path: 'novo',
    loadChildren: () =>
      import('./componet/cadastrar-pr/cadastrar-pr.module').then(
        (m) => m.CadastrarProdutoModule
      ),
  },
];

// principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}