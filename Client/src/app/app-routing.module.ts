import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { HomeAreaDetailsComponent } from './home/home-area-code/home-area-details/home-area-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'riskProfile', component: RiskProfileComponent },
  { path: 'home/homeDetails', component: HomeAreaDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
