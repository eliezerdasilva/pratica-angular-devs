import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
// Aqui colocamos 
const routes: Routes = [

  {path: '', component:HomeComponent}
];

//principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
