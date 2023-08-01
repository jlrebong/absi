import { Component } from '@angular/core';
import { LABELS } from '../core/models/labels';
import { MotorShopClass } from '../core/models/motor-shop';
@Component({
  selector: 'app-motor-shop',
  templateUrl: './motor-shop.component.html',
  styleUrls: ['./motor-shop.component.css'],
})
export class MotorShopComponent {
  maxLength = 100;
  maxLength1 = 30;
  labels = LABELS['motorShop'];
  motorShop: MotorShopClass;
  constructor() {
    this.motorShop = new MotorShopClass();
  }
  setInformation(e) {
    this.motorShop.information = e;
  }
  setLocation(e) {
    this.motorShop.location = e;
  }
  setPhones(e) {
    this.motorShop.phones = e.value;
  }
  setContacts(e) {
    this.motorShop.contacts = e;
  }
  onAgree(e) {}
  getSummary() {
    let primary = null;
    if (
      this.motorShop.motorShopContacts &&
      this.motorShop.motorShopContacts[0]
    ) {
      primary = this.motorShop.motorShopContacts[0];
    }
    return {
      sections: [
        {
          title: 'Division/Group Information',
          elements: [
            { label: 'Code', value: this.motorShop.motorShopCode },
            { label: 'Name', value: this.motorShop.motorShopName },
            { label: 'TIN', value: this.motorShop.motorShopTin },
          ],
        },
        {
          title: 'Address and Phone/s',
          elements: [
            {
              label: 'Address',
              value: this.motorShop.motorShopAddress,
            },
            {
              label: 'Phone/s',
              value: this.motorShop.motorShopPhones?.map(
                (e) => e.motorShopPhoneNumber
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
    const primary = this.motorShop.motorShopContacts?.[0];
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
