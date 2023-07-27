import { Component } from '@angular/core';
import { LABELS } from '../core/models/labels';
import { Adjuster, AdjusterClass } from '../core/models/adjuster';

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.css'],
})
export class AdjusterComponent {
  labels = LABELS['adjuster'];
  adjuster: AdjusterClass;

  constructor() {
    this.adjuster = new AdjusterClass();
  }

  setInformation(e) {
    this.adjuster.information = e;
  }

  setLocation(e) {
    this.adjuster.location = e;
  }

  setPhones(e) {
    this.adjuster.phones = e.value;
  }

  setContacts(e) {
    this.adjuster.contacts = e;
  }

  getSummary() {
    let primary = null;

    if (this.adjuster.adjusterContacts && this.adjuster.adjusterContacts[0]) {
      primary = this.adjuster.adjusterContacts[0];
    }

    return {
      sections: [
        {
          title: 'Adjuster Information',
          elements: [
            { label: 'Code', value: this.adjuster.adjusterCode },
            { label: 'Name', value: this.adjuster.adjusterName },
            { label: 'Specialty', value: this.adjuster.adjusterSpecialty },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            { label: 'Address', value: this.adjuster.adjusterAddress },
            {
              label: 'Phone/s',
              value: this.adjuster.adjusterPhones?.map(
                (e) => e.adjusterPhoneNumber
              ),
            },
          ],
        },
        {
          title: 'Primary Contact',
          elements: [
            {
              label: 'Full Name',
              value: primary?.contactNameFirst + ' ' + primary?.contactNameLast,
            },
            { label: 'Designation', value: primary?.contactDesignation },
            {
              label: 'Phones',
              value: primary?.contactPhones?.map((e) => e.contactPhoneNumber),
            },
          ],
        },
        {
          // title: "",
          elements: [
            { label: 'Email Address', value: primary?.contactEmail },
            { label: 'Group Email Address', value: primary?.contactGroupEmail },
            { label: 'Date of Birth', value: primary?.contactBirthdate },
          ],
        },
      ],
    };
  }
}
