export interface Contact {
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
  

export interface ContactPhone {
    contactPhonePk: ContactPhonePk
    contactPhoneContactPk: string
    contactPhoneLineNo: number
    contactPhoneType: string
    contactPhoneNumber: string
    contactPhoneStatus: any
    contactPhoneCreatedBy: string
    contactPhoneDateCreated: string
    contactPhoneUpdatedBy: any
    contactPhoneDateUpdated: any
  }
  
  export interface ContactPhonePk {
    contactPhoneContactPk: string
    contactPhoneLineNo: number
  }
  