import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPpalComponent } from './header-ppal/header-ppal.component';
import { SliderPpalComponent } from './slider-ppal/slider-ppal.component';
import { FooterPpalComponent } from './footer-ppal/footer-ppal.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPpalComponent,
    SliderPpalComponent,
    FooterPpalComponent,
    LoginRegisterComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
