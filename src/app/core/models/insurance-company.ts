import { Contact } from './contact-phone';

// This is the way to create a class from an interface in angular
// interface-class merging
export interface InsuranceCompanyClass extends InsuranceCompany {}
export class InsuranceCompanyClass {
  get information() {
    return {
      status: this.inscoStatus || 'new',
      name: this.inscoName || '',
      code: this.inscoCode || '',
      tierLevel: this.inscoTierLevel,
      isVatRegistered: this.inscoIsVatRegistered,
      withServiceStandard: this.inscoWithServiceStandard,
      docStampFlag: this.inscoDocStampFlag || '',
      yearInDays: this.inscoYearInDays,
      paymentWarranty: this.inscoPaymentWarranty,
      branchTin: this.inscoBranches.map((e) => {
        return e.inscoBranchTin;
      }),
    };
  }

  set information(e) {
    this.inscoStatus = e.status;
    this.inscoName = e.name;
    this.inscoCode = e.code;
    this.inscoTierLevel = e.tierLevel;
    this.inscoIsVatRegistered = e.isVatRegistered;
    this.inscoWithServiceStandard = e.withServiceStandard;
    this.inscoDocStampFlag = e.docStampFlag;
    this.inscoYearInDays = e.yearInDays;
    this.inscoPaymentWarranty = e.paymentWarranty;
    this.inscoBranches.map((branch, index) => {
      branch.inscoBranchTin = e.branchTin[index];
    });
  }

  get location() {
    return this.inscoBranches.map((e) => {
      return {
        address: e.inscoBranchAddress || '',
        country: e.inscoBranchCountry || '',
        province: e.inscoBranchProvince || '',
        city: e.inscoBranchCity || '',
        zip: e.inscoBranchZipcode || '',
        phones: e.inscoBranchPhones || [],
        branchStatus: e.inscoBranchStatus || '',
        branchCode: e.inscoBranchCode || '',
        lgtRate: e.inscoBranchLgtRate,
        accountNo: e.inscoBranchAccountNo || '',
      };
    });
  }

  set location(locations) {
    locations.forEach((location, index) => {
      const branch = this.inscoBranches[index];
      if (branch) {
        branch.inscoBranchAddress = location.address || '';
        branch.inscoBranchCountry = location.country || '';
        branch.inscoBranchProvince = location.province || '';
        branch.inscoBranchCity = location.city || '';
        branch.inscoBranchZipcode = location.zip || '';
        branch.inscoBranchPhones = location.phones || [];
        branch.inscoBranchStatus = location.branchStatus || '';
        branch.inscoBranchCode = location.branchCode || '';
        branch.inscoBranchLgtRate = location.lgtRate || 0;
        branch.inscoBranchAccountNo = location.accountNo || '';
      }
    });
  }

  get phones() {
    return this.inscoBranches.map((branch) =>
      branch.inscoBranchPhones.map((phone) => {
        return {
          lineNo: phone.inscoBranchPhoneLineNo,
          type: phone.inscoBranchPhoneType || '',
          number: phone.inscoBranchPhoneNumber || '',
          status: phone.inscoBranchPhoneStatus || '',
        };
      })
    );
  }

  set phones(phoneData) {
    phoneData.forEach((branchPhones, branchIndex) => {
      const branch = this.inscoBranches[branchIndex];
      if (branch) {
        branch.inscoBranchPhones = branchPhones.map((phone) => ({
          inscoBranchPhoneLineNo: phone.lineNo || 1,
          inscoBranchPhoneType: phone.type || '',
          inscoBranchPhoneNumber: phone.number || '',
          inscoBranchPhoneStatus: phone.status || '',
        })) as InscoBranchPhone[];
      }
    });
  }

  get contacts() {
    return this.inscoBranches.map((e) => {
      return e.inscoBranchContacts || [];
    });
  }

  set contacts(e) {
    this.inscoBranches.map((branch, index) => {
      branch.inscoBranchContacts = e[index];
    });
  }
  get primaryContact() {
    let primary = this.inscoBranches
      .flatMap((branch) => branch.inscoBranchContacts || [])
      .find((contact) => contact.contactIsDefault === true);

    return primary || null;
  }
}

export interface InsuranceCompany {
  inscoTransNo: string;
  inscoPk: string;
  inscoId: string;
  inscoCode: string;
  inscoName: string;
  inscoStatus: string;
  inscoIsVatRegistered: boolean;
  inscoDocStampFlag: string;
  inscoYearInDays: number;
  inscoPaymentWarranty: number;
  inscoTierLevel: number;
  inscoWithServiceStandard: boolean;
  inscoWfStatus: string;
  inscoWfTrackerId: number;
  inscoIsPosted: boolean;
  inscoCreatedBy: string;
  inscoDateCreated: string;
  inscoUpdatedBy: string;
  inscoDateUpdated: string;
  inscoBranches: InscoBranch[];
}

export interface InscoBranch {
  inscoBranchDmpPk: InscoBranchDmpPk;
  inscoBranchInscoTransNo: string;
  inscoBranchInscoPk: string;
  inscoBranchId: string;
  inscoBranchPk: string;
  inscoBranchCode: string;
  inscoBranchStatus: string;
  inscoBranchAddress: string;
  inscoBranchCity: string;
  inscoBranchProvince: string;
  inscoBranchCountry: string;
  inscoBranchZipcode: string;
  inscoBranchLgtRate: number;
  inscoBranchTin: string;
  inscoBranchAccountNo: string;
  inscoBranchCreatedBy: string;
  inscoBranchDateCreated: string;
  inscoBranchUpdatedBy: string;
  inscoBranchDateUpdated: string;
  inscoBranchPhones: InscoBranchPhone[];
  inscoBranchContacts: Contact[];
  inscoBranchCompleteAddress: string;
  inscoBranchPhoneList: string;
  inscoBranchPrimaryContactName: string;
  inscoBranchPrimaryContactDesignation: string;
  inscoBranchPrimaryContactEmail: string;
  inscoBranchPrimaryContactGroupEmail: string;
  inscoBranchPrimaryContactBirthdate: string;
  inscoBranchPrimayContactPhoneList: string;
}

export interface InscoBranchDmpPk {
  inscoBranchInscoTransNo: string;
  inscoBranchId: string;
}

export interface InscoBranchPhone {
  inscoBranchPhoneDmpPk: InscoBranchPhoneDmpPk;
  inscoBranchPhoneInscoTransNo: string;
  inscoBranchPhoneInscoPk: string;
  inscoBranchPhoneInscoBranchPk: string;
  inscoBranchPhoneInscoBranchId: string;
  inscoBranchPhoneLineNo: number;
  inscoBranchPhoneType: string;
  inscoBranchPhoneNumber: string;
  inscoBranchPhoneStatus: string;
  inscoBranchPhoneCreatedBy?: string;
  inscoBranchPhoneDateCreated?: string;
  inscoBranchPhoneUpdatedBy?: string;
  inscoBranchPhoneDateUpdated?: string;
}

export interface InscoBranchPhoneDmpPk {
  inscoBranchPhoneInscoTransNo: string;
  inscoBranchPhoneInscoBranchId: string;
  inscoBranchPhoneLineNo: number;
}
