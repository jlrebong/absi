import { Contact } from './contact-phone';

// This is the way to create a class from an interface in angular
// interface-class merging
export interface PayeePayorIndividualClass extends PayeePayorIndividual {}
export class PayeePayorIndividualClass {
  get information() {
    return {
      status: this.payeeStatus || 'new',
      nameLast: this.payeeNameLast || '',
      nameFirst: this.payeeNameFirst || '',
      nameMiddleInitial: this.payeeNameMiddleInitial || '',
      namePrefix: this.payeeNamePrefix || '',
      nameSuffix: this.payeeNameSuffix || '',
      email: this.payeeEmail || '',
      industry: this.payeeIndustryDesc || '',
      tin: this.payeeTin || '',
      accountNo: this.payeeAccountNo || '',
    };
  }

  set information(e) {
    this.payeeStatus = e.status;
    this.payeeIndustryDesc = e.industry;
    this.payeeNameLast = e.nameLast;
    this.payeeNameFirst = e.nameFirst;
    this.payeeNameMiddleInitial = e.nameMiddleInitial;
    this.payeeNamePrefix = e.namePrefix;
    this.payeeNameSuffix = e.nameSuffix;
    this.payeeEmail = e.email;
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

export interface PayeePayorIndividual {
  payeeType: string;
  payeeTransNo: string;
  payeePk: string;
  payeeId: string;
  payeeStatus: string;
  payeeNameLast: string;
  payeeNameFirst: string;
  payeeNameMiddleInitial: string;
  payeeNamePrefix: string;
  payeeNameSuffix: string;
  payeeAddress: string;
  payeeCity: string;
  payeeProvince: string;
  payeeCountry: string;
  payeeZipcode: string;
  payeeEmail: string;
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
