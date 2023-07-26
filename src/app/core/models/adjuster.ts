import { ContactPhone } from "./contact-phone"

// This is the way to create a class from an interface in angular
// interface-class merging
export interface AdjusterClass extends Adjuster {}
export class AdjusterClass {
}

export interface Adjuster {
    adjusterTransNo: any
    adjusterPk: string
    adjusterId: string
    adjusterCode: string
    adjusterName: string
    adjusterStatus: string
    adjusterAddress: string
    adjusterCity: string
    adjusterProvince: string
    adjusterCountry: string
    adjusterZipcode: string
    adjusterSpecialty: string
    adjusterWfStatus: any
    adjusterWfTrackerId: any
    adjusterIsPosted: any
    adjusterCreatedBy: string
    adjusterDateCreated: string
    adjusterUpdatedBy: string
    adjusterDateUpdated: string
    adjusterPhones: AdjusterPhone[]
    adjusterContacts: AdjusterContact[]
    adjusterCompleteAddress: string
    adjusterPhoneList: string
    adjusterPrimaryContactName: string
    adjusterPrimaryContactDesignation: string
    adjusterPrimaryContactEmail: string
    adjusterPrimaryContactGroupEmail: any
    adjusterPrimaryContactBirthdate: any
    adjusterPrimayContactPhoneList: any
    adjusterStatusLabel: any
    rowNum: any
    totalRowNum: any
  }
  
  export interface AdjusterPhone {
    adjusterPhoneDmpPk: AdjusterPhoneDmpPk
    adjusterPhoneAdjusterTransNo: any
    adjusterPhoneAdjusterPk: string
    adjusterPhoneLineNo: number
    adjusterPhoneType: string
    adjusterPhoneNumber: string
    adjusterPhoneStatus: any
    adjusterPhoneCreatedBy: string
    adjusterPhoneDateCreated: string
    adjusterPhoneUpdatedBy: any
    adjusterPhoneDateUpdated: any
  }
  
  export interface AdjusterPhoneDmpPk {
    adjusterPhoneAdjusterTransNo: any
    adjusterPhoneLineNo: any
  }
  
  export interface AdjusterContact {
    contactPk: string
    contactId: string
    contactNameLast: string
    contactNameFirst: string
    contactNameMiddleInitial: string
    contactNamePrefix: string
    contactNameSuffix?: string
    contactDesignation: string
    contactEmail: string
    contactGroupEmail: any
    contactBirthdate: any
    contactIsDefault: boolean
    contactStatus: any
    contactCreatedBy: string
    contactDateCreated: string
    contactUpdatedBy?: string
    contactDateUpdated?: string
    contactPhones: ContactPhone[]
  }
  
