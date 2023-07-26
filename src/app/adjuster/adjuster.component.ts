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
    this.adjuster.adjusterPhones = [
      {
          "adjusterPhoneDmpPk": {
              "adjusterPhoneAdjusterTransNo": null,
              "adjusterPhoneLineNo": null
          },
          "adjusterPhoneAdjusterTransNo": null,
          "adjusterPhoneAdjusterPk": "ADJ00005",
          "adjusterPhoneLineNo": 1,
          "adjusterPhoneType": "Work",
          "adjusterPhoneNumber": "09123456789",
          "adjusterPhoneStatus": null,
          "adjusterPhoneCreatedBy": "IIBSV5_UAT",
          "adjusterPhoneDateCreated": "2022-09-17T22:40:53",
          "adjusterPhoneUpdatedBy": null,
          "adjusterPhoneDateUpdated": null
      },
      {
        "adjusterPhoneDmpPk": {
            "adjusterPhoneAdjusterTransNo": null,
            "adjusterPhoneLineNo": null
        },
        "adjusterPhoneAdjusterTransNo": null,
        "adjusterPhoneAdjusterPk": "ADJ00005",
        "adjusterPhoneLineNo": 2,
        "adjusterPhoneType": "Work",
        "adjusterPhoneNumber": "09234567890",
        "adjusterPhoneStatus": null,
        "adjusterPhoneCreatedBy": "IIBSV5_UAT",
        "adjusterPhoneDateCreated": "2022-09-17T22:40:53",
        "adjusterPhoneUpdatedBy": null,
        "adjusterPhoneDateUpdated": null
      },
      {
          "adjusterPhoneDmpPk": {
              "adjusterPhoneAdjusterTransNo": null,
              "adjusterPhoneLineNo": null
          },
          "adjusterPhoneAdjusterTransNo": null,
          "adjusterPhoneAdjusterPk": "ADJ00005",
          "adjusterPhoneLineNo": 3,
          "adjusterPhoneType": "Work",
          "adjusterPhoneNumber": "1234567",
          "adjusterPhoneStatus": null,
          "adjusterPhoneCreatedBy": "IIBSV5_UAT",
          "adjusterPhoneDateCreated": "2022-09-17T22:40:53",
          "adjusterPhoneUpdatedBy": null,
          "adjusterPhoneDateUpdated": null
      }
    ];

      // console.log('aDJUSTER PHONES', this.adjuster.adjusterPhones);
      // console.log('aDJUSTER PHONES', this.adjuster.phones);
  }

  setInformation(e) {
    this.adjuster.information = e;
  }

  setLocation(e) {
    this.adjuster.location = e;
  }

  setPhones(e) {
    console.log(e.value);
    this.adjuster.phones = e.value;
  }
}
