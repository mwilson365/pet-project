import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UPanelsModule } from '@nelnet/unifi-components-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UPanelsModule
  ],
  exports: [
    UPanelsModule
  ]
})
export class UnifiComponentsModule { }
