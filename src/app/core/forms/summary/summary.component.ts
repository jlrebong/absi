import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  summary = {
    main_title: "Account Referrer Summary",
    sections: [
      {
        title: "Account Referrer Information",
        elements: [
          {label: "Name", value: "Test"},
          {label: "Type", value: "Test"},
          {label: "Email Address", value: "Test"},
          {label: "TIN", value: "Test"},
          {label: "Account No.", value: "Test"},
        ]
      },
      {
        title: "Address and Phone/s",
        elements: [
          {label: "Address", value: "Test"},
          {label: "Phone/s", value: ["123456789", "987654321"]},
        ]
      },
      {
        title: "Primary Contact",
        elements: [
          {label: "Full Name", value: "Test"},
          {label: "Designation", value: "Test"},
          {label: "Phones", value: ["123456789", "987654321"]},
        ]
      },
      {
        // title: "",
        elements: [
          {label: "Email Address", value: "Test"},
          {label: "Group Email Address", value: "Test"},
          {label: "Date of Birth", value: "01/01/1990"},
        ]
      },
    ]
  };

  form = this.fb.group({
    agree: false
  });

  constructor(private fb: FormBuilder) {}


}
