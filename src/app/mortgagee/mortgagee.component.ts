import { Component } from '@angular/core';
import { MortgageeClass } from '../core/models/mortgagee';
import { LABELS } from '../core/models/labels';

@Component({
  selector: 'app-mortgagee',
  templateUrl: './mortgagee.component.html',
  styleUrls: ['./mortgagee.component.css'],
})
export class MortgageeComponent {
  maxLength = 100;
  labels = LABELS['mortgagee'];
  mortgagee: MortgageeClass;
  constructor() {
    this.mortgagee = new MortgageeClass();
  }
  setInformation(e) {
    this.mortgagee.information = e;
  }
  setLocation(e) {
    this.mortgagee.location = e;
  }
  setPhones(e) {
    this.mortgagee.phones = e.value;
  }
  setContacts(e) {
    this.mortgagee.contacts = e;
  }
  onAgree(e) {}
  getSummary() {
    let primary = null;
    if (
      this.mortgagee.mortgageeContacts &&
      this.mortgagee.mortgageeContacts[0]
    ) {
      primary = this.mortgagee.mortgageeContacts[0];
    }
    return {
      sections: [
        {
          title: 'Mortgagee/Obligee Information',
          elements: [
            { label: 'Code', value: this.mortgagee.mortgageeCode },
            { label: 'Name', value: this.mortgagee.mortgageeName },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.mortgagee.mortgageeAddress,
            },
            {
              label: 'Phone/s',
              value: this.mortgagee.mortgageePhones?.map(
                (e) => e.mortgageePhoneNumber
              ),
            },
          ],
        },
        {
          title: 'Primary Contact',
          elements: [
            {
              label: 'Full Name',
              value: primary ? this.getPrimaryContactName() : '',
            },
            { label: 'Designation', value: primary?.contactDesignation },
            {
              label: 'Phones',
              value: primary?.contactPhones?.map((e) => e.contactPhoneNumber),
            },
          ],
        },
        {
          title: '',
          elements: [
            { label: 'Email Address', value: primary?.contactEmail },
            { label: 'Group Email Address', value: primary?.contactGroupEmail },
            { label: 'Date of Birth', value: primary?.contactBirthdate },
          ],
        },
      ],
    };
  }
  getPrimaryContactName(): string {
    const primary = this.mortgagee.mortgageeContacts?.[0];
    if (primary) {
      const firstName = primary.contactNameFirst || '';
      const middleInitial = primary.contactNameMiddleInitial || '';
      const lastName = primary.contactNameLast || '';
      const salutation = primary.contactNamePrefix || '';
      // Join name components without extra spaces
      const nameComponents = [
        salutation,
        firstName,
        middleInitial,
        lastName,
      ].filter(Boolean);
      return nameComponents.join(' ');
    } else {
      return '';
    }
  }
}
