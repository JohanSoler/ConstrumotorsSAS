import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './main/slider/slider.component';
import { CompanyComponent } from './main/company/company.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//Bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommunicateComponent } from './communicate/communicate.component';
import { ServiceComponent } from './service/service.component';

//Material
import { MatCardModule } from '@angular/material/card';

//Google
import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    CompanyComponent,
    HeaderComponent,
    FooterComponent,
    CommunicateComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
