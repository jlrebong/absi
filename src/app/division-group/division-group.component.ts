import { Component } from '@angular/core';
import { LABELS } from '../core/models/labels';
import { SubAgentGrpClass } from '../core/models/division-group';
@Component({
  selector: 'app-division-group',
  templateUrl: './division-group.component.html',
  styleUrls: ['./division-group.component.css'],
})
export class DivisionGroupComponent {
  maxLength = 100;
  labels = LABELS['subAgentGrp'];
  subAgentGrp: SubAgentGrpClass;
  constructor() {
    this.subAgentGrp = new SubAgentGrpClass();
  }
  setInformation(e) {
    this.subAgentGrp.information = e;
  }
  setLocation(e) {
    this.subAgentGrp.location = e;
  }
  setPhones(e) {
    this.subAgentGrp.phones = e.value;
  }
  setContacts(e) {
    this.subAgentGrp.contacts = e;
  }
  onAgree(e) {}
  getSummary() {
    let primary = null;
    if (
      this.subAgentGrp.subAgentGrpContacts &&
      this.subAgentGrp.subAgentGrpContacts[0]
    ) {
      primary = this.subAgentGrp.subAgentGrpContacts[0];
    }
    return {
      sections: [
        {
          title: 'Division/Group Information',
          elements: [
            { label: 'Code', value: this.subAgentGrp.subAgentGrpCode },
            { label: 'Name', value: this.subAgentGrp.subAgentGrpName },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.subAgentGrp.subAgentGrpAddress,
            },
            {
              label: 'Phone/s',
              value: this.subAgentGrp.subAgentGrpPhones?.map(
                (e) => e.subAgentGrpPhoneNumber
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
    const primary = this.subAgentGrp.subAgentGrpContacts?.[0];
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
