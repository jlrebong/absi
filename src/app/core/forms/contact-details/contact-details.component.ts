import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() labels;
  contactDetailsForm = this.fb.group({
    contactName: '',
    status: ['NEW'],
    lastName: ['', Validators.required],
    designation: ['', Validators.required],
    firstName: ['', Validators.required],
    middleInitial: '',
    email: ['', [Validators.required, Validators.email]],
    salutation: ['', Validators.required],
    suffix: '',
    birthDate: '',
    extraEmail: [[''], Validators.email],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.contactDetailsForm
    //   .get('lastName')
    //   ?.valueChanges.subscribe((id) => console.log(id));
    // this.contactDetailsForm
    //   .get('designation')
    //   ?.valueChanges.subscribe((id) => console.log(id));
    // this.contactDetailsForm
    //   .get('firstName')
    //   ?.valueChanges.subscribe((id) => console.log(id));
    // this.contactDetailsForm
    //   .get('email')
    //   ?.valueChanges.subscribe((id) => console.log(id));
    this.contactDetailsForm
      .get('birthDate')
      ?.valueChanges.subscribe((id) => console.log(id));
  }
}
