import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UPanelsModule,
  UNotificationModule,
  UInputModule,
  UFormHelperTextModule,
  UFormControlModule,
  ULabelModule,
  URadioButtonModule,
  UCheckboxModule,
  UAppBarModule,
  UButtonModule,
  UDrawerModule
} from '@nelnet/unifi-components-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UAppBarModule,
    UButtonModule,
    UDrawerModule,
    UPanelsModule,
    UNotificationModule,
    UInputModule,
    UFormControlModule,
    UFormHelperTextModule,
    ULabelModule,
    URadioButtonModule,
    UCheckboxModule
  ],
  exports: [
    UAppBarModule,
    UButtonModule,
    UDrawerModule,
    UPanelsModule,
    UNotificationModule,
    UInputModule,
    UFormControlModule,
    UFormHelperTextModule,
    ULabelModule,
    URadioButtonModule,
    UCheckboxModule
  ]
})
export class UnifiComponentsModule { }
