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
  