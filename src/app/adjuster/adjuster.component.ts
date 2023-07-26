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

  setInformation(e) {
    this.adjuster.information = e;
  }

  setLocation(e) {
    this.adjuster.location = e;
  }
}
