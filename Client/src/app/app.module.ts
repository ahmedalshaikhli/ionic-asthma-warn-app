import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { HomeAreaCodeComponent } from './home/home-area-code/home-area-code.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { HomeAreaDetailsComponent } from './home/home-area-code/home-area-details/home-area-details.component';
import { RiskProfileDataService } from './services/risk-profile-data.service';



@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    HomeAreaCodeComponent,RiskProfileComponent,NavbarComponent, BottomNavbarComponent,HomeAreaDetailsComponent],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    RiskProfileDataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
