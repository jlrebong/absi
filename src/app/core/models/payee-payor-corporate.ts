import { Contact } from './contact-phone';

// This is the way to create a class from an interface in angular
// interface-class merging
export interface PayeePayorCorporateClass extends PayeePayorCorporate {}
export class PayeePayorCorporateClass {
  get information() {
    return {
      status: this.payeeStatus || 'new',
      name: this.payeeCorporateName || '',
      industry: this.payeeIndustryDesc || '',
      tin: this.payeeTin || '',
      accountNo: this.payeeAccountNo || '',
    };
  }

  set information(e) {
    this.payeeStatus = e.status;
    this.payeeCorporateName = e.name;
    this.payeeIndustryDesc = e.industry;
    this.payeeTin = e.tin;
    this.payeeAccountNo = e.accountNo;
  }

  get location() {
    return {
      address: this.payeeAddress || '',
      country: this.payeeCountry || '',
      province: this.payeeProvince || '',
      city: this.payeeCity || '',
      zip: this.payeeZipcode || '',
      phones: this.payeePhones || [],
    };
  }

  set location(e) {
    this.payeeAddress = e.address;
    this.payeeCountry = e.country;
    this.payeeProvince = e.province;
    this.payeeCity = e.city;
    this.payeeZipcode = e.zip;
  }

  get phones() {
    return this.payeePhones?.map((e) => {
      return {
        lineNo: e.payeePhoneLineNo,
        type: e.payeePhoneType,
        number: e.payeePhoneNumber,
        status: e.payeePhoneStatus,
      };
    });
  }

  set phones(e) {
    this.payeePhones = [];

    e.forEach((phone) => {
      let a = {
        payeePhoneLineNo: phone.lineNo,
        payeePhoneDmpPk: {
          payeePhonePayeeTransNo: '',
          payeePhoneLineNo: '',
        },
        payeePhonePayeeTransNo: '',
        payeePhonePayeePk: '',
        payeePhoneType: phone.type,
        payeePhoneNumber: phone.number,
        payeePhoneStatus: phone.status,
        payeePhoneCreatedBy: '',
        payeePhoneDateCreated: '',
        payeePhoneUpdatedBy: '',
        payeePhoneDateUpdated: '',
      };
      this.payeePhones.push(a);
    });
  }

  get contacts() {
    return this.payeeContacts || [];
  }

  set contacts(e) {
    this.payeeContacts = e;
  }
  get primaryContact() {
    let primary = this.payeeContacts?.filter((e) => e.contactIsDefault == true);

    let primaryContact = (primary && primary[0]) || null;
    return primaryContact;
  }
}

export interface PayeePayorCorporate {
  payeeType: string;
  payeeTransNo: string;
  payeePk: string;
  payeeId: string;
  payeeStatus: string;
  payeeCorporateName: string;
  payeeAddress: string;
  payeeCity: string;
  payeeProvince: string;
  payeeCountry: string;
  payeeZipcode: string;
  payeeTin: string;
  payeeAccountNo: string;
  payeeIndustryPk: string;
  payeeWfStatus: string;
  payeeWfTrackerId: number;
  payeeIsPosted: boolean;
  payeeCreatedBy: string;
  payeeDateCreated: string;
  payeeUpdatedBy: string;
  payeeDateUpdated: string;
  payeeIndustryDesc: string;
  payeePhones: PayeePhone[];
  payeeContacts: Contact[];
  payeeCompleteAddress: string;
  payeePhoneList: string;
  payeePrimaryContactName: string;
  payeePrimaryContactDesignation: string;
  payeePrimaryContactEmail: string;
  payeePrimaryContactGroupEmail: string;
  payeePrimaryContactBirthdate: string;
  payeePrimayContactPhoneList: string;
}

export interface PayeePhone {
  payeePhoneDmpPk: PayeePhoneDmpPk;
  payeePhonePayeeTransNo: string;
  payeePhonePayeePk: string;
  payeePhoneLineNo: number;
  payeePhoneType: string;
  payeePhoneNumber: string;
  payeePhoneStatus: string;
  payeePhoneCreatedBy?: string;
  payeePhoneDateCreated?: string;
  payeePhoneUpdatedBy?: string;
  payeePhoneDateUpdated?: string;
}

export interface PayeePhoneDmpPk {
  payeePhonePayeeTransNo: any;
  payeePhoneLineNo: any;
}
