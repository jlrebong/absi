import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  form = this.fb.group({
    contactPk: '',
    contactId: '',
    contactNameLast: ['', Validators.required],
    contactNameFirst: ['', Validators.required],
    contactNameMiddleInitial: '',
    contactNamePrefix: ['', Validators.required],
    contactNameSuffix: '',
    contactDesignation: ['', Validators.required],
    contactEmail: ['', [Validators.required, Validators.email]],
    contactGroupEmail: ['', Validators.email],
    contactBirthdate: '',
    contactIsDefault: false,
    contactStatus: ['NEW'],
    contactCreatedBy: '',
    contactDateCreated: '',
    contactUpdatedBy: '',
    contactDateUpdated: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
}
