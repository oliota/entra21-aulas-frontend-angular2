import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';



@NgModule({
  declarations: [
    EventComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BindingModule { }
