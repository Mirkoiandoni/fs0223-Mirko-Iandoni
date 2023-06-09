import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraRoutingModule } from './registra-routing.module';
import { RegistraComponent } from './registra.component';


@NgModule({
  declarations: [
    RegistraComponent
  ],
  imports: [
    CommonModule,
    RegistraRoutingModule
  ]
})
export class RegistraModule { }
