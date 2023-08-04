import { Component } from '@angular/core';
import { LABELS } from 'src/app/core/models/labels';
import { PayeePayorIndividualClass } from 'src/app/core/models/payee-payor-individual';

@Component({
  selector: 'app-payee-payor-individual',
  templateUrl: './payee-payor-individual.component.html',
  styleUrls: ['./payee-payor-individual.component.css'],
})
export class PayeePayorIndividualComponent {
  labels = LABELS['payeePayorIndividual'];
  payeePayorIndividual: PayeePayorIndividualClass;
  maxLength = 255;
  maxLength1 = 30;

  constructor() {
    // This should be from the service
    this.payeePayorIndividual = new PayeePayorIndividualClass();
  }

  setInformation(e) {
    this.payeePayorIndividual.information = e;
  }

  setLocation(e) {
    this.payeePayorIndividual.location = e;
  }

  setPhones(e) {
    this.payeePayorIndividual.phones = e.value;
  }

  setContacts(e) {
    console.log('SET CONTACTS', e);
    this.payeePayorIndividual.contacts = e;
  }

  onAgree(e) {}

  getSummary() {
    let primary = this.payeePayorIndividual.primaryContact;

    return {
      sections: [
        {
          title: 'Payee / Payor Information',
          elements: [
            {
              label: 'Name',
              value: this.getFullName(),
            },
            {
              label: 'Email Address',
              value: this.payeePayorIndividual.payeeEmail,
            },
            {
              label: 'Industry',
              value: this.payeePayorIndividual.payeeIndustryDesc,
            },
            { label: 'TIN', value: this.payeePayorIndividual.payeeTin },
            {
              label: 'Account No.',
              value: this.payeePayorIndividual.payeeAccountNo,
            },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.payeePayorIndividual.payeeAddress,
            },
            {
              label: 'Phone/s',
              value: this.payeePayorIndividual.payeePhones?.map(
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
    const primary = this.payeePayorIndividual.payeeContacts?.[0];
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

  getFullName(): string {
    const firstName = this.payeePayorIndividual.payeeNameFirst || '';
    const middleInitial =
      this.payeePayorIndividual.payeeNameMiddleInitial || '';
    const lastName = this.payeePayorIndividual.payeeNameLast || '';
    const salutation = this.payeePayorIndividual.payeeNamePrefix || '';

    // Join name components without extra spaces
    const nameComponents = [salutation, firstName, middleInitial, lastName];
    return nameComponents.join(' ');
  }
}
