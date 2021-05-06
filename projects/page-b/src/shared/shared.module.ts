import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
