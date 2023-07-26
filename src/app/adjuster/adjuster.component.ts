import { Component } from '@angular/core';
import {LABELS} from "../core/models/labels";
import { Adjuster, AdjusterClass } from '../core/models/adjuster';




@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.css']
})
export class AdjusterComponent {
  labels = LABELS["adjuster"];
  adjuster: AdjusterClass;
  

  constructor() {
    this.adjuster = new AdjusterClass();
    this.adjuster.adjusterStatus = "new";
    this.adjuster.adjusterStatus = "new";
  }

  get information () {
    return {
      status: this.adjuster.adjusterStatus || 'new',
      name: this.adjuster.adjusterName  || '',
      code: this.adjuster.adjusterCode  || '',
      specialty: this.adjuster.adjusterSpecialty  || ''
    }
  }

  setInformation(e) {
    this.adjuster.adjusterStatus    = e.status;
    this.adjuster.adjusterName      = e.name;
    this.adjuster.adjusterCode      = e.code;
    this.adjuster.adjusterSpecialty = e.specialty;
  }

  get location () {
    return {
      address: this.adjuster.adjusterAddress || '',
      country: this.adjuster.adjusterCountry  || '',
      province: this.adjuster.adjusterProvince  || '',
      city: this.adjuster.adjusterCity  || '',
      zip: this.adjuster.adjusterZipcode  || ''
    }
  }

  setLocation(e) {
    this.adjuster.adjusterAddress  = e.address;
    this.adjuster.adjusterCountry  = e.country;
    this.adjuster.adjusterProvince = e.province;
    this.adjuster.adjusterCity     = e.city;
    this.adjuster.adjusterZipcode  = e.zip;
  }
}
