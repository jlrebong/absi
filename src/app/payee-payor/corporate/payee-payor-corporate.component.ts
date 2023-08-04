import { Component } from '@angular/core';
import { LABELS } from 'src/app/core/models/labels';
import { PayeePayorCorporateClass } from 'src/app/core/models/payee-payor-corporate';

@Component({
  selector: 'app-payee-payor-corporate',
  templateUrl: './payee-payor-corporate.component.html',
  styleUrls: ['./payee-payor-corporate.component.css'],
})
export class PayeePayorCorporateComponent {
  labels = LABELS['payeePayorCorporate'];
  payeePayorCorporate: PayeePayorCorporateClass;
  maxLength = 100;
  maxLength1 = 30;

  constructor() {
    // This should be from the service
    this.payeePayorCorporate = new PayeePayorCorporateClass();
  }

  setInformation(e) {
    this.payeePayorCorporate.information = e;
  }

  setLocation(e) {
    this.payeePayorCorporate.location = e;
  }

  setPhones(e) {
    this.payeePayorCorporate.phones = e.value;
  }

  setContacts(e) {
    console.log('SET CONTACTS', e);
    this.payeePayorCorporate.contacts = e;
  }

  onAgree(e) {}

  getSummary() {
    let primary = this.payeePayorCorporate.primaryContact;

    return {
      sections: [
        {
          title: 'Payee / Payor Information',
          elements: [
            {
              label: 'Payee / Payor Name',
              value: this.payeePayorCorporate.payeeCorporateName,
            },
            {
              label: 'Industry',
              value: this.payeePayorCorporate.payeeIndustryDesc,
            },
            { label: 'TIN', value: this.payeePayorCorporate.payeeTin },
            {
              label: 'Account No.',
              value: this.payeePayorCorporate.payeeAccountNo,
            },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.payeePayorCorporate.payeeAddress,
            },
            {
              label: 'Phone/s',
              value: this.payeePayorCorporate.payeePhones?.map(
                (e) => e.payeePhoneNumber
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
          title: '-',
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
    const primary = this.payeePayorCorporate.payeeContacts?.[0];
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
