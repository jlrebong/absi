import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { LABELS } from '../../models/labels';
import { Contact, ContactPhone } from '../../models/contact-phone';
import { ContactDetailsComponent } from '../../forms/contact-details/contact-details.component';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit, AfterViewInit {

  @ViewChild(ContactDetailsComponent) contactDetails;

  labels = LABELS["adjuster"];

  contact:Contact;
  contactPhones: ContactPhone[];

  isValid = false;
  
  constructor(
    private dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.contact = data || {} as Contact;

      this.contactPhones = this.contact.contactPhones;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
  }

  setDetails(e) {
    this.contact = e;
    this.isValid = this.contactDetails.form.valid;
  }

  setPhones(e) {
    console.log(e);
    this.contactPhones = [];
    e.value.forEach(phone=>{
      let a = {
          contactPhonePk: {
              contactPhoneContactPk: '',
              contactPhoneLineNo: 0,
          },
          contactPhoneContactPk: '',
          contactPhoneLineNo: phone.lineNo,
          contactPhoneType: phone.type,
          contactPhoneNumber: phone.number,
          contactPhoneStatus: phone.status,
          contactPhoneCreatedBy: '',
          contactPhoneDateCreated: '',
          contactPhoneUpdatedBy: '',
          contactPhoneDateUpdated: '',
      };
      this.contactPhones.push(a);
    });
  }

  checkValid() {
    return this.isValid;
  }

  save() {
    this.contact.contactPhones = this.contactPhones;
    console.log(this.contact);
    this.dialogRef.close(this.contact);
  }

  close() {
      this.dialogRef.close();
  }

}
