import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LABELS } from '../../models/labels';
import { Contact, ContactPhone } from '../../models/contact-phone';
import { ContactDetailsComponent } from '../../forms/contact-details/contact-details.component';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
})
export class AddcontactComponent implements OnInit, AfterViewInit {
  @ViewChild(ContactDetailsComponent) contactDetails;

  labels = LABELS['adjuster'];

  contact: Contact;
  contactPhones: ContactPhone[];

  isValid = false;
  isModified = false;

  constructor(
    private dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.contact = data || ({} as Contact);
    this.contactPhones = this.contact.contactPhones;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  setDetails(e) {
    this.contact = e;
    this.isValid = this.contactDetails.form.valid;
    this.isModified = true; // Mark as modified when form data changes
  }

  setPhones(e) {
    this.contactPhones = e.value.map((phone) => {
      return {
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
    });
    this.isModified = true; // Mark as modified when form data changes
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
    // Check if the form has been modified
    // if (this.isModified && this.checkValid()) {
    //   this.dialogRef.close(this.contact);
    // } else {
    this.dialogRef.close(); // Close the dialog without saving anything
    // }
  }
}
