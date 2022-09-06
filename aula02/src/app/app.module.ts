import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertyComponent } from './binding/property/property.component';
import { TwoWayComponent } from './two-way/two-way.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReceberParamComponent } from './receber-param/receber-param.component';
import { EnviarParamComponent } from './enviar-param/enviar-param.component';
import { Error404Component } from './error404/error404.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from './seguranca.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiretivasModule } from './diretivas/diretivas.module';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ConsumirApiComponent } from './consumir-api/consumir-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    TwoWayComponent,
    ReceberParamComponent,
    EnviarParamComponent,
    Error404Component,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    ConsumirApiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DiretivasModule,
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
