import { Contact, ContactPhone } from './contact-phone';

// This is the way to create a class from an interface in angular
// interface-class merging
export interface AdjusterClass extends Adjuster {}
export class AdjusterClass {
  get information() {
    return {
      status: this.adjusterStatus || 'new',
      name: this.adjusterName || '',
      code: this.adjusterCode || '',
      specialty: this.adjusterSpecialty || '',
    };
  }

  set information(e) {
    this.adjusterStatus = e.status;
    this.adjusterName = e.name;
    this.adjusterCode = e.code;
    this.adjusterSpecialty = e.specialty;
  }

  get location() {
    return {
      address: this.adjusterAddress || '',
      country: this.adjusterCountry || '',
      province: this.adjusterProvince || '',
      city: this.adjusterCity || '',
      zip: this.adjusterZipcode || '',
      phones: this.adjusterPhones || [],
    };
  }

  set location(e) {
    this.adjusterAddress = e.address;
    this.adjusterCountry = e.country;
    this.adjusterProvince = e.province;
    this.adjusterCity = e.city;
    this.adjusterZipcode = e.zip;
  }

  get phones() {
    return this.adjusterPhones?.map((e) => {
      return {
        lineNo: e.adjusterPhoneLineNo,
        type: e.adjusterPhoneType,
        number: e.adjusterPhoneNumber,
        status: e.adjusterPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.adjusterPhones = [];

    e.forEach((phone) => {
      let a = {
        adjusterPhoneLineNo: phone.lineNo,
        adjusterPhoneDmpPk: {
          adjusterPhoneAdjusterTransNo: '',
          adjusterPhoneLineNo: '',
        },
        adjusterPhoneAdjusterTransNo: '',
        adjusterPhoneAdjusterPk: '',
        adjusterPhoneType: phone.type,
        adjusterPhoneNumber: phone.number,
        adjusterPhoneStatus: phone.status,
        adjusterPhoneCreatedBy: '',
        adjusterPhoneDateCreated: '',
        adjusterPhoneUpdatedBy: '',
        adjusterPhoneDateUpdated: '',
      };
      this.adjusterPhones.push(a);
    });
  }

  get contacts() {
    return this.adjusterContacts || [];
  }

  set contacts(e) {
    this.adjusterContacts = e;
  }
    get primaryContact() {
        let primary = this.adjusterContacts?.filter(e=>e.contactIsDefault == true);
        
        let primaryContact = (primary && primary[0]) || null;
        return primaryContact;
    }

}

export interface Adjuster {
  adjusterTransNo: any;
  adjusterPk: string;
  adjusterId: string;
  adjusterCode: string;
  adjusterName: string;
  adjusterStatus: string;
  adjusterAddress: string;
  adjusterCity: string;
  adjusterProvince: string;
  adjusterCountry: string;
  adjusterZipcode: string;
  adjusterSpecialty: string;
  adjusterWfStatus: any;
  adjusterWfTrackerId: any;
  adjusterIsPosted: any;
  adjusterCreatedBy: string;
  adjusterDateCreated: string;
  adjusterUpdatedBy: string;
  adjusterDateUpdated: string;
  adjusterPhones: AdjusterPhone[];
  adjusterContacts: Contact[];
  adjusterCompleteAddress: string;
  adjusterPhoneList: string;
  adjusterPrimaryContactName: string;
  adjusterPrimaryContactDesignation: string;
  adjusterPrimaryContactEmail: string;
  adjusterPrimaryContactGroupEmail: any;
  adjusterPrimaryContactBirthdate: any;
  adjusterPrimayContactPhoneList: any;
  adjusterStatusLabel: any;
  rowNum: any;
  totalRowNum: any;
}

export interface AdjusterPhone {
  adjusterPhoneDmpPk: AdjusterPhoneDmpPk;
  adjusterPhoneAdjusterTransNo: any;
  adjusterPhoneAdjusterPk: string;
  adjusterPhoneLineNo: number;
  adjusterPhoneType: string;
  adjusterPhoneNumber: string;
  adjusterPhoneStatus: any;
  adjusterPhoneCreatedBy: string;
  adjusterPhoneDateCreated: string;
  adjusterPhoneUpdatedBy: any;
  adjusterPhoneDateUpdated: any;
}

export interface AdjusterPhoneDmpPk {
  adjusterPhoneAdjusterTransNo: any;
  adjusterPhoneLineNo: any;
}
