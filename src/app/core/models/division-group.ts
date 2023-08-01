import { Contact } from './contact-phone';

export interface SubAgentGrpClass extends SubAgentGrp {}
export class SubAgentGrpClass {
  get information() {
    return {
      status: this.subAgentGrpStatus || 'new',
      name: this.subAgentGrpName || '',
      code: this.subAgentGrpCode || '',
    };
  }

  set information(e) {
    this.subAgentGrpStatus = e.status;
    this.subAgentGrpName = e.name;
    this.subAgentGrpCode = e.code;
  }

  get location() {
    return {
      address: this.subAgentGrpAddress || '',
      country: this.subAgentGrpCountry || '',
      province: this.subAgentGrpProvince || '',
      city: this.subAgentGrpCity || '',
      zip: this.subAgentGrpZipcode || '',
      phones: this.subAgentGrpPhones || [],
    };
  }

  set location(e) {
    this.subAgentGrpAddress = e.address;
    this.subAgentGrpCountry = e.country;
    this.subAgentGrpProvince = e.province;
    this.subAgentGrpCity = e.city;
    this.subAgentGrpZipcode = e.zip;
  }

  get phones() {
    return this.subAgentGrpPhones?.map((e) => {
      return {
        lineNo: e.subAgentGrpPhoneLineNo,
        type: e.subAgentGrpPhoneType,
        number: e.subAgentGrpPhoneNumber,
        status: e.subAgentGrpPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.subAgentGrpPhones = [];

    e.forEach((phone) => {
      let a = {
        subAgentGrpPhoneLineNo: phone.lineNo,
        subAgentGrpPhoneDmpPk: {
          subAgentGrpPhoneSubAgentGrpTransNo: '',
          subAgentGrpPhoneLineNo: '',
        },
        subAgentGrpPhoneSubAgentGrpTransNo: '',
        subAgentGrpPhoneSubAgentGrpPk: '',
        subAgentGrpPhoneType: phone.type,
        subAgentGrpPhoneNumber: phone.number,
        subAgentGrpPhoneStatus: phone.status,
        subAgentGrpPhoneCreatedBy: '',
        subAgentGrpPhoneDateCreated: '',
        subAgentGrpPhoneUpdatedBy: '',
        subAgentGrpPhoneDateUpdated: '',
      };
      this.subAgentGrpPhones.push(a);
    });
  }

  get contacts() {
    return this.subAgentGrpContacts || [];
  }

  set contacts(e) {
    this.subAgentGrpContacts = e;
  }
}

export interface SubAgentGrp {
  subAgentGrpTransNo: string;
  subAgentGrpPk: string;
  subAgentGrpId: string;
  subAgentGrpCode: string;
  subAgentGrpName: string;
  subAgentGrpStatus: string;
  subAgentGrpAddress: string;
  subAgentGrpCity: string;
  subAgentGrpProvince: string;
  subAgentGrpCountry: string;
  subAgentGrpZipcode: string;
  subAgentGrpTin: string;
  subAgentGrpWfStatus: string;
  subAgentGrpWfTrackerId: number;
  subAgentGrpIsPosted: boolean;
  subAgentGrpCreatedBy: string;
  subAgentGrpDateCreated: string;
  subAgentGrpUpdatedBy: string;
  subAgentGrpDateUpdated: string;
  subAgentGrpPhones: SubAgentGrpPhone[];
  subAgentGrpContacts: Contact[];
  subAgentGrpCompleteAddress: string;
  subAgentGrpPhoneList: string;
  subAgentGrpPrimaryContactName: string;
  subAgentGrpPrimaryContactDesignation: string;
  subAgentGrpPrimaryContactEmail: string;
  subAgentGrpPrimaryContactGroupEmail: string;
  subAgentGrpPrimaryContactBirthdate: string;
  subAgentGrpPrimayContactPhoneList: string;
  subAgentGrpStatusLabel: string;
  rowNum: number;
  totalRowNum: number;
}

export interface SubAgentGrpPhone {
  subAgentGrpPhoneDmpPk: SubAgentGrpPhoneDmpPk;
  subAgentGrpPhoneSubAgentGrpTransNo: string;
  subAgentGrpPhoneSubAgentGrpPk: string;
  subAgentGrpPhoneLineNo: number;
  subAgentGrpPhoneType: string;
  subAgentGrpPhoneNumber: string;
  subAgentGrpPhoneStatus: string;
  subAgentGrpPhoneCreatedBy: string;
  subAgentGrpPhoneDateCreated: string;
  subAgentGrpPhoneUpdatedBy: any;
  subAgentGrpPhoneDateUpdated: any;
}

export interface SubAgentGrpPhoneDmpPk {
  subAgentGrpPhoneSubAgentGrpTransNo: any;
  subAgentGrpPhoneLineNo: any;
}
