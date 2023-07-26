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
    contactNamePrefix: '',
    contactNameSuffix: [ '', Validators.required],
    contactDesignation: ['', Validators.required],
    contactEmail: ['', [Validators.required, Validators.email]],
    contactGroupEmail: ['', Validators.email],
    contactBirthdate: '',
    contactIsDefault: false,
    contactStatus: ['NEW'],
    contactCreatedBy: '',
    contactDateCreated: '',
    contactUpdatedBy: '',
    contactDateUpdated: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((e) => this.data.emit(e));
  }
}
