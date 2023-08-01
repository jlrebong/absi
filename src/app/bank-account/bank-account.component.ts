import { Component } from '@angular/core';
import { LABELS } from '../core/models/labels';
import { BankClass } from '../core/models/bank';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent {
  maxLength = 100;
  labels = LABELS['bank'];
  bank: BankClass;

  constructor() {
    this.bank = new BankClass();
  }

  setInformation(e) {
    this.bank.information = e;
  }

  setLocation(e) {
    this.bank.location = e;
  }

  setPhones(e) {
    this.bank.phones = e.value;
  }

  setContacts(e) {
    this.bank.contacts = e;
  }

  onAgree(e) {}

  getSummary() {
    let primary = null;

    if (this.bank.bankContacts && this.bank.bankContacts[0]) {
      primary = this.bank.bankContacts[0];
    }

    return {
      sections: [
        {
          title: 'Bank Account Information',
          elements: [
            { label: 'Code', value: this.bank.bankCode },
            { label: 'Name', value: this.bank.bankName },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            { label: 'Address', value: this.bank.bankAddress },
            {
              label: 'Phone/s',
              value: this.bank.bankPhones?.map((e) => e.bankPhoneNumber),
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
    const primary = this.bank.bankContacts?.[0];
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
