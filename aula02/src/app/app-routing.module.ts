import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertyComponent } from './binding/property/property.component'; 
import { TwoWayComponent } from './two-way/two-way.component';
import { EnviarParamComponent } from './enviar-param/enviar-param.component';
import { ReceberParamComponent } from './receber-param/receber-param.component';
import { Error404Component } from './error404/error404.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { EventComponent } from './binding/event/event.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"inicio", component:InicioComponent,canActivate:[SegurancaService]},
  // { path: '**', component: Error404Component },
  {path:"pagina", component:PaginaComponent,canActivate:[SegurancaService]},
  {path:"outro", component:OutroComponent,canActivate:[SegurancaService]},
  {path:"property", component:PropertyComponent,canActivate:[SegurancaService]},
  {path:"event", component:EventComponent,canActivate:[SegurancaService]},
  {path:"twoWay", component:TwoWayComponent,canActivate:[SegurancaService]},
  {path:"enviar", component:EnviarParamComponent,canActivate:[SegurancaService]},
  {path:"receber/:info1/:dado2", component:ReceberParamComponent,canActivate:[SegurancaService]},
  {path:"diretivaIf", component:DiretivaIfComponent,canActivate:[SegurancaService]},
  {path:"diretivaFor", component:DiretivaForComponent,canActivate:[SegurancaService]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
