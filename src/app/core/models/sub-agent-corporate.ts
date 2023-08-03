import { Contact } from './contact-phone';

// This is the way to create a class from an interface in angular
// interface-class merging
export interface SubAgentCorporateClass extends SubAgentCorporate {}
export class SubAgentCorporateClass {
  get information() {
    return {
      name: this.subAgentCorporateName || '',
      tin: this.subAgentTin || '',
      accountNo: this.subAgentAccountNo || '',
    };
  }

  set information(e) {
    this.subAgentCorporateName = e.name;
    this.subAgentTin = e.tin;
    this.subAgentAccountNo = e.accountNo;
  }

  get location() {
    return {
      address: this.subAgentAddress || '',
      country: this.subAgentCountry || '',
      province: this.subAgentProvince || '',
      city: this.subAgentCity || '',
      zip: this.subAgentZipcode || '',
      phones: this.subAgentPhones || [],
    };
  }

  set location(e) {
    this.subAgentAddress = e.address;
    this.subAgentCountry = e.country;
    this.subAgentProvince = e.province;
    this.subAgentCity = e.city;
    this.subAgentZipcode = e.zip;
  }

  get phones() {
    return this.subAgentPhones?.map((e) => {
      return {
        lineNo: e.subAgentPhoneLineNo,
        type: e.subAgentPhoneType,
        number: e.subAgentPhoneNumber,
        status: e.subAgentPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.subAgentPhones = [];

    e.forEach((phone) => {
      let a = {
        subAgentPhoneLineNo: phone.lineNo,
        subAgentPhoneDmpPk: {
          subAgentPhoneSubAgentTransNo: '',
          subAgentPhoneLineNo: '',
        },
        subAgentPhoneSubAgentTransNo: '',
        subAgentPhoneSubAgentPk: '',
        subAgentPhoneType: phone.type,
        subAgentPhoneNumber: phone.number,
        subAgentPhoneStatus: phone.status,
        subAgentPhoneCreatedBy: '',
        subAgentPhoneDateCreated: '',
        subAgentPhoneUpdatedBy: '',
        subAgentPhoneDateUpdated: '',
      };
      this.subAgentPhones.push(a);
    });
  }

  get contacts() {
    return this.subAgentContacts || [];
  }

  set contacts(e) {
    this.subAgentContacts = e;
  }
  get primaryContact() {
    let primary = this.subAgentContacts?.filter(
      (e) => e.contactIsDefault == true
    );

    let primaryContact = (primary && primary[0]) || null;
    return primaryContact;
  }
}

export interface SubAgentCorporate {
  subAgentType: string;
  subAgentTransNo: string;
  subAgentPk: string;
  subAgentId: string;
  subAgentCode: string;
  subAgentStatus: string;
  subAgentCorporateName: string;
  subAgentAddress: string;
  subAgentCity: string;
  subAgentProvince: string;
  subAgentCountry: string;
  subAgentZipcode: string;
  subAgentTin: string;
  subAgentAccountNo: string;
  subAgentWfStatus: string;
  subAgentWfTrackerId: number;
  subAgentIsPosted: boolean;
  subAgentCreatedBy: string;
  subAgentDateCreated: string;
  subAgentUpdatedBy: string;
  subAgentDateUpdated: string;
  subAgentPhones: SubAgentPhone[];
  subAgentContacts: Contact[];
  subAgentCompleteAddress: string;
  subAgentPhoneList: string;
  subAgentPrimaryContactName: string;
  subAgentPrimaryContactDesignation: string;
  subAgentPrimaryContactEmail: string;
  subAgentPrimaryContactGroupEmail: string;
  subAgentPrimaryContactBirthdate: string;
  subAgentPrimayContactPhoneList: string;
}

export interface SubAgentPhone {
  subAgentPhoneDmpPk: SubAgentPhoneDmpPk;
  subAgentPhoneSubAgentTransNo: string;
  subAgentPhoneSubAgentPk: string;
  subAgentPhoneLineNo: number;
  subAgentPhoneType: string;
  subAgentPhoneNumber: string;
  subAgentPhoneStatus: string;
  subAgentPhoneCreatedBy?: string;
  subAgentPhoneDateCreated?: string;
  subAgentPhoneUpdatedBy?: string;
  subAgentPhoneDateUpdated?: string;
}

export interface SubAgentPhoneDmpPk {
  subAgentPhoneSubAgentTransNo: any;
  subAgentPhoneLineNo: any;
}
