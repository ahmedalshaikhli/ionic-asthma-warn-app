import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskProfileDataService {
 
  private formSubmitValues: any;

  constructor() { 
    this.formSubmitValues = JSON.parse(localStorage.getItem('formSubmitValues') || '{}');
  }

  setFormSubmitValues(values: any) {
    this.formSubmitValues = values;
    localStorage.setItem('formSubmitValues', JSON.stringify(values));
  }

  getFormSubmitValues() {
    return this.formSubmitValues;
  }
}