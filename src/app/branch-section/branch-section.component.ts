import { Component } from '@angular/core';
import { SubAgentSubGrpClass } from '../core/models/branch-section';
import { LABELS } from '../core/models/labels';

@Component({
  selector: 'app-branch-section',
  templateUrl: './branch-section.component.html',
  styleUrls: ['./branch-section.component.css'],
})
export class BranchSectionComponent {
  maxLength = 100;
  labels = LABELS['subAgentSubGrp'];
  subAgentSubGrp: SubAgentSubGrpClass;
  constructor() {
    this.subAgentSubGrp = new SubAgentSubGrpClass();
  }
  setInformation(e) {
    this.subAgentSubGrp.information = e;
  }
  setLocation(e) {
    this.subAgentSubGrp.location = e;
  }
  setPhones(e) {
    this.subAgentSubGrp.phones = e.value;
  }
  setContacts(e) {
    this.subAgentSubGrp.contacts = e;
  }
  onAgree(e) {}
  getSummary() {
    let primary = null;
    if (
      this.subAgentSubGrp.subAgentSubGrpContacts &&
      this.subAgentSubGrp.subAgentSubGrpContacts[0]
    ) {
      primary = this.subAgentSubGrp.subAgentSubGrpContacts[0];
    }
    return {
      sections: [
        {
          title: 'Branch Section Information',
          elements: [
            { label: 'Code', value: this.subAgentSubGrp.subAgentSubGrpCode },
            { label: 'Name', value: this.subAgentSubGrp.subAgentSubGrpName },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.subAgentSubGrp.subAgentSubGrpAddress,
            },
            {
              label: 'Phone/s',
              value: this.subAgentSubGrp.subAgentSubGrpPhones?.map(
                (e) => e.subAgentSubGrpPhoneNumber
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
    const primary = this.subAgentSubGrp.subAgentSubGrpContacts?.[0];
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
