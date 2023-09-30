import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componet/home/home.component';
// Aqui colocamos 
const routes: Routes = [
  // Criar um rota - objeto
  // 1- zerar rotas
  {path:'',pathMatch: 'full', redirectTo:'home'},
  // 2 - Criar a rota de home m
  {path: 'home', component:HomeComponent}
];

//principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
