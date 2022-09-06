import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';

const routes: Routes = [
  {path:"", component:ConsumindoApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
