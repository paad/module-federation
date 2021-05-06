import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared.routing.module';



@NgModule({
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
