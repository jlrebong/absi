import { Component } from '@angular/core';
import { LABELS } from 'src/app/core/models/labels';
import { SubAgentCorporateClass } from 'src/app/core/models/sub-agent-corporate';
@Component({
  selector: 'app-sub-agent-corporate',
  templateUrl: './sub-agent-corporate.component.html',
  styleUrls: ['./sub-agent-corporate.component.css'],
})
export class SubAgentCorporateComponent {
  labels = LABELS['subAgentCorporate'];
  subAgentCorporate: SubAgentCorporateClass;
  maxLength = 255;
  maxLength1 = 30;

  constructor() {
    // This should be from the service
    this.subAgentCorporate = new SubAgentCorporateClass();
  }

  setInformation(e) {
    this.subAgentCorporate.information = e;
  }

  setLocation(e) {
    this.subAgentCorporate.location = e;
  }

  setPhones(e) {
    this.subAgentCorporate.phones = e.value;
  }

  setContacts(e) {
    console.log('SET CONTACTS', e);
    this.subAgentCorporate.contacts = e;
  }

  onAgree(e) {}

  getSummary() {
    let primary = this.subAgentCorporate.primaryContact;

    return {
      sections: [
        {
          title: 'Account Referrer Information',
          elements: [
            {
              label: 'Name',
              value: this.subAgentCorporate.subAgentCorporateName,
            },
            { label: 'TIN', value: this.subAgentCorporate.subAgentTin },
            {
              label: 'Account No.',
              value: this.subAgentCorporate.subAgentAccountNo,
            },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            { label: 'Address', value: this.subAgentCorporate.subAgentAddress },
            {
              label: 'Phone/s',
              value: this.subAgentCorporate.subAgentPhones?.map(
                (e) => e.subAgentPhoneNumber
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
    const primary = this.subAgentCorporate.subAgentContacts?.[0];
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
