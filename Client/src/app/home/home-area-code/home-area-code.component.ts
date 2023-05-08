import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiskProfileDataService } from 'src/app/services/risk-profile-data.service';

@Component({
  selector: 'app-home-area-code',
  templateUrl: './home-area-code.component.html',
  styleUrls: ['./home-area-code.component.scss'],
  providers: [RiskProfileDataService]
})
export class HomeAreaCodeComponent {

  @Input() patientAge:string;
  @Input() patientSex:string;
  @Input() homeCode:string;
  @Input() areaCode:string;
  @Input() senario:any[];
  

}