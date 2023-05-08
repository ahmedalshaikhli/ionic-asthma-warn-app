import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RiskProfileDataService } from '../services/risk-profile-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
 patientAge: string;
  patientSex: string;
  homeCode: string;
  areaCode: string;
  senario: any[] = [];
  formSubmitValues: any;
  ionViewDidEnter() {
    // Fetch saved form submit values from localStorage
    const formSubmitValuesString = localStorage.getItem('formSubmitValues');
    if (formSubmitValuesString !== null) {
      const formSubmitValues = JSON.parse(formSubmitValuesString);
      // Use the saved values to update component properties
      const { patientAge, patientSex, homeCode, areaCode, senario } = formSubmitValues;
      this.patientAge = patientAge;
      this.patientSex = patientSex;
      this.homeCode = homeCode;
      this.areaCode = areaCode;
      this.senario = senario;
    }
  } 
}


