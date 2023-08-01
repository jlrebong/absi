import { Contact } from './contact-phone';

export interface MortgageeClass extends Mortgagee {}
export class MortgageeClass {
  get information() {
    return {
      status: this.mortgageeStatus || 'new',
      name: this.mortgageeName || '',
      code: this.mortgageeCode || '',
    };
  }

  set information(e) {
    this.mortgageeStatus = e.status;
    this.mortgageeName = e.name;
    this.mortgageeCode = e.code;
  }

  get location() {
    return {
      address: this.mortgageeAddress || '',
      country: this.mortgageeCountry || '',
      province: this.mortgageeProvince || '',
      city: this.mortgageeCity || '',
      zip: this.mortgageeZipcode || '',
      phones: this.mortgageePhones || [],
    };
  }

  set location(e) {
    this.mortgageeAddress = e.address;
    this.mortgageeCountry = e.country;
    this.mortgageeProvince = e.province;
    this.mortgageeCity = e.city;
    this.mortgageeZipcode = e.zip;
  }

  get phones() {
    return this.mortgageePhones?.map((e) => {
      return {
        lineNo: e.mortgageePhoneLineNo,
        type: e.mortgageePhoneType,
        number: e.mortgageePhoneNumber,
        status: e.mortgageePhoneStatus,
      };
    });
  }

  set phones(e) {
    this.mortgageePhones = [];

    e.forEach((phone) => {
      let a = {
        mortgageePhoneLineNo: phone.lineNo,
        mortgageePhoneDmpPk: {
          mortgageePhoneMortgageeTransNo: '',
          mortgageePhoneLineNo: '',
        },
        mortgageePhoneMortgageeTransNo: '',
        mortgageePhoneMortgageePk: '',
        mortgageePhoneType: phone.type,
        mortgageePhoneNumber: phone.number,
        mortgageePhoneStatus: phone.status,
        mortgageePhoneCreatedBy: '',
        mortgageePhoneDateCreated: '',
        mortgageePhoneUpdatedBy: '',
        mortgageePhoneDateUpdated: '',
      };
      this.mortgageePhones.push(a);
    });
  }

  get contacts() {
    return this.mortgageeContacts || [];
  }

  set contacts(e) {
    this.mortgageeContacts = e;
  }
}

export interface Mortgagee {
  mortgageeTransNo: string;
  mortgageePk: string;
  mortgageeId: string;
  mortgageeCode: string;
  mortgageeName: string;
  mortgageeStatus: string;
  mortgageeAddress: string;
  mortgageeCity: string;
  mortgageeProvince: string;
  mortgageeCountry: string;
  mortgageeZipcode: string;
  mortgageeTin: string;
  mortgageeWfStatus: string;
  mortgageeWfTrackerId: number;
  mortgageeIsPosted: boolean;
  mortgageeCreatedBy: string;
  mortgageeDateCreated: string;
  mortgageeUpdatedBy: string;
  mortgageeDateUpdated: string;
  mortgageePhones: MortgageePhone[];
  mortgageeContacts: Contact[];
  mortgageeCompleteAddress: string;
  mortgageePhoneList: string;
  mortgageePrimaryContactName: string;
  mortgageePrimaryContactDesignation: string;
  mortgageePrimaryContactEmail: string;
  mortgageePrimaryContactGroupEmail: string;
  mortgageePrimaryContactBirthdate: string;
  mortgageePrimayContactPhoneList: string;
  mortgageeStatusLabel: string;
  rowNum: number;
  totalRowNum: number;
}

export interface MortgageePhone {
  mortgageePhoneDmpPk: MortgageePhoneDmpPk;
  mortgageePhoneMortgageeTransNo: string;
  mortgageePhoneMortgageePk: string;
  mortgageePhoneLineNo: number;
  mortgageePhoneType: string;
  mortgageePhoneNumber: string;
  mortgageePhoneStatus: string;
  mortgageePhoneCreatedBy: string;
  mortgageePhoneDateCreated: string;
  mortgageePhoneUpdatedBy: string;
  mortgageePhoneDateUpdated: string;
}

export interface MortgageePhoneDmpPk {
  mortgageePhoneMortgageeTransNo: any;
  mortgageePhoneLineNo: any;
}
