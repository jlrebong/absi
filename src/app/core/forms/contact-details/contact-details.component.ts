import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() labels;

  @Input()
  contact;

  @Output()
  data = new EventEmitter();

  primaryLabel = [
    {
      id: 1,
      title: true,
    },
    {
      id: 0,
      title: false,
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      contactPk: this.contact.contactPk,
      contactId: this.contact.contactId,
      contactNameLast: [this.contact.contactNameLast, Validators.required],
      contactNameFirst: [this.contact.contactNameFirst, Validators.required],
      contactNameMiddleInitial: this.contact.contactNameMiddleInitial,
      contactNamePrefix: [this.contact.contactNamePrefix, Validators.required],
      contactNameSuffix: this.contact.contactNameSuffix,
      contactDesignation: [this.contact.contactDesignation, Validators.required],
      contactEmail: [this.contact.contactEmail, [Validators.required, Validators.email]],
      contactGroupEmail: [this.contact.contactGroupEmail, Validators.email],
      contactBirthdate: this.contact.contactBirthdate,
      contactIsDefault: this.contact.contactIsDefault,
      contactStatus: this.contact.contactStatus || "NEW",
      contactCreatedBy: this.contact.contactCreatedBy || '',
      contactDateCreated: this.contact.contactDateCreated || Date.now(),
      contactUpdatedBy: this.contact.contactUpdatedBy || '',
      contactDateUpdated: Date.now(),
    });

    this.form.valueChanges.subscribe((e) => {
      this.data.emit(e);
    });
  }


  getContactName(): string {
    const firstName = this.form.get('contactNameFirst').value || '';
    const middleInitial = this.form.get('contactNameMiddleInitial').value || '';
    const lastName = this.form.get('contactNameLast').value || '';
    const salutation = this.form.get('contactNamePrefix').value || '';

    // Join name components without extra spaces
    const nameComponents = [
      salutation,
      firstName,
      middleInitial,
      lastName,
    ].filter(Boolean);
    return nameComponents.join(' ');
  }

  getFullName() {
    if (
      this.form.get('contactNameFirst').value &&
      this.form.get('contactNameLast').value
    ) {
      return (
        this.form.get('contactNameLast').value +
        ', ' +
        this.form.get('contactNameFirst').value
      );
    } else {
      return 'Contact Name';
    }
  }
}
