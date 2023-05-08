import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RiskProfileDataService } from '../services/risk-profile-data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.scss'],
})export class RiskProfileComponent {
  patientAge: string;
  patientSex: string;
  homeCode: string;
  areaCode: string;
  senario: any[] = [];

 
  constructor(private router: Router,private http: HttpClient) {}

  onFormSubmit() {
    // Call the API to fetch matched values
    const apiUrl = `https://localhost:5001/api/senarios/senario/${this.patientAge}/${this.patientSex}/${this.homeCode}/${this.areaCode}`;
    this.http.get<string[]>(apiUrl).subscribe(
      (response) => {
        this.senario = response;
     /*    console.log(this.senario) */
        localStorage.setItem('formSubmitValues', JSON.stringify({
          patientAge: this.patientAge,
          patientSex: this.patientSex,
          homeCode: this.homeCode,
          areaCode: this.areaCode,
          senario: response // assuming 'recommendations' is the property that holds the API response
        }));
  
       this.router.navigate(['/home']);  

    console.log(this.senario );
      },
      (error) => {
        console.error(error);
      }
    );
  }
}