import { Contact } from './contact-phone';

export interface BankClass extends Bank {}
export class BankClass {
  get information() {
    return {
      status: this.bankStatus || 'new',
      name: this.bankName || '',
      code: this.bankCode || '',
    };
  }

  set information(e) {
    this.bankStatus = e.status;
    this.bankName = e.name;
    this.bankCode = e.code;
  }

  get location() {
    return {
      address: this.bankAddress || '',
      country: this.bankCountry || '',
      province: this.bankProvince || '',
      city: this.bankCity || '',
      zip: this.bankZipcode || '',
      phones: this.bankPhones || [],
    };
  }

  set location(e) {
    this.bankAddress = e.address;
    this.bankCountry = e.country;
    this.bankProvince = e.province;
    this.bankCity = e.city;
    this.bankZipcode = e.zip;
  }

  get phones() {
    return this.bankPhones?.map((e) => {
      return {
        lineNo: e.bankPhoneLineNo,
        type: e.bankPhoneType,
        number: e.bankPhoneNumber,
        status: e.bankPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.bankPhones = [];

    e.forEach((phone) => {
      let a = {
        bankPhoneLineNo: phone.lineNo,
        bankPhoneDmpPk: {
          bankPhoneBankTransNo: '',
          bankPhoneLineNo: '',
        },
        bankPhoneBankTransNo: '',
        bankPhoneBankPk: '',
        bankPhoneType: phone.type,
        bankPhoneNumber: phone.number,
        bankPhoneStatus: phone.status,
        bankPhoneCreatedBy: '',
        bankPhoneDateCreated: '',
        bankPhoneUpdatedBy: '',
        bankPhoneDateUpdated: '',
      };
      this.bankPhones.push(a);
    });
  }

  get contacts() {
    return this.bankContacts || [];
  }

  set contacts(e) {
    this.bankContacts = e;
  }
}

export interface Bank {
  bankTransNo: string;
  bankPk: string;
  bankCode: string;
  bankName: string;
  bankBranchPk: string;
  bankStatus: string;
  bankAddress: string;
  bankCity: string;
  bankProvince: string;
  bankCountry: string;
  bankZipcode: string;
  bankWfStatus: string;
  bankWfTrackerId: number;
  bankIsPosted: boolean;
  bankCreatedBy: string;
  bankDateCreated: string;
  bankUpdatedBy: string;
  bankDateUpdated: string;
  bankBankAccounts: BankBankAccount[];
  bankPhones: BankPhone[];
  bankContacts: Contact[];
  bankCompleteAddress: string;
  bankPhoneList: string;
  bankPrimaryContactName: string;
  bankPrimaryContactDesignation: string;
  bankPrimaryContactEmail: string;
  bankPrimaryContactGroupEmail: string;
  bankPrimaryContactBirthdate: string;
  bankPrimayContactPhoneList: string;
}

export interface BankBankAccount {
  bankAcctDmpPk: BankAcctDmpPk;
  bankAcctBankTransNo: string;
  bankAcctBankPk: string;
  bankAcctId: string;
  bankAcctAccountNo: string;
  bankAcctCurrency: string;
  bankAcctAccountType: string;
  bankAcctCheckNoStart: number;
  bankAcctCheckNoEnd: number;
  bankAcctCheckNo: number;
  bankAcctType: string;
  bankAcctIsDepositoryAccount: boolean;
  bankAcctIsUsedInPayUpload: boolean;
  bankAcctStatus: string;
  bankAcctCreatedBy: string;
  bankAcctDateCreated: string;
  bankAcctUpdatedBy: string;
  bankAcctDateUpdated: string;
  bankAcctGlAccount: BankAcctGlAccount;
}

export interface BankAcctDmpPk {
  bankAcctBankTransNo: string;
  bankAcctId: string;
}

export interface BankAcctGlAccount {
  bankAcctGlaBnkAcctDmpPk: BankAcctGlaBnkAcctDmpPk;
  bankAcctBankTransNo: string;
  bankAcctBankPk: string;
  bankAcctId: string;
  bankAcctGlaAcctCode1Cib: string;
  bankAcctGlaAcctCode2Cib: string;
  bankAcctGlaAcctCode3Cib: string;
  bankAcctGlaCreatedBy: string;
  bankAcctGlaDateCreated: string;
  bankAcctGlaUpdatedBy: string;
  bankAcctGlaDateUpdated: string;
}

export interface BankAcctGlaBnkAcctDmpPk {
  bankAcctBankTransNo: string;
  bankAcctId: string;
}

export interface BankPhone {
  bankPhoneDmpPk: BankPhoneDmpPk;
  bankPhoneBankTransNo: any;
  bankPhoneBankPk: string;
  bankPhoneLineNo: number;
  bankPhoneType: string;
  bankPhoneNumber: string;
  bankPhoneStatus: any;
  bankPhoneCreatedBy: string;
  bankPhoneDateCreated: string;
  bankPhoneUpdatedBy: any;
  bankPhoneDateUpdated: any;
}

export interface BankPhoneDmpPk {
  bankPhoneBankTransNo: any;
  bankPhoneLineNo: any;
}
