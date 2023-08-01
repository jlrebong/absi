import { Contact } from './contact-phone';

export interface SubAgentSubGrpClass extends SubAgentSubGrp {}
export class SubAgentSubGrpClass {
  get information() {
    return {
      status: this.subAgentSubGrpStatus || 'new',
      name: this.subAgentSubGrpName || '',
      code: this.subAgentSubGrpCode || '',
    };
  }

  set information(e) {
    this.subAgentSubGrpStatus = e.status;
    this.subAgentSubGrpName = e.name;
    this.subAgentSubGrpCode = e.code;
  }

  get location() {
    return {
      address: this.subAgentSubGrpAddress || '',
      country: this.subAgentSubGrpCountry || '',
      province: this.subAgentSubGrpProvince || '',
      city: this.subAgentSubGrpCity || '',
      zip: this.subAgentSubGrpZipcode || '',
      phones: this.subAgentSubGrpPhones || [],
    };
  }

  set location(e) {
    this.subAgentSubGrpAddress = e.address;
    this.subAgentSubGrpCountry = e.country;
    this.subAgentSubGrpProvince = e.province;
    this.subAgentSubGrpCity = e.city;
    this.subAgentSubGrpZipcode = e.zip;
  }

  get phones() {
    return this.subAgentSubGrpPhones?.map((e) => {
      return {
        lineNo: e.subAgentSubGrpPhoneLineNo,
        type: e.subAgentSubGrpPhoneType,
        number: e.subAgentSubGrpPhoneNumber,
        status: e.subAgentSubGrpPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.subAgentSubGrpPhones = [];

    e.forEach((phone) => {
      let a = {
        subAgentSubGrpPhoneLineNo: phone.lineNo,
        subAgentSubGrpPhoneDmpPk: {
          subAgentSubGrpPhoneSubAgentSubGrpTransNo: '',
          subAgentSubGrpPhoneLineNo: '',
        },
        subAgentSubGrpPhoneSubAgentSubGrpTransNo: '',
        subAgentSubGrpPhoneSubAgentSubGrpPk: '',
        subAgentSubGrpPhoneType: phone.type,
        subAgentSubGrpPhoneNumber: phone.number,
        subAgentSubGrpPhoneStatus: phone.status,
        subAgentSubGrpPhoneCreatedBy: '',
        subAgentSubGrpPhoneDateCreated: '',
        subAgentSubGrpPhoneUpdatedBy: '',
        subAgentSubGrpPhoneDateUpdated: '',
      };
      this.subAgentSubGrpPhones.push(a);
    });
  }

  get contacts() {
    return this.subAgentSubGrpContacts || [];
  }

  set contacts(e) {
    this.subAgentSubGrpContacts = e;
  }
}

export interface SubAgentSubGrp {
  subAgentSubGrpTransNo: string;
  subAgentSubGrpPk: string;
  subAgentSubGrpId: string;
  subAgentSubGrpCode: string;
  subAgentSubGrpName: string;
  subAgentSubGrpStatus: string;
  subAgentSubGrpAddress: string;
  subAgentSubGrpCity: string;
  subAgentSubGrpProvince: string;
  subAgentSubGrpCountry: string;
  subAgentSubGrpZipcode: string;
  subAgentSubGrpTin: string;
  subAgentSubGrpWfStatus: string;
  subAgentSubGrpWfTrackerId: number;
  subAgentSubGrpIsPosted: boolean;
  subAgentSubGrpCreatedBy: string;
  subAgentSubGrpDateCreated: string;
  subAgentSubGrpUpdatedBy: string;
  subAgentSubGrpDateUpdated: string;
  subAgentSubGrpPhones: SubAgentSubGrpPhone[];
  subAgentSubGrpContacts: Contact[];
  subAgentSubGrpCompleteAddress: string;
  subAgentSubGrpPhoneList: string;
  subAgentSubGrpPrimaryContactName: string;
  subAgentSubGrpPrimaryContactDesignation: string;
  subAgentSubGrpPrimaryContactEmail: string;
  subAgentSubGrpPrimaryContactGroupEmail: string;
  subAgentSubGrpPrimaryContactBirthdate: string;
  subAgentSubGrpPrimayContactPhoneList: string;
  subAgentSubGrpStatusLabel: string;
  rowNum: number;
  totalRowNum: number;
}

export interface SubAgentSubGrpPhone {
  subAgentSubGrpPhoneDmpPk: SubAgentSubGrpPhoneDmpPk;
  subAgentSubGrpPhoneSubAgentSubGrpTransNo: string;
  subAgentSubGrpPhoneSubAgentSubGrpPk: string;
  subAgentSubGrpPhoneLineNo: number;
  subAgentSubGrpPhoneType: string;
  subAgentSubGrpPhoneNumber: string;
  subAgentSubGrpPhoneStatus: string;
  subAgentSubGrpPhoneCreatedBy: string;
  subAgentSubGrpPhoneDateCreated: string;
  subAgentSubGrpPhoneUpdatedBy: any;
  subAgentSubGrpPhoneDateUpdated: any;
}

export interface SubAgentSubGrpPhoneDmpPk {
  subAgentSubGrpPhoneSubAgentSubGrpTransNo: any;
  subAgentSubGrpPhoneLineNo: any;
}
