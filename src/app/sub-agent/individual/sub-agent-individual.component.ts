import { Component } from '@angular/core';
import { LABELS } from 'src/app/core/models/labels';
import { SubAgentIndividualClass } from 'src/app/core/models/sub-agent-individual';
@Component({
  selector: 'app-sub-agent-individual',
  templateUrl: './sub-agent-individual.component.html',
  styleUrls: ['./sub-agent-individual.component.css'],
})
export class SubAgentIndividualComponent {
  labels = LABELS['subAgentIndividual'];
  subAgentIndividual: SubAgentIndividualClass;
  maxLength = 255;
  maxLength1 = 30;

  constructor() {
    // This should be from the service
    this.subAgentIndividual = new SubAgentIndividualClass();
  }

  setInformation(e) {
    this.subAgentIndividual.information = e;
  }

  setLocation(e) {
    this.subAgentIndividual.location = e;
  }

  setPhones(e) {
    this.subAgentIndividual.phones = e.value;
  }

  setContacts(e) {
    console.log('SET CONTACTS', e);
    this.subAgentIndividual.contacts = e;
  }

  onAgree(e) {}

  getSummary() {
    let primary = this.subAgentIndividual.primaryContact;

    return {
      sections: [
        {
          title: 'Account Referrer Information',
          elements: [
            {
              label: 'Name',
              value: this.getFullName(),
            },
            {
              label: 'Email Address',
              value: this.subAgentIndividual.subAgentEmail,
            },
            { label: 'TIN', value: this.subAgentIndividual.subAgentTin },
            {
              label: 'Account No.',
              value: this.subAgentIndividual.subAgentAccountNo,
            },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.subAgentIndividual.subAgentAddress,
            },
            {
              label: 'Phone/s',
              value: this.subAgentIndividual.subAgentPhones?.map(
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
    const primary = this.subAgentIndividual.subAgentContacts?.[0];
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
    const firstName = this.subAgentIndividual.subAgentNameFirst || '';
    const middleInitial =
      this.subAgentIndividual.subAgentNameMiddleInitial || '';
    const lastName = this.subAgentIndividual.subAgentNameLast || '';
    const salutation = this.subAgentIndividual.subAgentNamePrefix || '';

    // Join name components without extra spaces
    const nameComponents = [salutation, firstName, middleInitial, lastName];
    return nameComponents.join(' ');
  }
}
