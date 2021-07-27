import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UAppBarModule, UButtonModule, UDrawerModule } from '@nelnet/unifi-components-angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UAppBarModule,
    UButtonModule,
    UDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
