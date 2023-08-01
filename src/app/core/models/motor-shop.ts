import { Contact } from './contact-phone';

export interface MotorShopClass extends MotorShop {}
export class MotorShopClass {
  get information() {
    return {
      status: this.motorShopStatus || 'new',
      name: this.motorShopName || '',
      code: this.motorShopCode || '',
      tin: this.motorShopTin || '',
    };
  }

  set information(e) {
    this.motorShopStatus = e.status;
    this.motorShopName = e.name;
    this.motorShopCode = e.code;
    this.motorShopTin = e.tin;
  }

  get location() {
    return {
      address: this.motorShopAddress || '',
      country: this.motorShopCountry || '',
      province: this.motorShopProvince || '',
      city: this.motorShopCity || '',
      zip: this.motorShopZipcode || '',
      phones: this.motorShopPhones || [],
    };
  }

  set location(e) {
    this.motorShopAddress = e.address;
    this.motorShopCountry = e.country;
    this.motorShopProvince = e.province;
    this.motorShopCity = e.city;
    this.motorShopZipcode = e.zip;
  }

  get phones() {
    return this.motorShopPhones?.map((e) => {
      return {
        lineNo: e.motorShopPhoneLineNo,
        type: e.motorShopPhoneType,
        number: e.motorShopPhoneNumber,
        status: e.motorShopPhoneStatus,
      };
    });
  }

  set phones(e) {
    this.motorShopPhones = [];

    e.forEach((phone) => {
      let a = {
        motorShopPhoneLineNo: phone.lineNo,
        motorShopPhoneDmpPk: {
          motorShopPhoneMotorShopTransNo: '',
          motorShopPhoneLineNo: '',
        },
        motorShopPhoneMotorShopTransNo: '',
        motorShopPhoneMotorShopPk: '',
        motorShopPhoneType: phone.type,
        motorShopPhoneNumber: phone.number,
        motorShopPhoneStatus: phone.status,
        motorShopPhoneCreatedBy: '',
        motorShopPhoneDateCreated: '',
        motorShopPhoneUpdatedBy: '',
        motorShopPhoneDateUpdated: '',
      };
      this.motorShopPhones.push(a);
    });
  }

  get contacts() {
    return this.motorShopContacts || [];
  }

  set contacts(e) {
    this.motorShopContacts = e;
  }
}

export interface MotorShop {
  motorShopTransNo: string;
  motorShopPk: string;
  motorShopId: string;
  motorShopCode: string;
  motorShopName: string;
  motorShopStatus: string;
  motorShopAddress: string;
  motorShopCity: string;
  motorShopProvince: string;
  motorShopCountry: string;
  motorShopZipcode: string;
  motorShopTin: string;
  motorShopWfStatus: string;
  motorShopWfTrackerId: number;
  motorShopIsPosted: boolean;
  motorShopCreatedBy: string;
  motorShopDateCreated: string;
  motorShopUpdatedBy: string;
  motorShopDateUpdated: string;
  motorShopPhones: MotorShopPhone[];
  motorShopContacts: Contact[];
  motorShopCompleteAddress: string;
  motorShopPhoneList: string;
  motorShopPrimaryContactName: string;
  motorShopPrimaryContactDesignation: string;
  motorShopPrimaryContactEmail: string;
  motorShopPrimaryContactGroupEmail: string;
  motorShopPrimaryContactBirthdate: string;
  motorShopPrimayContactPhoneList: string;
  motorShopStatusLabel: string;
  rowNum: number;
  totalRowNum: number;
}

export interface MotorShopPhone {
  motorShopPhoneDmpPk: MotorShopPhoneDmpPk;
  motorShopPhoneMotorShopTransNo: string;
  motorShopPhoneMotorShopPk: string;
  motorShopPhoneLineNo: number;
  motorShopPhoneType: string;
  motorShopPhoneNumber: string;
  motorShopPhoneStatus: string;
  motorShopPhoneCreatedBy: string;
  motorShopPhoneDateCreated: string;
  motorShopPhoneUpdatedBy: string;
  motorShopPhoneDateUpdated: string;
}

export interface MotorShopPhoneDmpPk {
  motorShopPhoneMotorShopTransNo: any;
  motorShopPhoneLineNo: any;
}
